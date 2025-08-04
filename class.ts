class Product {
    name: string;
    price: number;
    inStock: boolean;
  
    constructor(name: string, price: number, inStock: boolean) {
      this.name = name;
      this.price = price;
      this.inStock = inStock;
    }
  
    printDetails(): void {
        let infoStock: string;

        if (this.inStock) {
          infoStock = "Stokta var";
        } else {
          infoStock = "Stokta yok";
        }
        console.log(`${this.name} - ${this.price} TL - ${infoStock}`);
    }
  }
  
  const p = new Product("elma", 150, true);
  p.printDetails();
  