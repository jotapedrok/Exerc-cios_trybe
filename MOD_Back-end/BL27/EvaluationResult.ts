import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number = Number();

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  public get score(): number {
    return this._score;
  };

  public set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    if (value > this.evaluation.score) {
      throw new Error(`A pontução máxima é ${this._evaluation.score} pontos.`);
    }

    this._score = value;
  };

  public get evaluation(): Evaluation {
    return this._evaluation;
  };

  public set evaluation(value: Evaluation) {
    this._evaluation = value;
  };
}