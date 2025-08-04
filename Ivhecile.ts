interface Ivheicle{
    brand : string
    model : string
    year : number
    fuelType : string
    color : string
    isAutomatic : boolean
}

abstract class Avheicle{
    
    abstract printInfo(): void
    abstract startEngine(): void
    abstract stopEngine(): void

}

class autoMobile extends Avheicle implements Ivheicle{
    brand : string
    model : string
    year : number
    fuelType : string
    color : string
    isAutomatic : boolean

    constructor(brand:string , model:string , year :number , fuelType : string , color : string , isAutomatic : boolean){
        super();
        this.brand = brand
        this.model = model
        this.year = year
        this.fuelType = fuelType
        this.color = color
        this.isAutomatic = isAutomatic
    }

    printInfo(): void {
        console.log(`${this.brand} ${this.model} - ${this.year}, Fuel: ${this.fuelType}, Color: ${this.color}, Gear: ${this.isAutomatic}`);
    }
    
    startEngine(): void {
        console.log(`${this.brand} ${this.model} engine started vın vın!!!!!.`);
    }
    
    stopEngine(): void {
        console.log(`${this.brand} ${this.model} engine stopped not vın vın.`);
    }

    flameEngine() : void{

        console.log(`${this.brand} ${this.model} engine is on fire!!!!`);

    }
    


}


class SUV extends Avheicle implements Ivheicle{
    brand : string
    model : string
    year : number
    fuelType : string
    color : string
    isAutomatic : boolean

    constructor(brand:string , model:string , year :number , fuelType : string , color : string , isAutomatic : boolean){
        super();
        this.brand = brand
        this.model = model
        this.year = year
        this.fuelType = fuelType
        this.color = color
        this.isAutomatic = isAutomatic
    }

    printInfo(): void {
        console.log(`${this.brand} ${this.model} SUV - Year: ${this.year}, Fuel: ${this.fuelType}, Color: ${this.color}, Gear: ${this.isAutomatic}`);
    }
    
    startEngine(): void {
        console.log(`${this.brand} ${this.model} engine started for speed!!!!!.`);
    }
    
    stopEngine(): void {
        console.log(`${this.brand} ${this.model} SUV stopped.`);
    }

    showStyle(): void {
        console.log(`${this.brand} ${this.model} looks cool and strong.`);
    }
    
}

class Motorcycle extends Avheicle implements Ivheicle{
    brand : string
    model : string
    year : number
    fuelType : string
    color : string
    isAutomatic : boolean

    constructor(brand:string , model:string , year :number , fuelType : string , color : string , isAutomatic : boolean){
        super();
        this.brand = brand
        this.model = model
        this.year = year
        this.fuelType = fuelType
        this.color = color
        this.isAutomatic = isAutomatic
    }

    printInfo(): void {
        console.log(`${this.brand} ${this.model} Motorcycle - ${this.year}, Fuel: ${this.fuelType}, Color: ${this.color}, Gear: ${this.isAutomatic}`);
    }
    
    startEngine(): void {
        console.log(`${this.brand} ${this.model} engine started with a loud sound.`);
    }
    
    stopEngine(): void {
        console.log(`${this.brand} ${this.model} engine stopped.`);
    }

    roarSound(): void {
        console.log(`${this.brand} ${this.model} motorcycle is roaring!!!!!`);
    }
    
}






const araba = new autoMobile("BMW", "3 Series", 2024, "Gasoline", "Black", true);
const suv = new SUV("Toyota", "RAV4", 2023, "Diesel", "White", false);
const motor = new Motorcycle("Yamaha", "R1", 2022, "Gasoline", "Blue", true);


araba.printInfo();
araba.startEngine();
araba.stopEngine();
araba.flameEngine();

suv.printInfo();
suv.startEngine();
suv.stopEngine();
suv.showStyle();

motor.printInfo();
motor.startEngine();
motor.stopEngine();
motor.roarSound();