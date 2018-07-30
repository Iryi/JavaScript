
let userInput;
const numbers = [];
let total = 0;

do {
userInput = prompt('Please enter a number');
  if(userInput===null || isNaN(userInput)) {
  break;
}
  numbers.push(+userInput);
} while (userInput!==null);

console.log(numbers);

for(let value of numbers) {
total = total + value;
}
alert(`Общая сумма чисел равна ${total}`);
