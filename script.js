let first = prompt("Enter the first number:");
let second = prompt("Enter the second number:");

const num1 = Number(first);
const num2 = Number(second);

if(
	first === null || second === null ||
    first.trim() === "" || second.trim() === "" || isNaN(num1) || isNaN(num2)
){
	alert("Invalid input. Please enter a valid number.")
}else{
	 let sum = num1+num2;
	 alert(`The sum of ${num1} and ${num2} is {sum}.`)
 }