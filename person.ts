interface Person{
    name : string
    age : number
    getInfo() : string
}

class Employee implements Person{
    name : string
    age : number
    salary : number

    constructor(name : string , age : number , salary : number){
        this.name = name
        this.age = age
        this.salary = salary
    }

    getInfo() : string{
        return `${this.name} ${this.age}`
    }
}


class Manager extends Employee{
    department: string;

    constructor(name: string, age: number, salary: number, department: string) {
      super(name, age, salary);
      this.department = department;
    }
      getInfo(): string {
      return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    }
  }
  
  const m = new Manager("Yusuf", 30, 5000, "Yazılım");
  console.log(m.getInfo());