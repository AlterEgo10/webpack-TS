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
//----------------------------------------------------
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = console.log(reverseArray(numbers));
const strings = ['a', 'b', 'c'];
const reversedStrings = console.log(reverseArray(strings));
function getProperty(object, key) {
    //console.log(object[key as ObjectKey])
    // console.log(object.key)
    return console.log(object[key]);
}
const person = { name: 'Alice', age: 25 };
//type ObjectKey = keyof typeof person
const nameUser = getProperty(person, 'name'); // "Alice"
const age = getProperty(person, 'age');
class Collection {
    constructor() {
        this.data = [];
        this.add = (item) => this.data.push(item);
    }
    remove(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItems() {
        return this.data;
    }
}
const collection = new Collection();
collection.add(1);
collection.add(2);
collection.remove(1);
console.log(collection.getItems()); // [2]
const stringCollection = new Collection();
stringCollection.add("a");
stringCollection.add("b");
stringCollection.remove("a");
console.log(stringCollection.getItems()); // ["b"]

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFFMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLFVBQVUsRUFBVSxDQUFDO0FBQ2xELGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vdHlwZXNjcmlwdC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB1c2VyTmFtZTogc3RyaW5nID0gJ09sZ2EnXHJcbi8vIGNvbnN0IHVzZXJBZ2U6IG51bWJlciA9IDI4XHJcblxyXG4vLyBjb25zdCBpc051bGw6IG51bGw9IG51bGxcclxuLy8gY29uc29sZS5sb2codXNlck5hbWUpXHJcblxyXG4vLyB0eXBlIFVzZXJJZCA9IG51bWJlclxyXG4vLyB0eXBlIFVzZXJOYW1lID0gc3RyaW5nXHJcbi8vIHR5cGUgRW1haWwgPSBzdHJpbmdcclxuXHJcbi8vIGludGVyZmFjZSBVc2Vye1xyXG4vLyBpZDogVXNlcklkO1xyXG4vLyBuYW1lOiBVc2VyTmFtZTtcclxuLy8gICBlbWFpbDogRW1haWw7XHJcbi8vICAgcm9sZT86IFVzZXJSb2xlO1xyXG4vLyBpc0FjdGl2ZT86IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoaWQ6IFVzZXJJZCxuYW1lOiBVc2VyTmFtZSxlbWFpbDogRW1haWwpIHtcclxuLy8gICBjb25zdCB1c2VyID0ge1xyXG4vLyAgICAgaWQ6IGlkLFxyXG4vLyAgICAgbmFtZTogbmFtZSxcclxuLy8gICAgIGVtYWlsOiBlbWFpbCxcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHVzZXJcclxuLy8gfVxyXG5cclxuLy8gZW51bSBVc2VyUm9sZSB7XHJcbi8vICAgICBBZG1pbixcclxuLy8gICAgIFVzZXIsXHJcbi8vICAgICBHdWVzdCxcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtcclxuLy8gICAgY3JlYXRlVXNlcigxLCBcIkFsaWNlXCIsIFwiYWxpY2VAZXhhbXBsZS5ydVwiKSxcclxuLy8gICBjcmVhdGVVc2VyKDIsIFwiQm9iXCIsIFwiYm9iQGV4YW1wbGUucnVcIiksXHJcbi8vICAgY3JlYXRlVXNlcigzLCBcIkNoYXJsaWVcIiwgXCJjaGFybGllQGV4YW1wbGUucnVcIilcclxuLy8gXVxyXG5cclxuLy8gdXNlcnNbMF0ucm9sZSA9IFVzZXJSb2xlLkFkbWluO1xyXG4vLyB1c2Vyc1sxXS5yb2xlID0gVXNlclJvbGUuVXNlcjtcclxuLy8gdXNlcnNbMl0ucm9sZSA9IFVzZXJSb2xlLkd1ZXN0O1xyXG4vL2NvbnNvbGUubG9nKHVzZXJzWzBdKVxyXG4vLyBjb25zdCBhZG1pbnMgPSBmaWx0ZXJVc2Vyc0J5Um9sZSh1c2VycywgVXNlclJvbGUuQWRtaW4pO1xyXG4vLyBjb25zb2xlLmxvZyhcIkFkbWluczpcIiwgYWRtaW5zKTtcclxuLy8gZnVuY3Rpb24gZmlsdGVyVXNlcnNCeVJvbGUoe30gLCByb2xlOiBzdHJpbmcpIHtcclxuLy8gICBsZXQgYXJyID0gW107XHJcbi8vICAgZm9yIChsZXQgaSBpbiBhcnJheSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coaSlcclxuXHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vZmlsdGVyVXNlcnNCeVJvbGUodXNlcnMpXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiByZXZlcnNlQXJyYXk8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gIGxldCByZXN1bHQgPSBbXVxyXG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIHJlc3VsdC5wdXNoKGFycltpXSlcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdXHJcbmNvbnN0IHJldmVyc2VkTnVtYmVycyA9IGNvbnNvbGUubG9nKHJldmVyc2VBcnJheShudW1iZXJzKSlcclxuXHJcbmNvbnN0IHN0cmluZ3MgPSBbJ2EnLCAnYicsICdjJ11cclxuY29uc3QgcmV2ZXJzZWRTdHJpbmdzID0gY29uc29sZS5sb2cocmV2ZXJzZUFycmF5KHN0cmluZ3MpKVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW50ZXJmYWNlIFBlcnNvbntcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3BlcnR5IDxULCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqZWN0OiBULCBrZXk6Sykge1xyXG4gIC8vY29uc29sZS5sb2cob2JqZWN0W2tleSBhcyBPYmplY3RLZXldKVxyXG4gIC8vIGNvbnNvbGUubG9nKG9iamVjdC5rZXkpXHJcbiAgcmV0dXJuIGNvbnNvbGUubG9nKG9iamVjdFtrZXldKVxyXG59XHJcblxyXG5jb25zdCBwZXJzb246IFBlcnNvbiA9IHsgbmFtZTogJ0FsaWNlJywgYWdlOiAyNSB9XHJcbi8vdHlwZSBPYmplY3RLZXkgPSBrZXlvZiB0eXBlb2YgcGVyc29uXHJcbmNvbnN0IG5hbWVVc2VyID0gZ2V0UHJvcGVydHkocGVyc29uLCAnbmFtZScpIC8vIFwiQWxpY2VcIlxyXG5jb25zdCBhZ2UgPSBnZXRQcm9wZXJ0eShwZXJzb24sICdhZ2UnKVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW50ZXJmYWNlIElDb2xsZWN0aW9uIDxUPntcclxuICBhZGQoW10pOiBUXHJcbiAgcmVtb3ZlKFtdKTogVFxyXG4gIGdldEl0ZW1zKCk6IGFueVxyXG4gLy8gdG9TdHJpbmcoKTpzdHJpbmdcclxufVxyXG5cclxuY2xhc3MgQ29sbGVjdGlvbjxUIGV4dGVuZHN7dG9TdHJpbmcoKTpzdHJpbmd9PiB7XHJcbiAgZGF0YTogVFtdID0gW11cclxuICBhZGQgPSAoaXRlbTogVCkgPT4gdGhpcy5kYXRhLnB1c2goaXRlbSlcclxuICByZW1vdmUoaXRlbTogVCkge1xyXG4gIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pXHJcbiAgfVxyXG4gIGdldEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29sbGVjdGlvbiA9IG5ldyBDb2xsZWN0aW9uPG51bWJlcj4oKSBcclxuY29sbGVjdGlvbi5hZGQoMSk7XHJcbmNvbGxlY3Rpb24uYWRkKDIpO1xyXG5jb2xsZWN0aW9uLnJlbW92ZSgxKVxyXG5jb25zb2xlLmxvZyhjb2xsZWN0aW9uLmdldEl0ZW1zKCkpOyAvLyBbMl1cclxuXHJcbmNvbnN0IHN0cmluZ0NvbGxlY3Rpb24gPSBuZXcgQ29sbGVjdGlvbjxzdHJpbmc+KCk7XHJcbnN0cmluZ0NvbGxlY3Rpb24uYWRkKFwiYVwiKTtcclxuc3RyaW5nQ29sbGVjdGlvbi5hZGQoXCJiXCIpO1xyXG5zdHJpbmdDb2xsZWN0aW9uLnJlbW92ZShcImFcIik7XHJcbmNvbnNvbGUubG9nKHN0cmluZ0NvbGxlY3Rpb24uZ2V0SXRlbXMoKSk7IC8vIFtcImJcIl0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=