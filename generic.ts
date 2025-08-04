/*function mergeUserStatus<T, U>(useR: T, userstatus: U): T & U {
    return { ...useR, ...userstatus };
}
  
  const useR = {
    username: "yusuf",
    password: "123456",
    token: "abc123token"
  };
  
  const userstatus = {
    statusCode: 200,
    message: "Başarılı giriş"
  };
  
  const response = mergeUserStatus(useR, userstatus);
  
  console.log(response);*/

  /*function swapGeneric<T, U>(var1: T, var2: U): [U, T] {
    return [var2, var1];
  }
  
  const result = swapGeneric(12, "hello");
  console.log(result); */

 /* function arrayGeneric<T>(value: T): T[] {
    return [value]; 
  }

  const response = arrayGeneric(15);

  console.log(response);*/

  /*function checkType<T>(value: T): void {
    console.log(typeof value); 
  }

checkType(123);?*/


/*function sameGeneric<T>(value: T): T {
    return value;
  }

  const response = sameGeneric("merhabalar");


  console.log(response)*/

  /*function equalGeneric<T>(var1: T, var2: T): boolean {
    return var1 === var2;

  }

  console.log(equalGeneric(15,14));*/


  /*function reverseArray<T>(items: T[]): T[] {
    return items.slice().reverse();
  }

console.log(reverseArray([15,22,"merhaba",21,32]));*/


/*function arraysGeneric<T>(arr1 : T[]) : T[][] {
return [arr1];
} 

console.log(arraysGeneric([15,14,21,42,12,"selamlar" , true]));*/

/*function forGeneric<T>(item : T , count : number): T[]{
let i :number ;
let arr: T[] = [];

    for(i = 0 ; i < count ; i++){

        arr.push(item);    
    
    }

    return arr;
    
}

console.log(forGeneric(true , 12));*/


function userGeneric<T, U>(user: T, status: U): T & U {

const result = { ...user, ...status };

return result;
  }



const User= {
    username: "yusuf",
    surname: "baskeser",
    password: "123456",
    age: 30,
    isAdmin: false,
  };

  const statusCode = {
    statusCode: 200,
    message: "Başarılı giriş"
  };




console.log(userGeneric(User, statusCode));
