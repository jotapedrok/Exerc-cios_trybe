export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) { }

  public get birthDate(): Date {
    return this._birthDate;
  };

  public set birthDate(value: Date) {
    const personBirthDate = new Date(value).getTime();
    const actualDate = new Date().getTime();
    if (personBirthDate > actualDate) {
      throw new Error('Tá vindo do futuro, peste?');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('Tu é Maomé? 120 Anos? Tá totóca das ideias!');
    }
      this._birthDate = value;
  };

  public get name(): string {
    return this._name;
  };

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Nome deve contar mais de 3 caractéres')
    }
    this._name = value;
  };

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

}