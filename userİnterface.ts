interface userInterface{
    name : string
    age : number
    isAdmin : boolean
    getSummary() : string
}

class user implements userInterface{
    name: string
    age : number
    isAdmin: boolean

    constructor(name:string , age : number , isAdmin : boolean){
        this.name = name
        this.age = age
        this.isAdmin = isAdmin
    }

    getSummary(): string {
    return `${this.name} ${this.age} ${this.isAdmin}`
    }
    
}

const u = new user("Yusuf", 22, true);
console.log(u.getSummary());