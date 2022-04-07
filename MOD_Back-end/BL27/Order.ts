import Client from "./Client";

export class OrderItem {

  constructor(private _itemName: string, private _price: number) { }

  public get price(): number {
    return this._price;
  };

  public set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser um número positivo');
    }
    this._price = value;
  };

  public get itemName(): string {
    return this._itemName;
  };

  public set itemName(value: string) {
    this._itemName = value;
  };
}

export default class Order {

  constructor(
    private _client: Client,
    private _items: OrderItem[] = [],
    private _paymentMethod: string,
    private _discount: number = 0
  ) { }

  public get discount(): number {
    return this._discount;
  };

  public set discount(value: number) {
    if (value < 0) {
      throw new Error('O disconto não pode ser um valor negatívo.');
    }

    this._discount = value;
  };

  public get paymentMethod(): string {
    return this._paymentMethod;
  };

  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  };

  public get items(): OrderItem[] {
    return this._items;
  };

  public set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  };

  public get client(): Client {
    return this._client;
  };

  public set client(value: Client) {
    this._client = value;
  };

  totalValue(): number {
    const sum = this.items.map((item) => item.price)
    .reduce((value, unity) => value += unity, 0);
    return sum;
  }

  totalWithDiscount(): number {
    return this.totalValue() * (1 - this.discount);
  }

}
