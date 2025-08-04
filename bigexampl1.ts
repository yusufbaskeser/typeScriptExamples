interface Ianimal{
    name : string
    age : number
    makeSound() : void
    move() : void
    
}

interface Flyable{
    fly() : void
}

class Animal{
    name : string
    age : number
    gender : string
    carnivorous : boolean

    constructor(name : string , age : number , gender : string , carnivorous : boolean){
        this.name = name
        this.age = age
        this.gender = gender
        this.carnivorous = carnivorous
    }

    printInfo():void{
console.log(`${this.name} , ${this.age} ${this.gender} , ${this.carnivorous}`);
    }
    
}

class Bird extends Animal implements Ianimal , Flyable{

    constructor(name: string, age: number, gender: string, carnivorous: boolean) {
        super(name, age, gender, carnivorous);
      }

     makeSound(): void {
        console.log("Cik cik");

     }
     move(): void {
        console.log("Uçarak hareket ediyor");

     }

     fly(): void {
        console.log("Kanat çırpıyor");

     }

     
}

class Fish extends Animal implements Ianimal{

    constructor(name: string, age: number, gender: string, carnivorous: boolean) {
        super(name, age, gender, carnivorous);
      }

    makeSound(): void {
            console.log("Blop blop");

    }

    move(): void {
        console.log("Yüzerek hareket ediyor");

    }
}

const bird = new Bird("baykuş" , 43 , "erKEK adam " , true);
const fish = new Fish("baykuş" , 43 , "erKEK adam " , true);

bird.printInfo();  
bird.makeSound(); 
bird.move();       
bird.fly();        

fish.printInfo();  
fish.makeSound();  
fish.move();   
