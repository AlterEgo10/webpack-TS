// const userName: string = 'Olga'
// const userAge: number = 28

// const isNull: null= null
// console.log(userName)

// type UserId = number
// type UserName = string
// type Email = string

// interface User{
// id: UserId;
// name: UserName;
//   email: Email;
//   role?: UserRole;
// isActive?: boolean;
// }

// function createUser(id: UserId,name: UserName,email: Email) {
//   const user = {
//     id: id,
//     name: name,
//     email: email,
//   }
//   return user
// }

// enum UserRole {
//     Admin,
//     User,
//     Guest,
// }


// const users: User[] = [
//    createUser(1, "Alice", "alice@example.ru"),
//   createUser(2, "Bob", "bob@example.ru"),
//   createUser(3, "Charlie", "charlie@example.ru")
// ]

// users[0].role = UserRole.Admin;
// users[1].role = UserRole.User;
// users[2].role = UserRole.Guest;
//console.log(users[0])
// const admins = filterUsersByRole(users, UserRole.Admin);
// console.log("Admins:", admins);
// function filterUsersByRole({} , role: string) {
//   let arr = [];
//   for (let i in array) {
//     console.log(i)
   
//   }
// }
//filterUsersByRole(users)

//-------------------------------------------------------------------------------------------------------

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }

// const products: Product[]=[
//   {
//     id: 4,
//     name: 'test',
//     price: 5,
//     category: 'string',
//   },
//     {
//     id: 5,
//     name: 'test5',
//     price: 5,
//     category: 'string',
//   }
// ]

// function findProductId(id: number):any
  
// function findProductId(
//   id: number,
//   name?: string,
//   price?: number,
//   category?: string,){
 
//   return   products.filter(product => product.id === id)
//   }

// console.log(findProductId(5))


// function findProductName(name: string):any
  
// function findProductName(
//   name: string,
//   price?: number,
//   category?: string,){
 
//   return   products.filter(product => product.name === name)
//   }

// console.log(findProductName('test'))