export class Product {
  static SIZE_SMALL = { price: 100 };
  static SIZE_BIG = { price: 200 };

  static TOPPING_SAUCE = { price: 15 };
  static TOPPING_MAYO = { price: 20 };

  constructor(size) {
    this.size = size;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let totalPrice = this.size.price;
    this.toppings.forEach((topping) => (totalPrice += topping.price));
    return totalPrice;
  }
}
