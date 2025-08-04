interface Vehicle{
     make : string
     model : string
     getDetails() : string
}


class Car implements Vehicle{
   public make : string
   public model : string
   private year : number

    constructor(make : string , model : string , year:number){
        this.make = make
        this.model = model
        this.year = year
    }

    getDetails(): string {

        return `Marka : ${this.make} , Model ${this.model} , Yıl ${this.year}  `


    }
}

const v = new Car("BMW", "TOFAŞ", 2030);
console.log(v.getDetails());