

// let users = {

// };

// for (let i = 1; i <= 3; i++) {

//   let userName = prompt("Введите имя");
//   let userAge = +prompt('Введите возрост');
//   users[i] = {
//     name: userName,
//     age: userAge
//   }

// }

// console.log();

let array = [5, 6, 7 , 11, 89];
let result = 0;
 
for (let i = 0; i < array.length; i++) {
  result += array[i]
}
console.log(result);