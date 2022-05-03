import Enrollable from "./Enrollable.interface";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
  private _enrollment: string = String();
  private _workGrades: number[];
  private _examsGrades: number[];
  
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._workGrades = [];
  }
  
  public get enrollment(): string {
    return this._enrollment;
  };

  public set enrollment(value: string) {
    this._enrollment = value;
  };

  public get workGrades(): number[] {
    return this._workGrades;
  };

  public set workGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }

    this._workGrades = value;
  };

  public get examsGrades(): number[] {
    return this._examsGrades;
  };

  public set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._examsGrades = value;
  };

  sumGrades(): number {
    const sum = [...this._examsGrades, ...this._workGrades].reduce((sum, grade) => sum += grade, 0);
    return sum;
  }

  gradeAverage(): number {
    const sumGrades = this.sumGrades();
    const average = sumGrades / (this.examsGrades.length + this.workGrades.length);
    return average;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}