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
//----------------------------------------------------
function reverseArray<T>(arr: T[]): T[] {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = console.log(reverseArray(numbers))

const strings = ['a', 'b', 'c']
const reversedStrings = console.log(reverseArray(strings))
//-------------------------------------------------------
interface Person{
  name: string;
  age: number;
}

function getProperty <T, K extends keyof T>(object: T, key:K) {
  //console.log(object[key as ObjectKey])
  // console.log(object.key)
  return console.log(object[key])
}

const person: Person = { name: 'Alice', age: 25 }
//type ObjectKey = keyof typeof person
const nameUser = getProperty(person, 'name') // "Alice"
const age = getProperty(person, 'age')

//---------------------------------------------------------------
interface ICollection <T>{
  add([]): T
  remove([]): T
  getItems(): any
 // toString():string
}

class Collection<T extends{toString():string}> {
  data: T[] = []
  add = (item: T) => this.data.push(item)
  remove(item: T) {
  this.data = this.data.filter((i) => i !== item)
  }
  getItems() {
    return this.data
  }
}

const collection = new Collection<number>() 
collection.add(1);
collection.add(2);
collection.remove(1)
console.log(collection.getItems()); // [2]

const stringCollection = new Collection<string>();
stringCollection.add("a");
stringCollection.add("b");
stringCollection.remove("a");
console.log(stringCollection.getItems()); // ["b"]