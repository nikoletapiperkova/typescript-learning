const MAX_TEACHERS_ALLOWED = 30;
const MAX_STUDENTS_ALLOWED = 50;

enum Subjects {
  math = "math",
  bulgarian = "bulgarian",
  english = "english",
  physics = "physics",
  chemistry = "chemistry",
  literatue = "literature",
  physicalEductation = "physicalEductation",
}
enum Grades {
  excellent = 6,
  veryGood = 5,
  good = 4,
  average = 3,
  weak = 2,
}
type SubjectGrade = {
  [key in Subjects]?: Grades[];
};

class Student {
  private subjectGrades: SubjectGrade = {};
  constructor(
    private _name: string,
    private _age: number,
    subjects: Subjects[],
  ) {
    for (let i = 0; i < subjects.length; i++) {
      this.subjectGrades[subjects[i]] = [];
    }
  }
  public get name() {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
  public get age() {
    return this._age;
  }
  public set age(age: number) {
    this._age = age;
  }

  public addSubject(subject: Subjects): void {
    this.subjectGrades[subject] = [];
  }

  public addGrade(subject: Subjects, grade: Grades): void {
    if (!this.subjectGrades[subject]) {
      this.addSubject(subject);
    }
    if (this.subjectGrades[subject]!.length >= 4) {
      console.log("Sorry too many grades");
    } else {
      this.subjectGrades[subject]!.push(grade);
    }
  }
}

class Class {
  constructor(
    private _grade: number,
    private _letter: string,
    private _listOfStudents: Student[],
  ) {}

  public get className(): string {
    return this._grade + this._letter;
  }

  public addStudent(student: Student): void {
    this._listOfStudents.push(student);
  }
  public removeStudent(student: Student): void {
    this._listOfStudents = this._listOfStudents.filter((a) => {
      student.name !== a.name;
    });
  }

  public get students(): Student[] {
    return this._listOfStudents;
  }
}

type Sex = "M" | "F";
class Teacher {
  private _classes: Class[] = [];
  constructor(
    private _name: string,
    private _age: number,
    private _sex: Sex,
    private _subject: Subjects,
  ) {}

  public get info() {
    return `Name: ${this._name}, age: ${this._age}, sex: ${this._sex}, subject: ${this._subject}, classes:${this._classes}`;
  }
  //if there are changes/errors regarding their name
  public get name() {
    return this._name;
  }
  public set name(name: string) {
    if (this._name !== "") {
      this._name = name;
    }
  }
  public get age() {
    return this._age;
  }

  public set age(age: number) {
    if (age > 0 && age < 150) {
      this._age = age;
    }
  }

  public set subject(subject: Subjects) {
    this._subject = subject;
  }
  public get subject() {
    return this._subject;
  }
  public get classes() {
    return this._classes;
  }
  public set classes(classes: Class[]) {
    this._classes = classes;
  }

  public addClass(someClass: Class) {
    this._classes.push(someClass);
  }
  public removeClass(someClass: Class) {
    this._classes = this._classes.filter(
      (a) => a.className !== someClass.className,
    );
  }
}

class TeacherRoom {
  private _maxTeachers = MAX_TEACHERS_ALLOWED;
  private _teachersList: Teacher[] = [];

  constructor(private _size: number) {}

  public get teachers() {
    return this._teachersList;
  }
  public set teachers(teachersList: Teacher[]) {
    if (this._maxTeachers >= teachersList.length) {
      this._teachersList = teachersList;
    }
  }
  public addTeacher(teacher: Teacher) {
    if (this.teachers.length >= this._maxTeachers) {
      console.log("Too many teachers in one place");
    } else {
      this.teachers.push(teacher);
    }
  }
  public removeTeacher(teacher: Teacher) {
    this.teachers = this.teachers.filter((a) => a.info !== teacher.info);
  }
}

class ClassRoom {
  private _maxStudents = MAX_STUDENTS_ALLOWED;
  constructor(
    private _size: number,
    private _class: Class,
  ) {}

  set class(someClass: Class) {
    this._class = someClass;
  }
  get class() {
    return this._class;
  }
  get size() {
    return this._size;
  }
}

class Floor {
  constructor(
    private _classrooms: ClassRoom[],
    private _teachersRooms: TeacherRoom[],
    private _numOfToilets: number,
  ) {
    if (this._teachersRooms.length === 0) {
      throw new Error("Impossible to have a floor without a classroom");
    }
  }
  get classrooms() {
    return this._classrooms;
  }
  get teachersRooms() {
    return this._teachersRooms;
  }
  get toiletNumber() {
    return this._numOfToilets;
  }
}

class Building {
  constructor(
    private _floors: Floor[],
    private _size: number,
  ) {}
  get floors() {
    return this._floors;
  }
  get size() {
    return this._size;
  }
}

type Address = {
  city: string;
  street: string;
  numOfStreet: number;
};

class School {
  private _listOfTeachers: Teacher[] = [];
  private _listOfClasses: Class[] = [];

  constructor(
    private _name: string,
    private readonly _yearOfFoundation: number,
    private _address: Address,
    private _building: Building,
  ) {
    const letters = ["A", "B", "C", "D", "E"];

    for (let grade = 8; grade <= 12; grade++) {
      for (let j = 0; j < letters.length; j++) {
        this._listOfClasses.push(new Class(grade, letters[j], []));
      }
    }
  }
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }

  public get yearOfFoundation(): number {
    return this._yearOfFoundation;
  }

  public get address(): Address {
    return this._address;
  }

  public get building(): Building {
    return this._building;
  }

  public addTeacher(teacher: Teacher): void {
    this._listOfTeachers.push(teacher);
  }

  public addClass(someClass: Class): void {
    this._listOfClasses.push(someClass);
  }

  public get teachers(): Teacher[] {
    return this._listOfTeachers;
  }

  public get classes(): Class[] {
    return this._listOfClasses;
  }
}

//-------------------we test everything out here ----------------------------//

const mathSubject = Subjects.math;
const bulgarianSubject = Subjects.bulgarian;
const englishSubject = Subjects.english;

const student1 = new Student("ivan", 15, [mathSubject, bulgarianSubject]);
const student2 = new Student("maria", 16, [bulgarianSubject, englishSubject]);
const student3 = new Student("georgi", 15, [mathSubject, englishSubject]);

student1.addGrade(mathSubject, Grades.excellent);
student1.addGrade(mathSubject, Grades.veryGood);
student1.addGrade(bulgarianSubject, Grades.good);

student2.addGrade(bulgarianSubject, Grades.excellent);
student2.addGrade(englishSubject, Grades.excellent);

student3.addGrade(mathSubject, Grades.average);

const class8A = new Class(8, "A", [student1, student2]);
const class8B = new Class(8, "B", [student3]);

const teacher1 = new Teacher("dimitar dimitrov", 42, "M", mathSubject);
const teacher2 = new Teacher("elena vasilva", 38, "F", bulgarianSubject);

teacher1.addClass(class8A);
teacher1.addClass(class8B);
teacher2.addClass(class8A);

const teacherRoom1 = new TeacherRoom(25);
teacherRoom1.addTeacher(teacher1);
teacherRoom1.addTeacher(teacher2);

const classRoom1 = new ClassRoom(60, class8A);
const classRoom2 = new ClassRoom(55, class8B);

const floor1 = new Floor([classRoom1, classRoom2], [teacherRoom1], 2);

const schoolBuilding = new Building([floor1], 450);

const schoolAddress: Address = {
  city: "Sofia",
  street: "James Bouchier",
  numOfStreet: 50,
};

const mySchool = new School(
  "SU St. Kliment Ohridski",
  1988,
  schoolAddress,
  schoolBuilding,
);

mySchool.addTeacher(teacher1);
mySchool.addTeacher(teacher2);
mySchool.addClass(class8A);
mySchool.addClass(class8B);

console.log(mySchool);
