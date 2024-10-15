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
//----------------------------------------------------------------

abstract class Person {
  name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  getAge(age: number) {
    return this.age
  }
  setAge(age: number) {
    this.age = age
  }
 }

interface Workable {
  work(hours: number): void
  takeBreak(minutes: number): void
}

class Developer extends Person implements Workable {
  getRole(): string {
    return 'Developer'
  }

  work(hours: number): void {
    console.log(`Working ${hours} hours`)
  }

  takeBreak(minutes: number): void {
    console.log(`Taking a break for ${minutes} minutes`)
  }
}
class Manager extends Person implements Workable {
 
  getRole(): string {
    return 'Manager'
  }
  
  work(hours: number): void {
    console.log(`Working ${hours} hours`)
  }
  takeBreak(minutes: number): void {
    console.log(`Managing for ${minutes} hours`)
  }
}

const developer = new Developer('Bob', 32)
developer.work(8)
console.log(`Developer Role: ${developer.getRole()}`)
developer.takeBreak(30)
console.log(`Developer Age: ${developer.getAge(3)}`)

const manager = new Manager('Bob', 45)
manager.work(6)
manager.takeBreak(20)
console.log(`Manager Role: ${manager.getRole()}`)
console.log(`Manager Age: ${manager.getAge(4)}`)