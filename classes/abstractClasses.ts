//-------------------------------------------------------------------------
//if we set the consructor to private we can only use the static vars of the class
//If it's not an abstract class we can do this
//we can instantiate WITHIN the class itself
//but since our Department class is an abstract class we can't instantiate anything

class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;

  private constructor() {
    console.log("Connecting to database");
  }
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string) {
    console.log(`Executing: ${sql}`);
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2);
//-----------------------------------------------------------------------------

//abstract classes cannot be instantiated
//abstract members of the base class need to be implemented within the child class
type Holidays = {
  date: Date;
  reason: string;
}[];
abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
  //if a constructor is protected - we can only access it from the child classes

  //we can add a method to set up the holidays and since it is public all classes inherit it
  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
  //Method 'printHolidays' cannot have an implementation
  // because it is marked abstract.
  public abstract printHolidays(): void;
}
//when we dont explicitly declare a constructor for a class
//typescript copies the parent constructor with the modificators and all
//just adds a super call
class ItDepartment extends Department {
  protected holidays: Holidays = [];
  // TypeScript behind the curtains typescript does this
  // constructor(name: string) {
  //   super(name);
  // }

  constructor(name: string) {
    super(name);
  }
  //overriding a abstract method from base class
  public override printHolidays(): void {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log("Here is the list of holidays in it department");
    this.holidays.forEach(
      (
        holiday: { date: Date; reason: string },
        index: number,
        holidays: Holidays,
      ) => {
        console.log(`${index + 1}, ${holiday.reason}, ${holiday.date}`);
      },
    );
  }
}

//we are not implementing an abstract method from the abstract class
class AdminDepartment extends Department {
  constructor(
    name: string,
    protected holidays: Holidays, //we can also use the shorthand constructor
  ) {
    super(name);
  }
  public override printHolidays(): void {
    console.log("We are not printing anything here");
  }
}

const itDepartment = new ItDepartment("dept");
let holidays: Holidays = [
  { date: new Date(), reason: "fun" },
  { date: new Date(), reason: "trip" },
  { date: new Date(), reason: "promotion" },
];
itDepartment.addHolidays(holidays);
itDepartment.printHolidays();
const admin = new AdminDepartment("name", holidays);
admin.printHolidays();

//-------------------------------------------------------------------
//abstract class project
abstract class SmartDevice {
  private static _id: number = 0;
  private _isOnline: boolean = false;
  protected abstract batteryLevel: number;
  protected constructor(protected name: string) {}

  public get isOnline() {
    return this._isOnline;
  }

  /*public set isOnline(isOnline:boolean){
    this._isOnline = isOnline;
  } */

  //this makes it readonly
  public get id(): number {
    return ++SmartDevice._id;
  }

  public connect(): void {
    this._isOnline = true;
  }

  public disconnect(): void {
    this._isOnline = false;
  }

  public getDetails(): string {
    return `Info about the device -  Name: ${this.name}, ID: ${this.id}, isOnline: ${this._isOnline}`;
  }
  //we need return type if we declare it as abstract
  //if we don't specify it - it's error
  public abstract performAction(action: string): void;
}

//this class must be declared as abstract because it uses
//an abstract function without implementing it
abstract class SecureDevice extends SmartDevice {
  private _pinCode: string;

  protected constructor(name: string, pinCode: string) {
    super(name);
    this._pinCode = pinCode;
  }

  protected authenticate(pin: string): boolean {
    if (pin === this._pinCode) {
      console.log("Successful authentication");
    } else {
      console.log("Unsuccessful authentication: wrong password");
    }
    return pin === this._pinCode;
  }

  public executeSecureAction(action: string, pin: string) {
    if (this.authenticate(pin)) {
      this.performAction(action);
    }
  }
}

//end classes
class SmartLight extends SmartDevice {
  public brightness: number;
  public batteryLevel: number = 100;

  public constructor(name: string) {
    super(name);
  }

  public performAction(action: string): void {
    if (action === "dim") {
      this.brightness -= 10;
    }
  }
}

class SmartLock extends SecureDevice {
  isLocked: boolean = true;
  batteryLevel = 100;

  public constructor(name: string, pinCode: string) {
    super(name, pinCode);
  }
  performAction(action: string): void {
    if (action === "unlock") {
      this.isLocked = false;
      this.batteryLevel -= 1;
    } else if (action === "lock") {
      this.isLocked = true;
      this.batteryLevel -= 1;
    }
  }
}

class SmartCamera extends SmartDevice {
  batteryLevel: number = 100;

  public constructor(name: string) {
    super(name);
  }

  startStreaming(): void {
    if (this.isOnline) {
      console.log("Start streaming");
    }
  }

  performAction(action: string): void {
    if (action === "stream") {
      console.log("We are streaming from another place");
    }
  }
}

function main() {
  const arrayOfDevices: SmartDevice[] = [];
  const smartLight = new SmartLight("myLight");
  const smartLock = new SmartLock("myLock", "pass1234");
  const smartCamera = new SmartCamera("myCamera");

  arrayOfDevices.push(smartLight);
  arrayOfDevices.push(smartCamera);
  arrayOfDevices.push(smartLock);

  for (let device of arrayOfDevices) {
    device.connect();
  }
  console.log("where am i");
  smartLock.executeSecureAction("unlock", "pass1234");
  smartLock.executeSecureAction("unlock", "pass1235");
}

main();
/* . 
Абстрактен клас SmartDevice
Това е основата на всяко устройство.

Член-данни:

id (string, readonly) – уникален идентификатор (генерирай го в конструктора).

name (string, protected) – име на устройството.

isOnline (boolean, private) – статус на връзката (по подразбиране false).

batteryLevel (number, protected abstract) – всяко устройство има батерия, но различните устройства я изчисляват или отчитат различно.

Конструктор: Трябва да бъде protected. Приема само name.

Методи:

connect() и disconnect() (public) – променят статуса isOnline и логват съобщение в конзолата.

getDetails() (public) – връща стринг с информация за устройството (име, ID, статус).

performAction(action: string) (public abstract) – абстрактен метод. Всяко устройство реагира различно на команди (напр. "включи", "заключи", "намали").

2. Абстрактен клас SecureDevice (Наследява SmartDevice)
Някои устройства (като брави и аларми) изискват пин код за достъп. Този клас също трябва да е абстрактен.

Член-данни:

pinCode (string, private) – скрит пин код за сигурност.

Конструктор: protected. Приема name и pinCode. Предава името нагоре.

Методи:

authenticate(pin: string) (protected) – проверява дали подаденият пин съвпада.

executeSecureAction(action: string, pin: string) (public) – метод, който първо автентикира потребителя и ако е успешно, извиква абстрактния метод performAction(action).

3. Конкретни класове (Крайни устройства)
Реализирай следните 3 класа, които да могат да бъдат инстанцирани:

SmartLight (Наследява SmartDevice):

Има допълнително свойство brightness (number, от 0 до 100).

Конструкторът му трябва да е публичен (за да правиш new SmartLight(...)).

Имплементира batteryLevel (просто връща статично число, напр. 100, защото е в тока).

Имплементира performAction(). Ако командата е "dim", намалява яркостта.

SmartLock (Наследява SecureDevice):

Има допълнително свойство isLocked (boolean).

Имплементира batteryLevel (намалява с 1% при всяко отключване/заключване).

Имплементира performAction(). Ако е "unlock", променя isLocked на false.

SmartCamera (Наследява SmartDevice):

Има метод startStreaming(), който работи само ако устройството е онлайн (isOnline е true). Тъй като isOnline е private в родителя, помисли как ще провериш това (може би ти трябва public/protected getter в родителя?).

Тест на задачата (Напиши код, който):
Създава масив от тип SmartDevice[], съдържащ една лампа, една брава и една камера.

Завърти цикъл през масива, свържи всички устройства към мрежата (connect()).

Опитай се да отключиш бравата през executeSecureAction с грешен и с верен пин.

Опитай се да пуснеш стрийм на камерата преди и след като я свържеш онлайн. */
