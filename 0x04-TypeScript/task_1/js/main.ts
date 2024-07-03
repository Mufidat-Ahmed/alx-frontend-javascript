interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: 'Janet',
  lastName: 'Jackson',
  fullTimeEmployee: true,
  location: 'London',
  contract: true,
}

console.log(teacher1);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Smith',
    location: 'America',
    fullTimeEmployee: false,
    numberOfReports: 17,
  };

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'mike', 'tyson');
console.log(student1);
