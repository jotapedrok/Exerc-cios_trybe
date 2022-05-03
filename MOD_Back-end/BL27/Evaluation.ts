import Teacher from "./Teacher";

export default class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private _type: string;

  constructor(score: number, teacher: Teacher, type: string) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  public get score(): number {
    return this._score;
  };

  public set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    if (this.type === 'prova' && value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }
    if (this.type === 'trabalho' && value > 50) {
      throw new Error('A pontução deve ser menor que 50 pontos.');
    }

    this._score = value;
  };

  public get teacher(): Teacher {
    return this._teacher;
  };

  public set teacher(value: Teacher) {
    this._teacher = value;
  };

  public get type(): string {
    return this._type;
  };

  public set type(value: string) {
    if (!['prova', 'trabalaho'].includes(value)) {
      throw new Error('O tipo de avaliação não é válido.');
    }

    this._type = value;
  };
}