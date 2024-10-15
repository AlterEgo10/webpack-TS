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
//----------------------------------------------------------------
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
// class Developer extends Person implements Workable{
//   // roleDeveloper: string = 'Developer'
//    constructor(name: string, age: number) {
//     super()
//     this.name = name
//    this.age = age
//   }
//   getRole(): string {
//     return 'Developer'
//   }
//   // getAge() {
//   //   return age
//   // }
//   work(hours: number): void {
//     console.log(`Working ${hours} hours`)
//   }
//   takeBreak(minutes: number): void {
//     console.log(`Taking a break for ${minutes} minutes.`)
//   }
// }
class Developer extends Person {
    getRole() {
        return 'Developer';
    }
    work(hours) {
        console.log(`Working ${hours} hours`);
    }
    takeBreak(minutes) {
        console.log(`Taking a break for ${minutes} minutes`);
    }
}
class Manager extends Person {
    getRole() {
        return 'Manager';
    }
    // getAge() {
    //   return this.age
    // }
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
//console.log(`Developer Age: ${developer.getAge()}`)
// const manager = new Manager('Bob', 45)
// manager.work(6)
// manager.takeBreak(20)
// console.log(`Manager Role: ${manager.getRole()}`)
// console.log(`Manager Age: ${manager.getAge()}`)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN2QixxREFBcUQ7QUFFckQseUNBQXlDO0FBQ3pDLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsb0RBQW9EO0FBQ3BELGtEQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi90eXBlc2NyaXB0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHVzZXJOYW1lOiBzdHJpbmcgPSAnT2xnYSdcclxuLy8gY29uc3QgdXNlckFnZTogbnVtYmVyID0gMjhcclxuXHJcbi8vIGNvbnN0IGlzTnVsbDogbnVsbD0gbnVsbFxyXG4vLyBjb25zb2xlLmxvZyh1c2VyTmFtZSlcclxuXHJcbi8vIHR5cGUgVXNlcklkID0gbnVtYmVyXHJcbi8vIHR5cGUgVXNlck5hbWUgPSBzdHJpbmdcclxuLy8gdHlwZSBFbWFpbCA9IHN0cmluZ1xyXG5cclxuLy8gaW50ZXJmYWNlIFVzZXJ7XHJcbi8vIGlkOiBVc2VySWQ7XHJcbi8vIG5hbWU6IFVzZXJOYW1lO1xyXG4vLyAgIGVtYWlsOiBFbWFpbDtcclxuLy8gICByb2xlPzogVXNlclJvbGU7XHJcbi8vIGlzQWN0aXZlPzogYm9vbGVhbjtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlVXNlcihpZDogVXNlcklkLG5hbWU6IFVzZXJOYW1lLGVtYWlsOiBFbWFpbCkge1xyXG4vLyAgIGNvbnN0IHVzZXIgPSB7XHJcbi8vICAgICBpZDogaWQsXHJcbi8vICAgICBuYW1lOiBuYW1lLFxyXG4vLyAgICAgZW1haWw6IGVtYWlsLFxyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdXNlclxyXG4vLyB9XHJcblxyXG4vLyBlbnVtIFVzZXJSb2xlIHtcclxuLy8gICAgIEFkbWluLFxyXG4vLyAgICAgVXNlcixcclxuLy8gICAgIEd1ZXN0LFxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCB1c2VyczogVXNlcltdID0gW1xyXG4vLyAgICBjcmVhdGVVc2VyKDEsIFwiQWxpY2VcIiwgXCJhbGljZUBleGFtcGxlLnJ1XCIpLFxyXG4vLyAgIGNyZWF0ZVVzZXIoMiwgXCJCb2JcIiwgXCJib2JAZXhhbXBsZS5ydVwiKSxcclxuLy8gICBjcmVhdGVVc2VyKDMsIFwiQ2hhcmxpZVwiLCBcImNoYXJsaWVAZXhhbXBsZS5ydVwiKVxyXG4vLyBdXHJcblxyXG4vLyB1c2Vyc1swXS5yb2xlID0gVXNlclJvbGUuQWRtaW47XHJcbi8vIHVzZXJzWzFdLnJvbGUgPSBVc2VyUm9sZS5Vc2VyO1xyXG4vLyB1c2Vyc1syXS5yb2xlID0gVXNlclJvbGUuR3Vlc3Q7XHJcbi8vY29uc29sZS5sb2codXNlcnNbMF0pXHJcbi8vIGNvbnN0IGFkbWlucyA9IGZpbHRlclVzZXJzQnlSb2xlKHVzZXJzLCBVc2VyUm9sZS5BZG1pbik7XHJcbi8vIGNvbnNvbGUubG9nKFwiQWRtaW5zOlwiLCBhZG1pbnMpO1xyXG4vLyBmdW5jdGlvbiBmaWx0ZXJVc2Vyc0J5Um9sZSh7fSAsIHJvbGU6IHN0cmluZykge1xyXG4vLyAgIGxldCBhcnIgPSBbXTtcclxuLy8gICBmb3IgKGxldCBpIGluIGFycmF5KSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpKVxyXG5cclxuLy8gICB9XHJcbi8vIH1cclxuLy9maWx0ZXJVc2Vyc0J5Um9sZSh1c2VycylcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBQZXJzb24ge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHByaXZhdGUgYWdlOiBudW1iZXJcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLmFnZSA9IGFnZVxyXG4gIH1cclxuICBnZXRBZ2UoYWdlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmFnZVxyXG4gIH1cclxuICBzZXRBZ2UoYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWdlID0gYWdlXHJcbiAgfVxyXG4gIC8vICAgIGdldFJvbGUoKSB7XHJcbiAgLy8gICAgY29uc29sZS5sb2coJ0RldmVsb3BlcicpXHJcbiAgLy8gfVxyXG4gIGFic3RyYWN0IGdldFJvbGUoKTogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBXb3JrYWJsZSB7XHJcbiAgd29yayhob3VyczogbnVtYmVyKTogdm9pZFxyXG4gIHRha2VCcmVhayhtaW51dGVzOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbi8vIGNsYXNzIERldmVsb3BlciBleHRlbmRzIFBlcnNvbiBpbXBsZW1lbnRzIFdvcmthYmxle1xyXG4gXHJcbi8vICAgLy8gcm9sZURldmVsb3Blcjogc3RyaW5nID0gJ0RldmVsb3BlcidcclxuLy8gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4vLyAgICAgc3VwZXIoKVxyXG4vLyAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4vLyAgICB0aGlzLmFnZSA9IGFnZVxyXG4vLyAgIH1cclxuLy8gICBnZXRSb2xlKCk6IHN0cmluZyB7XHJcbi8vICAgICByZXR1cm4gJ0RldmVsb3BlcidcclxuLy8gICB9XHJcbi8vICAgLy8gZ2V0QWdlKCkge1xyXG4vLyAgIC8vICAgcmV0dXJuIGFnZVxyXG4vLyAgIC8vIH1cclxuLy8gICB3b3JrKGhvdXJzOiBudW1iZXIpOiB2b2lkIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGBXb3JraW5nICR7aG91cnN9IGhvdXJzYClcclxuLy8gICB9XHJcbi8vICAgdGFrZUJyZWFrKG1pbnV0ZXM6IG51bWJlcik6IHZvaWQge1xyXG4vLyAgICAgY29uc29sZS5sb2coYFRha2luZyBhIGJyZWFrIGZvciAke21pbnV0ZXN9IG1pbnV0ZXMuYClcclxuLy8gICB9XHJcbi8vIH1cclxuY2xhc3MgRGV2ZWxvcGVyIGV4dGVuZHMgUGVyc29uIGltcGxlbWVudHMgV29ya2FibGUge1xyXG4gIGdldFJvbGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnRGV2ZWxvcGVyJ1xyXG4gIH1cclxuXHJcbiAgd29yayhob3VyczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgV29ya2luZyAke2hvdXJzfSBob3Vyc2ApXHJcbiAgfVxyXG5cclxuICB0YWtlQnJlYWsobWludXRlczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgVGFraW5nIGEgYnJlYWsgZm9yICR7bWludXRlc30gbWludXRlc2ApXHJcbiAgfVxyXG4gIC8vZ2V0QWdlKGFnZSlcclxufVxyXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgUGVyc29uIGltcGxlbWVudHMgV29ya2FibGUge1xyXG4gXHJcbiAgZ2V0Um9sZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdNYW5hZ2VyJ1xyXG4gIH1cclxuICAvLyBnZXRBZ2UoKSB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5hZ2VcclxuICAvLyB9XHJcbiAgd29yayhob3VyczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgV29ya2luZyAke2hvdXJzfSBob3Vyc2ApXHJcbiAgfVxyXG4gIHRha2VCcmVhayhtaW51dGVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGBNYW5hZ2luZyBmb3IgJHttaW51dGVzfSBob3Vyc2ApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZXZlbG9wZXIgPSBuZXcgRGV2ZWxvcGVyKCdCb2InLCAzMilcclxuZGV2ZWxvcGVyLmdldFJvbGUoKVxyXG5kZXZlbG9wZXIud29yayg4KVxyXG5jb25zb2xlLmxvZyhgRGV2ZWxvcGVyIFJvbGU6ICR7ZGV2ZWxvcGVyLmdldFJvbGUoKX1gKVxyXG5kZXZlbG9wZXIudGFrZUJyZWFrKDMwKVxyXG4vL2NvbnNvbGUubG9nKGBEZXZlbG9wZXIgQWdlOiAke2RldmVsb3Blci5nZXRBZ2UoKX1gKVxyXG5cclxuLy8gY29uc3QgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKCdCb2InLCA0NSlcclxuLy8gbWFuYWdlci53b3JrKDYpXHJcbi8vIG1hbmFnZXIudGFrZUJyZWFrKDIwKVxyXG4vLyBjb25zb2xlLmxvZyhgTWFuYWdlciBSb2xlOiAke21hbmFnZXIuZ2V0Um9sZSgpfWApXHJcbi8vIGNvbnNvbGUubG9nKGBNYW5hZ2VyIEFnZTogJHttYW5hZ2VyLmdldEFnZSgpfWApIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9