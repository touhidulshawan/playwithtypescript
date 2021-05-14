class Product {
  // * we can ignore this instead we can declare that on constructor
  // name: string;
  // price: number;
  private productSummery: string[] = [];

  constructor(private productName: string, private productPrice: number) {}

  // set value into private property of the class
  set setProductSummery(value: string) {
    if (!value) {
      throw new Error("Please add valid summery");
    }
    this.productSummery.push(value);
  }

  // get value from private property of the class
  get getProductSummery() {
    if (this.productSummery.length > 0) {
      return this.productSummery;
    } else {
      throw new Error("Summery not found.");
    }
  }

  showProducts() {
    console.log(`${this.productName} : ${this.productPrice}`);
  }
}

const product1 = new Product("Table", 23.3);
product1.showProducts();

product1.setProductSummery = "All products were in good condition.";
console.log(product1.getProductSummery);
