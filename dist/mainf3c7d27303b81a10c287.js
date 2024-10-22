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
//-----------------------------------------------------------------------------------
function printInfo(value) {
    if (typeof value === 'string') {
        console.log(value.length);
    }
    else {
        console.log(value * value);
    }
}
function makeSound(animal) {
    if ('bark' in animal) {
        return animal.bark();
    }
    return animal.meow();
}
const dog = {
    name: 'Dog1',
    bark() {
        return 'Woow!';
    },
};
const cat = {
    name: 'Whiskers',
    meow: () => 'Meow!',
};
function isDog(animal) {
    return animal.bark !== undefined;
}
function isCat(animal) {
    return animal.meow !== undefined;
}
function playWithPet(pet) {
    if (isDog(pet)) {
        return pet.bark;
    }
    else {
        return pet.meow;
    }
}
console.log(makeSound(dog));
console.log(makeSound(cat));
printInfo('test');
printInfo(4);
console.log(playWithPet(dog));
playWithPet(cat);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmYzYzdkMjczMDNiODFhMTBjMjg3LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtDQUFrQztBQUNsQyw2QkFBNkI7QUFFN0IsMkJBQTJCO0FBQzNCLHdCQUF3QjtBQUV4Qix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUV0QixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixJQUFJO0FBRUosZ0VBQWdFO0FBQ2hFLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLElBQUk7QUFFSixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLFlBQVk7QUFDWixhQUFhO0FBQ2IsSUFBSTtBQUVKLDBCQUEwQjtBQUMxQixpREFBaUQ7QUFDakQsNENBQTRDO0FBQzVDLG1EQUFtRDtBQUNuRCxJQUFJO0FBRUosa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLDJEQUEyRDtBQUMzRCxrQ0FBa0M7QUFDbEMsa0RBQWtEO0FBQ2xELGtCQUFrQjtBQUNsQiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBRXJCLE1BQU07QUFDTixJQUFJO0FBQ0osMEJBQTBCO0FBQzFCLHFGQUFxRjtBQUVyRixTQUFTLFNBQVMsQ0FBQyxLQUFzQjtJQUN2QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO1NBQU0sQ0FBQztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0FBQ0gsQ0FBQztBQVlELFNBQVMsU0FBUyxDQUFDLE1BQWlCO0lBQ2xDLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtJQUN0QixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLENBQUM7QUFFRCxNQUFNLEdBQUcsR0FBUTtJQUNmLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSTtRQUNGLE9BQU8sT0FBTztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLEdBQUcsR0FBUTtJQUNmLElBQUksRUFBRSxVQUFVO0lBQ2hCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPO0NBQ3BCO0FBRUQsU0FBUyxLQUFLLENBQUMsTUFBVztJQUN4QixPQUFRLE1BQWMsQ0FBQyxJQUFJLEtBQUssU0FBUztBQUMzQyxDQUFDO0FBQ0QsU0FBUyxLQUFLLENBQUMsTUFBVztJQUN4QixPQUFRLE1BQWMsQ0FBQyxJQUFJLEtBQUssU0FBUztBQUMzQyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsR0FBYztJQUNqQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2YsT0FBTyxHQUFHLENBQUMsSUFBSTtJQUNqQixDQUFDO1NBQU0sQ0FBQztRQUNOLE9BQU8sR0FBRyxDQUFDLElBQUk7SUFDakIsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ2pCLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixXQUFXLENBQUMsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3R5cGVzY3JpcHQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgdXNlck5hbWU6IHN0cmluZyA9ICdPbGdhJ1xyXG4vLyBjb25zdCB1c2VyQWdlOiBudW1iZXIgPSAyOFxyXG5cclxuLy8gY29uc3QgaXNOdWxsOiBudWxsPSBudWxsXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJOYW1lKVxyXG5cclxuLy8gdHlwZSBVc2VySWQgPSBudW1iZXJcclxuLy8gdHlwZSBVc2VyTmFtZSA9IHN0cmluZ1xyXG4vLyB0eXBlIEVtYWlsID0gc3RyaW5nXHJcblxyXG4vLyBpbnRlcmZhY2UgVXNlcntcclxuLy8gaWQ6IFVzZXJJZDtcclxuLy8gbmFtZTogVXNlck5hbWU7XHJcbi8vICAgZW1haWw6IEVtYWlsO1xyXG4vLyAgIHJvbGU/OiBVc2VyUm9sZTtcclxuLy8gaXNBY3RpdmU/OiBib29sZWFuO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVVc2VyKGlkOiBVc2VySWQsbmFtZTogVXNlck5hbWUsZW1haWw6IEVtYWlsKSB7XHJcbi8vICAgY29uc3QgdXNlciA9IHtcclxuLy8gICAgIGlkOiBpZCxcclxuLy8gICAgIG5hbWU6IG5hbWUsXHJcbi8vICAgICBlbWFpbDogZW1haWwsXHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB1c2VyXHJcbi8vIH1cclxuXHJcbi8vIGVudW0gVXNlclJvbGUge1xyXG4vLyAgICAgQWRtaW4sXHJcbi8vICAgICBVc2VyLFxyXG4vLyAgICAgR3Vlc3QsXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXHJcbi8vICAgIGNyZWF0ZVVzZXIoMSwgXCJBbGljZVwiLCBcImFsaWNlQGV4YW1wbGUucnVcIiksXHJcbi8vICAgY3JlYXRlVXNlcigyLCBcIkJvYlwiLCBcImJvYkBleGFtcGxlLnJ1XCIpLFxyXG4vLyAgIGNyZWF0ZVVzZXIoMywgXCJDaGFybGllXCIsIFwiY2hhcmxpZUBleGFtcGxlLnJ1XCIpXHJcbi8vIF1cclxuXHJcbi8vIHVzZXJzWzBdLnJvbGUgPSBVc2VyUm9sZS5BZG1pbjtcclxuLy8gdXNlcnNbMV0ucm9sZSA9IFVzZXJSb2xlLlVzZXI7XHJcbi8vIHVzZXJzWzJdLnJvbGUgPSBVc2VyUm9sZS5HdWVzdDtcclxuLy9jb25zb2xlLmxvZyh1c2Vyc1swXSlcclxuLy8gY29uc3QgYWRtaW5zID0gZmlsdGVyVXNlcnNCeVJvbGUodXNlcnMsIFVzZXJSb2xlLkFkbWluKTtcclxuLy8gY29uc29sZS5sb2coXCJBZG1pbnM6XCIsIGFkbWlucyk7XHJcbi8vIGZ1bmN0aW9uIGZpbHRlclVzZXJzQnlSb2xlKHt9ICwgcm9sZTogc3RyaW5nKSB7XHJcbi8vICAgbGV0IGFyciA9IFtdO1xyXG4vLyAgIGZvciAobGV0IGkgaW4gYXJyYXkpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGkpXHJcblxyXG4vLyAgIH1cclxuLy8gfVxyXG4vL2ZpbHRlclVzZXJzQnlSb2xlKHVzZXJzKVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBwcmludEluZm8odmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZS5sZW5ndGgpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlICogdmFsdWUpXHJcbiAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbnRlcmZhY2UgRG9nIHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBiYXJrKCk6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2F0IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBtZW93KCk6IHN0cmluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU291bmQoYW5pbWFsOiBEb2cgfCBDYXQpIHtcclxuICBpZiAoJ2JhcmsnIGluIGFuaW1hbCkge1xyXG4gICAgcmV0dXJuIGFuaW1hbC5iYXJrKClcclxuICB9XHJcbiAgcmV0dXJuIGFuaW1hbC5tZW93KClcclxufVxyXG5cclxuY29uc3QgZG9nOiBEb2cgPSB7XHJcbiAgbmFtZTogJ0RvZzEnLFxyXG4gIGJhcmsoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnV29vdyEnXHJcbiAgfSxcclxufVxyXG5cclxuY29uc3QgY2F0OiBDYXQgPSB7XHJcbiAgbmFtZTogJ1doaXNrZXJzJyxcclxuICBtZW93OiAoKSA9PiAnTWVvdyEnLFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RvZyhhbmltYWw6IGFueSk6IGFuaW1hbCBpcyBEb2cge1xyXG4gIHJldHVybiAoYW5pbWFsIGFzIERvZykuYmFyayAhPT0gdW5kZWZpbmVkXHJcbn1cclxuZnVuY3Rpb24gaXNDYXQoYW5pbWFsOiBhbnkpOiBhbmltYWwgaXMgQ2F0IHtcclxuICByZXR1cm4gKGFuaW1hbCBhcyBDYXQpLm1lb3cgIT09IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5V2l0aFBldChwZXQ6IERvZyB8IENhdCkge1xyXG4gIGlmIChpc0RvZyhwZXQpKSB7XHJcbiAgICByZXR1cm4gcGV0LmJhcmtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBldC5tZW93XHJcbiAgfVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhtYWtlU291bmQoZG9nKSlcclxuY29uc29sZS5sb2cobWFrZVNvdW5kKGNhdCkpXHJcbnByaW50SW5mbygndGVzdCcpXHJcbnByaW50SW5mbyg0KVxyXG5jb25zb2xlLmxvZyhwbGF5V2l0aFBldChkb2cpKVxyXG5wbGF5V2l0aFBldChjYXQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9