/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************!*\
  !*** ./typescript/index.ts ***!
  \*****************************/

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
//-----------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge(age) {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class Developer extends Person {
    constructor(name, age) {
        super(name, age);
        this.roleDeveloper = 'Developer';
        this.name = name;
        this.age = age;
    }
    getRole() {
        return this.roleDeveloper;
    }
    getAge() {
        return this.age;
    }
    work(hours) {
        console.log(`Working ${hours} hours`);
    }
    takeBreak(minutes) {
        console.log(`Taking a break for ${minutes} minutes.`);
    }
}
class Manager extends Person {
    constructor(name, age) {
        super(name, age);
        this.roleDeveloper = 'Manager';
        this.name = name;
        this.age = age;
    }
    getRole() {
        return this.roleDeveloper;
    }
    getAge() {
        return this.age;
    }
    work(hours) {
        console.log(`Working ${hours} hours`);
    }
    takeBreak(minutes) {
        console.log(`Managing for ${minutes} hours`);
    }
}
const developer = new Developer('Bob', 32);
developer.getRole();
developer.work(8);
console.log(`Developer Role: ${developer.getRole()}`);
developer.takeBreak(30);
console.log(`Developer Age: ${developer.getAge()}`);
const manager = new Manager("Bob", 45);
manager.work(6);
manager.takeBreak(20);
console.log(`Manager Role: ${manager.getRole()}`);
console.log(`Manager Age: ${manager.getAge()}`);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vdHlwZXNjcmlwdC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB1c2VyTmFtZTogc3RyaW5nID0gJ09sZ2EnXHJcbi8vIGNvbnN0IHVzZXJBZ2U6IG51bWJlciA9IDI4XHJcblxyXG4vLyBjb25zdCBpc051bGw6IG51bGw9IG51bGxcclxuLy8gY29uc29sZS5sb2codXNlck5hbWUpXHJcblxyXG4vLyB0eXBlIFVzZXJJZCA9IG51bWJlclxyXG4vLyB0eXBlIFVzZXJOYW1lID0gc3RyaW5nXHJcbi8vIHR5cGUgRW1haWwgPSBzdHJpbmdcclxuXHJcbi8vIGludGVyZmFjZSBVc2Vye1xyXG4vLyBpZDogVXNlcklkO1xyXG4vLyBuYW1lOiBVc2VyTmFtZTtcclxuLy8gICBlbWFpbDogRW1haWw7XHJcbi8vICAgcm9sZT86IFVzZXJSb2xlO1xyXG4vLyBpc0FjdGl2ZT86IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoaWQ6IFVzZXJJZCxuYW1lOiBVc2VyTmFtZSxlbWFpbDogRW1haWwpIHtcclxuLy8gICBjb25zdCB1c2VyID0ge1xyXG4vLyAgICAgaWQ6IGlkLFxyXG4vLyAgICAgbmFtZTogbmFtZSxcclxuLy8gICAgIGVtYWlsOiBlbWFpbCxcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHVzZXJcclxuLy8gfVxyXG5cclxuLy8gZW51bSBVc2VyUm9sZSB7XHJcbi8vICAgICBBZG1pbixcclxuLy8gICAgIFVzZXIsXHJcbi8vICAgICBHdWVzdCxcclxuLy8gfVxyXG5cclxuXHJcbi8vIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXHJcbi8vICAgIGNyZWF0ZVVzZXIoMSwgXCJBbGljZVwiLCBcImFsaWNlQGV4YW1wbGUucnVcIiksXHJcbi8vICAgY3JlYXRlVXNlcigyLCBcIkJvYlwiLCBcImJvYkBleGFtcGxlLnJ1XCIpLFxyXG4vLyAgIGNyZWF0ZVVzZXIoMywgXCJDaGFybGllXCIsIFwiY2hhcmxpZUBleGFtcGxlLnJ1XCIpXHJcbi8vIF1cclxuXHJcbi8vIHVzZXJzWzBdLnJvbGUgPSBVc2VyUm9sZS5BZG1pbjtcclxuLy8gdXNlcnNbMV0ucm9sZSA9IFVzZXJSb2xlLlVzZXI7XHJcbi8vIHVzZXJzWzJdLnJvbGUgPSBVc2VyUm9sZS5HdWVzdDtcclxuLy9jb25zb2xlLmxvZyh1c2Vyc1swXSlcclxuLy8gY29uc3QgYWRtaW5zID0gZmlsdGVyVXNlcnNCeVJvbGUodXNlcnMsIFVzZXJSb2xlLkFkbWluKTtcclxuLy8gY29uc29sZS5sb2coXCJBZG1pbnM6XCIsIGFkbWlucyk7XHJcbi8vIGZ1bmN0aW9uIGZpbHRlclVzZXJzQnlSb2xlKHt9ICwgcm9sZTogc3RyaW5nKSB7XHJcbi8vICAgbGV0IGFyciA9IFtdO1xyXG4vLyAgIGZvciAobGV0IGkgaW4gYXJyYXkpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGkpXHJcbiAgIFxyXG4vLyAgIH1cclxuLy8gfVxyXG4vL2ZpbHRlclVzZXJzQnlSb2xlKHVzZXJzKVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4vLyAgIGlkOiBudW1iZXI7XHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIHByaWNlOiBudW1iZXI7XHJcbi8vICAgY2F0ZWdvcnk6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcHJvZHVjdHM6IFByb2R1Y3RbXT1bXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDQsXHJcbi8vICAgICBuYW1lOiAndGVzdCcsXHJcbi8vICAgICBwcmljZTogNSxcclxuLy8gICAgIGNhdGVnb3J5OiAnc3RyaW5nJyxcclxuLy8gICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgaWQ6IDUsXHJcbi8vICAgICBuYW1lOiAndGVzdDUnLFxyXG4vLyAgICAgcHJpY2U6IDUsXHJcbi8vICAgICBjYXRlZ29yeTogJ3N0cmluZycsXHJcbi8vICAgfVxyXG4vLyBdXHJcblxyXG4vLyBmdW5jdGlvbiBmaW5kUHJvZHVjdElkKGlkOiBudW1iZXIpOmFueVxyXG4gIFxyXG4vLyBmdW5jdGlvbiBmaW5kUHJvZHVjdElkKFxyXG4vLyAgIGlkOiBudW1iZXIsXHJcbi8vICAgbmFtZT86IHN0cmluZyxcclxuLy8gICBwcmljZT86IG51bWJlcixcclxuLy8gICBjYXRlZ29yeT86IHN0cmluZywpe1xyXG4gXHJcbi8vICAgcmV0dXJuICAgcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCA9PT0gaWQpXHJcbi8vICAgfVxyXG5cclxuLy8gY29uc29sZS5sb2coZmluZFByb2R1Y3RJZCg1KSlcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBmaW5kUHJvZHVjdE5hbWUobmFtZTogc3RyaW5nKTphbnlcclxuICBcclxuLy8gZnVuY3Rpb24gZmluZFByb2R1Y3ROYW1lKFxyXG4vLyAgIG5hbWU6IHN0cmluZyxcclxuLy8gICBwcmljZT86IG51bWJlcixcclxuLy8gICBjYXRlZ29yeT86IHN0cmluZywpe1xyXG4gXHJcbi8vICAgcmV0dXJuICAgcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5uYW1lID09PSBuYW1lKVxyXG4vLyAgIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKGZpbmRQcm9kdWN0TmFtZSgndGVzdCcpKVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuYWJzdHJhY3QgY2xhc3MgUGVyc29uIHtcclxuICBuYW1lIDpzdHJpbmdcclxuICBwcm90ZWN0ZWQgYWdlOiBudW1iZXIgXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5hZ2UgPSBhZ2VcclxuICB9XHJcbiAgZ2V0QWdlKGFnZTpudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmFnZVxyXG4gIH1cclxuICBzZXRBZ2UoYWdlOiBudW1iZXIpe1xyXG4gICAgdGhpcy5hZ2UgPSBhZ2VcclxuICB9XHJcbi8vICAgIGdldFJvbGUoKSB7XHJcbi8vICAgIGNvbnNvbGUubG9nKCdEZXZlbG9wZXInKVxyXG4vLyB9XHJcbiAgYWJzdHJhY3QgZ2V0Um9sZSgpOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFdvcmthYmxlIHtcclxuICB3b3JrKGhvdXJzOiBudW1iZXIpOiB2b2lkXHJcbiAgdGFrZUJyZWFrKG1pbnV0ZXM6IG51bWJlcik6IHZvaWRcclxufVxyXG5cclxuY2xhc3MgRGV2ZWxvcGVyIGV4dGVuZHMgUGVyc29uIHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBhZ2U6IG51bWJlclxyXG4gIHJvbGVEZXZlbG9wZXI6IHN0cmluZyA9ICdEZXZlbG9wZXInXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLGFnZTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihuYW1lLGFnZSlcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgIHRoaXMuYWdlID0gYWdlXHJcbiAgICBcclxuICB9XHJcbiAgZ2V0Um9sZSgpOnN0cmluZ3tcclxuICAgcmV0dXJuIHRoaXMucm9sZURldmVsb3BlclxyXG4gIH1cclxuZ2V0QWdlKCkge1xyXG4gcmV0dXJuIHRoaXMuYWdlXHJcbiAgfVxyXG4gIHdvcmsoaG91cnM6IG51bWJlcik6IHZvaWR7XHJcbiAgY29uc29sZS5sb2coYFdvcmtpbmcgJHtob3Vyc30gaG91cnNgKVxyXG4gIH1cclxuICB0YWtlQnJlYWsobWludXRlczogbnVtYmVyKTogdm9pZHtcclxuICAgIGNvbnNvbGUubG9nKGBUYWtpbmcgYSBicmVhayBmb3IgJHttaW51dGVzfSBtaW51dGVzLmApXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgUGVyc29ue1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgYWdlOiBudW1iZXJcclxuICByb2xlRGV2ZWxvcGVyOiBzdHJpbmcgPSAnTWFuYWdlcidcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsYWdlOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKG5hbWUsYWdlKVxyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgdGhpcy5hZ2UgPSBhZ2VcclxuICAgIFxyXG4gIH1cclxuICAgIGdldFJvbGUoKTpzdHJpbmd7XHJcbiAgIHJldHVybiB0aGlzLnJvbGVEZXZlbG9wZXJcclxuICB9XHJcbiAgZ2V0QWdlKCkge1xyXG4gcmV0dXJuIHRoaXMuYWdlXHJcbiAgfVxyXG4gICAgd29yayhob3VyczogbnVtYmVyKTogdm9pZHtcclxuICBjb25zb2xlLmxvZyhgV29ya2luZyAke2hvdXJzfSBob3Vyc2ApXHJcbiAgfVxyXG4gIHRha2VCcmVhayhtaW51dGVzOiBudW1iZXIpOiB2b2lke1xyXG4gICAgY29uc29sZS5sb2coYE1hbmFnaW5nIGZvciAke21pbnV0ZXN9IGhvdXJzYClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRldmVsb3BlciA9IG5ldyBEZXZlbG9wZXIoJ0JvYicsIDMyLClcclxuZGV2ZWxvcGVyLmdldFJvbGUoKVxyXG5kZXZlbG9wZXIud29yayg4KVxyXG5jb25zb2xlLmxvZyhgRGV2ZWxvcGVyIFJvbGU6ICR7ZGV2ZWxvcGVyLmdldFJvbGUoKX1gKTtcclxuZGV2ZWxvcGVyLnRha2VCcmVhaygzMCk7XHJcbmNvbnNvbGUubG9nKGBEZXZlbG9wZXIgQWdlOiAke2RldmVsb3Blci5nZXRBZ2UoKX1gKTtcclxuXHJcbmNvbnN0IG1hbmFnZXIgPSBuZXcgTWFuYWdlcihcIkJvYlwiLCA0NSk7XHJcbm1hbmFnZXIud29yayg2KTtcclxubWFuYWdlci50YWtlQnJlYWsoMjApO1xyXG5jb25zb2xlLmxvZyhgTWFuYWdlciBSb2xlOiAke21hbmFnZXIuZ2V0Um9sZSgpfWApO1xyXG5jb25zb2xlLmxvZyhgTWFuYWdlciBBZ2U6ICR7bWFuYWdlci5nZXRBZ2UoKX1gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=