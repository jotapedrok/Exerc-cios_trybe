import Employee from "./Employee";
import Person from "./Person";

export default class Teacher extends Person implements Employee{
  private _registration: string = String();
  private _admissionDate: Date;

  constructor (name: string, birthDate: Date, private _salary: number, private _subject: string) {
    super(name, birthDate);
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  public get subject(): string {
    return this._subject;
  };

  public set subject(value: string) {
    this._subject = value;
  };

  public get salary(): number {
    return this._salary;
  };

  public set salary(value: number) {
    this._salary = value;
  };

  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    this._registration = value;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }
  public set admissionDate(value: Date) {
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
  
}