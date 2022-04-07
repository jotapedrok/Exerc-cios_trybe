export default class Data {

  constructor(private _day: number, private _month: number, private _year: number) {
    const date = new Date(_year, (_month - 1), _day);
    if (date.getDate() !== _day) {
      _day = 1;
      _month = 1;
      _year = 1900;
    }
  }

  public get year(): number {
    return this._year;
  };

  public set year(value: number) {
    this._year = value;
  };

  public get month(): number {
    return this._month;
  };

  public set month(value: number) {
    this._month = value;
  };

  public get day(): number {
    return this._day;
  };

  public set day(value: number) {
    this._day = value;
  };

  getMonthName(): string {
    switch (this.month) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
      default:
        return 'Janeiro';
    }
  }

  isLeapYear(): boolean {
    return this.year % 4 === 0;
  }

  compare(compareDate: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${compareDate.year}-${compareDate.month}-${compareDate.day}`;
    if (currentDateStr > dateStr) {
      return 1
    }
    if (currentDateStr < dateStr) {
      return -1
    }
    return 0;
  }

  format(formattingType: string): string {

    const conditions: boolean[] = [
      (!formattingType.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formattingType.match(/m{2}/g) && !formattingType.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formattingType.match(/d{2}/g)) // verifica se tem o dia na formatação
    ];

    if (conditions.every(cond => cond)) {
      throw new Error(`O formato passado é inválido: ${formattingType}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formattingType
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substring(2));

    return dateFormatting;

  }
}