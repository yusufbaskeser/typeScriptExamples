interface zoo{
    name : string
    age : number
    gender : string
    carnivorous : boolean

    Sound() : void
    
}


class animal implements zoo{
    name : string
    age : number
    gender : string
    carnivorous : boolean

    

    constructor(name : string , age : number , carnivorous : boolean , gender : string){
        this.name = name
        this.age = age
        this.carnivorous = carnivorous
        this.gender = gender
    }

    Sound(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Carnivorous: ${this.carnivorous}`);
    }

    
}

const an = new animal("aslan" , 5 , true , "erkek");

console.log(an);