export default class Student {
  private _workGrades: number[];
  private _examsGrades: number[];
  
  constructor(private _name: string, private _enrollment: string) {
    this._examsGrades = [];
    this._workGrades = [];
  }
  
  public get enrollment(): string {
    return this._enrollment;
  };

  public set enrollment(value: string) {
    this._enrollment = value;
  };

  public get name(): string {
    return this._name;
  };

  public set name(value: string) {
    this._name = value;
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
}