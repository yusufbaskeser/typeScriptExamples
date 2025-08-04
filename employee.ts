interface Iemployee{
    name:string
    salary:number
    work() : void

}

class employee{
name:string
salary:number
constructor(name : string , salary : number){
    this.name = name
    this.salary=salary
}

printInfo():void{
    console.log(`${this.name} , ${this.salary}`);
}
}

class FullTimeEmployee extends employee implements Iemployee{
constructor(name:string , salary : number){
    super(name,salary);
}
work(): void {
    console.log(`bu adam ${this.name} , bunu alıyor${this.salary}`);
}
}

class PartTimeEmployee extends employee implements Iemployee{
    constructor(name:string , salary : number){
        super(name,salary);
    }
    work(): void {
        console.log(`bu adam ${this.name} , bunu alıyor${this.salary}`);
    }
    }

    const fullTime = new FullTimeEmployee("mahmut" , 15);
    const partTime = new PartTimeEmployee("emre" , 30);
    fullTime.printInfo();
    partTime.printInfo();


    fullTime.work();
    partTime.work();