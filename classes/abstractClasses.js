//-------------------------------------------------------------------------
//if we set the consructor to private we can only use the static vars of the class
//If it's not an abstract class we can do this
//we can instantiate WITHIN the class itself
//but since our Department class is an abstract class we can't instantiate anything
class DatabaseConnection {
    constructor() {
        console.log("Connecting to database");
    }
    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
    query(sql) {
        console.log(`Executing: ${sql}`);
    }
}
DatabaseConnection.instance = null;
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2);
class Department {
    constructor(name) {
        this.name = name;
    }
    //if a constructor is protected - we can only access it from the child classes
    //we can add a method to set up the holidays and since it is public all classes inherit it
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
//when we dont explicitly declare a constructor for a class
//typescript copies the parent constructor with the modificators and all
//just adds a super call
class ItDepartment extends Department {
    // TypeScript behind the curtains typescript does this
    // constructor(name: string) {
    //   super(name);
    // }
    constructor(name) {
        super(name);
        this.holidays = [];
    }
    //overriding a abstract method from base class
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log("There are no holidays");
        }
        console.log("Here is the list of holidays in it department");
        this.holidays.forEach((holiday, index, holidays) => {
            console.log(`${index + 1}, ${holiday.reason}, ${holiday.date}`);
        });
    }
}
//we are not implementing an abstract method from the abstract class
class AdminDepartment extends Department {
    constructor(name, holidays) {
        super(name);
        this.holidays = holidays;
    }
    printHolidays() {
        console.log("We are not printing anything here");
    }
}
const itDepartment = new ItDepartment("dept");
let holidays = [
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
class SmartDevice {
    constructor(name) {
        this.name = name;
        this._isOnline = false;
    }
    get isOnline() {
        return this._isOnline;
    }
    /*public set isOnline(isOnline:boolean){
      this._isOnline = isOnline;
    } */
    //this makes it readonly
    get id() {
        return ++SmartDevice._id;
    }
    connect() {
        this._isOnline = true;
    }
    disconnect() {
        this._isOnline = false;
    }
    getDetails() {
        return `Info about the device -  Name: ${this.name}, ID: ${this.id}, isOnline: ${this._isOnline}`;
    }
}
SmartDevice._id = 0;
//this class must be declared as abstract because it uses
//an abstract function without implementing it
class SecureDevice extends SmartDevice {
    constructor(name, pinCode) {
        super(name);
        this._pinCode = pinCode;
    }
    authenticate(pin) {
        if (pin === this._pinCode) {
            console.log("Successful authentication");
        }
        else {
            console.log("Unsuccessful authentication: wrong password");
        }
        return pin === this._pinCode;
    }
    executeSecureAction(action, pin) {
        if (this.authenticate(pin)) {
            this.performAction(action);
        }
    }
}
//end classes
class SmartLight extends SmartDevice {
    constructor(name) {
        super(name);
        this.batteryLevel = 100;
    }
    performAction(action) {
        if (action === "dim") {
            this.brightness -= 10;
        }
    }
}
class SmartLock extends SecureDevice {
    constructor(name, pinCode) {
        super(name, pinCode);
        this.isLocked = true;
        this.batteryLevel = 100;
    }
    performAction(action) {
        if (action === "unlock") {
            this.isLocked = false;
            this.batteryLevel -= 1;
        }
        else if (action === "lock") {
            this.isLocked = true;
            this.batteryLevel -= 1;
        }
    }
}
class SmartCamera extends SmartDevice {
    constructor(name) {
        super(name);
        this.batteryLevel = 100;
    }
    startStreaming() {
        if (this.isOnline) {
            console.log("Start streaming");
        }
    }
    performAction(action) {
        if (action === "stream") {
            console.log("We are streaming from another place");
        }
    }
}
function main() {
    const arrayOfDevices = [];
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
export {};
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
//# sourceMappingURL=abstractClasses.js.map