interface User{
    username : string
    age : number
    isAdmin : boolean
}





function printUserInfo(user : User) : void {

    console.log(`${user.username}, ${user.age} yaşında, admin: ${user.isAdmin}`);

}


printUserInfo({
   username : "yusuf",
   age : 15 ,
   isAdmin : true
});