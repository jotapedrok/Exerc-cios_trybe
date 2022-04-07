export default class Subject {
  constructor (private _name: string) {}
  
  public get name(): string {
    return this._name;
  };

  public set name(value: string) {
    Subject.validateName(value)
    this._name = value;
  };

  private static validateName(value: string): void {
    if (value.length < 3)
      throw new Error('Nome deve possuir ao menos 3 caractéres');
  };

}