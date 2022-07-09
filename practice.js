/* VERY EASY: Write a function named min that takes two arguments and returns their minimum. */
function minimum(num1,num2){
    if(num1 > num2){
        return num2;
    }else{
        return num1;
    }
}
/* EASY: Create an array of students holding their last name, first name, and age with 3 students. 
To validate, please log a greeting with the first name, last name and age of the 2nd student. 
The output should look like "Hello, my name is John Doe and I'm 19 years old."*/
const students = [["Fred","Jackson","21"],["James","Lacoste","21"],["Allsion", "Campbell","21"]];
console.log(`Hello, my name is ${students[1][0]} ${students[1][1]} and I'm ${students[1][2]} years olds.`);
/* MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number 
and its corresponding month. For example: if the user enters the number 3, then it should return 
the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater 
than 12). */
var num = prompt("Input a number 1-12: ");
let months = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'];
if(num > 0 && num <= 12){
    alert(`${num} - ${months[num-1]}`);
} else{
    alert("Invalid Number");
}
/* HARD: Given the information below for Tom and Jerry. 
    Tom - 	height:  9in   	mass: 8 g
    Jerry - 	height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
            BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than 
Jerry’s? false). */

function getBMI(height, mass){
    var bmi = mass / (height * height);
    return bmi;
}
var tom = getBMI(9,8);
var jerry = getBMI(10,45);
var greater = (tom > jerry);

console.log(`Is Tom's BMI higher than Jerry's? ${greater}`);