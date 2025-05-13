export class Product {
  static SIZE_SMALL = { price: 100, size: "Small" };
  static SIZE_MEDIUM = { price: 130, size: "Medium" };
  static SIZE_LARGE = { price: 150, size: "Large" };

  static TOPPING_MAYO = { price: 20 };
  static TOPPING_SAUCE = { price: 20 };

  constructor(size, name = "Product") {
    this.size = size;
    this.name = name;
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
