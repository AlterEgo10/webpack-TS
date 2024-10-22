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
//-----------------------------------------------------------------------------------

function printInfo(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.length)
  } else {
    console.log(value * value)
  }
}
//----------------------------------------
interface Dog {
  name: string
  bark(): string
}

interface Cat {
  name: string
  meow(): string
}

function makeSound(animal: Dog | Cat) {
  if ('bark' in animal) {
    return animal.bark()
  }
  return animal.meow()
}

const dog: Dog = {
  name: 'Dog1',
  bark(): string {
    return 'Woow!'
  },
}

const cat: Cat = {
  name: 'Whiskers',
  meow: () => 'Meow!',
}

function isDog(animal: any): animal is Dog {
  return (animal as Dog).bark !== undefined
}
function isCat(animal: any): animal is Cat {
  return (animal as Cat).meow !== undefined
}

function playWithPet(pet: Dog | Cat) {
  if (isDog(pet)) {
    return pet.bark()
  } else {
    return pet.meow()
  }
}

console.log(makeSound(dog))
console.log(makeSound(cat))
printInfo('test')
printInfo(4)
console.log(playWithPet(dog))
playWithPet(cat)