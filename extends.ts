class Anmal{
    name : string

    constructor(name : string){
        this.name = name
    }


    makeSound():void{
console.log("Bir Hayvan Sesi Çıkardı");
    }
}

class Cat extends Anmal{
    makeSound(): void {
        console.log("miyav");
    }
}

class og extends Anmal{
    makeSound(): void {
        console.log("hav hav");
    }
}

const cat = new Cat("Tekir");
const dog = new og("Karabas");

cat.makeSound();
dog.makeSound();