
// //====================Session 1+2 ===============================

// // I. Study
//-----------1. Read about variables and data types in these documents:------------------
//a. Variables: https://javascript.info/variables
//b. Data types: https://javascript.info/types

//And answer the following questions:

// 1. In JavaScript, in what cases, you will get the SyntaxError telling you that some of your variables 
//have invalid names? Can you give 3 different examples of invalid variable names?

// • Khai báo tên biến trùng với tên biến đã có (Một biến chỉ nên được khai báo một lần)
// let message = "This";
// repeated 'let' leads to an error
// let message = "That"; // SyntaxError: 'message' has already been declared

// • Ký tự đầu tiên là chữ số.
// ==> VD : let 1cat;

// • Có một danh sách các từ dành riêng (list of reserved words), không thể được sử dụng làm tên biến 
// vì chúng được sử dụng bởi chính ngôn ngữ đó. (let, class, return, và function)
// ==> VD : let let = 1;  // can't name a variable "let", error!

// 2. In JavaScript, how to check variable data types?
// Sử dụng typeof để kiểm tra
// VD : console.log(typeof 13); ==> expected output: "number"
//console.log(typeof 'black'); ==> expected output: "string"

//---------------------2. let vs var vs const--------------------------------------------
// Learn about let, var and const by
// Reading these tutorials:
// var, let and const, what is the difference?
// var vs let vs const in JavaScript

// Then answer the following questions:
// 1. What are var and const in JavaScript?
// var và const là những từ khóa được sử dụng để khai báo biến trong JavaScript.

// 2. What are the differences between let and var?
// var: các biến có thể được khai báo lại và cập nhật
// VD: var name = "Huyen";
 //    var name = "Minh";
// let: có thể được cập nhật nhưng không được khai báo lại.
//==> let name = "Huyen";
//    let name = "Minh"; ==> Identifier 'name' has already been declared

// 3. What are the differences between let and const?
//const: không thể được cập nhật hoặc khai báo lại còn let vẫn có thể cập nhật lại 
//==> VD let name = "Huyen";
//       name = "Minh";
    //  const name = "Huyen";
    //  name = "Minh"; ==>  Assignment to constant variable.

// 4. What to use in what cases?
// var : gán lại , khai báo lại , phạm vi hàm, tạo thuộc tính toàn cục. 
// let : gán lại, phạm vi hàm, phạm vi khối, TDZ(vùng chết tạm thời). 
// const : phạm vi hàm, phạm vi khối, TDZ(vùng chết tạm thời).

//-----------------------3. Boolean-----------------------------------------------
//Learn about Boolean by
// Reading these tutorials:
// A Boolean (logical type) and Logical operators
// JavaScript Boolean explained
//Then answer the following questions:

// 1. What is Boolean?
// Boolean là loại dữ liệu logic chỉ có giá trị true/false

// 2. What results in Boolean?
// - Kiểu boolean chỉ có hai giá trị: true và false.
// - Loại này thường được sử dụng để lưu trữ các giá trị có / không:
// true có nghĩa là “có, đúng” và false có nghĩa là “không, không chính xác”.

//----------------------------------------------------------------------------------------------------


// // II. Serious exercices

// // 4. Declare the following variables (Exercise 3)
// // a. A String named message with value ‘Code the change’, then use console.log to print it out
// let message = "Code the change";
// console.log(message);
// // b. A Number named studentCount with value 0, then use console.log to  print it out
// let studentCount = 0;
// console.log(studentCount);

// //5. Update the declared variables in Exercise 3
// // Change message into ‘Coding may not be easy, but fun’, then use console.log to  print it out
// message = "Coding may not be easy, but fun";
// console.log(message);
// // Change studentCount into total of the students in our class right now (16 for example), 
// // then use console.log to print it out
// studentCount = 16;
// console.log(studentCount);
// // After completing exercise a, change the message into lowercase, then use console.log to print it out
// console.log(message.toLocaleLowerCase());
// // After completing exercise b, increase studentCount by 1, then use console.log to print it out
// console.log(++studentCount);

// //6. Write a script to show user a nice message
// alert("You look beautiful today!")

// //7. Write a script to ask user about their name, and then say hi to them, 
// //say something nice to them if you want :)
// let fullName = prompt("Hi there, your name please?");
// alert(`Hi ${fullName}`);

// //8. Write a script that ask 2 things from users, their first name and last name, 
// //then greet them with their full name
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// alert(`Hi ${lastName} ${firstName}`);

// //9. Write a script that calculates the area of a square
// let length = Number(prompt("Enter side length of the square"));
// alert(`The square area is ${length**2}`);

// //10. Write a script that calculates the area of a circle
// const PI = 3.14;  // or use Math.PI
// let radius = Number(prompt("Enter the radius of the circle"));
// alert(`The circle area is ${(PI * radius**2).toFixed(1)}`);

// //11. Write a script that converts Celsius (0C) into Fahrenheit (0F)
// let C = Number(prompt("Enter the temperature in Celcius"));
// alert(`${C} (C) = ${(C * 1.8 + 32).toFixed(1)} (F)`);

// //12. Write a program to print out
// // a. 7 numbers, starting from 0 (no user input)
// let i = 0;
// while (i <= 6) {
//     console.log(i);
//     i++;
// }
// //b. n numbers, starting from 0, n entered by user
// let n = Number(prompt("Enter a number"));
// for(let i = 0; i < n ; i++) {
//     console.log(i);
// }
// //c. A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = Number(prompt("Enter n"));
// for(let i = 3; i < n ; i++) {
//     console.log(i);
// }
// //d. A sequence of numbers, starting from c, ending before n, c and n entered by user
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for(let i = c; i < n ; i++) {
//     console.log(i);
// }
// //e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for(let i = c; i < n ; i+=3) {
//     console.log(i);
// }
// //f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// let s = Number(prompt("Enter s"));
// for(let i = c; i < n ; i+=s) {
//     console.log(i);
// }

// //13. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt("Enter a number"));
// let result = 1;
// for(let i = 1; i <= n; i++) {
//     result = result*i;
// }
// alert(`The factorial of ${n} is ${result}`);

// //14. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// let age = Number(prompt("How old are you?"));
// if(age < 14){
//     alert(`You are not old enough to view this content`);
// } else{
//     alert(`Enjoy!`);
// }

// //15. Write a program asking user to enter a number, x, 
// //then check if x is in the lower half or higher half of 0 - 9 range
// let a = Number(prompt("Enter a number(0-9)"));
// if(a >= 0 && a <= 4.5){
//     alert(`Lower half of 9`);
// }
// if(a > 4.5 && a <= 9){
//     alert(`Higher half of 9`);
// }

// //16. Write a program asking user to enter two numbers, x and n, 
// //then check if x is in lower half or higher half of n
// let n = Number(prompt("n = "));
// let x = Number(prompt("x = "));
// if(x >= 0 && x <= n/2){
//     alert(`${x} is in lower half of ${n}`);
// }
// if(x > n/2 && x <= n){
//     alert(`${x} is in higher half of ${n}`);
// }

// //17. Write a script to check if a number is even (divisible by 2) or odd number
// let x = Number(prompt("x = "));
// if(x % 2 !== 0){
//     alert(`${x} is an odd number`);
// } else {
//     alert(`${x} is an even number`);
// }

// //18. Write a program to print out
// // a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for(let i = 0; i < 3 ; i++){
//     console.log('L');
// }
// for(let i = 0; i < 3 ; i++){
//     console.log('H');
// }
// //b. n L’s and H’s in total, n entered by user
// let n = Number(prompt("Enter the total number of L's and H's?"));
// for(let i = 0; i < n ; i++){
//     if(i < n/2 ){
//         console.log('L');
//     }
//     else{
//         console.log('H');
//     }
// }
// //c. 8 1’s and 0’s in total, consecutively
// for(let i = 1; i <=4; i++){
//     console.log(0);
//     console.log(1);
// }
// //d. n 1’s and 0’s in total, consecutively, n entered by user
// let n = Number(prompt("Enter the total number of 1's and 0's?"));
// for(let i = 0; i < n; i++){
//     if(i % 2 === 0){
//         console.log(0);
//     } else{
//         console.log(1);
//     }
// }

// //19. Write a script to calculate the BMI (Body Mass Index) of a person, 
// //the formula is as follows
// // BMI (Body Mass Index):
// // BMI = mass (kg) / (height(m) x height(m))
// // Note: you must do the conversion from cm to m before calculation
// // And then based on the calculated BMI, tell them that they are:
// // Severely underweight if BMI < 16
// // Underweight if BMI is between 16 and 18.5
// // Normal if BMI is between 18.5 and 25
// // Overweight if BMI is between 25 and 30
// // Obese if BMI is more than 30
//  let mass = Number(prompt("Your weight in kg?"));
//  let height = Number(prompt("Your height in cm?"));
//  height = height/100;
//  let BMI = (mass / (height**2)).toFixed(1);
//  if(BMI < 16){
//      alert(`Your BMI is ${BMI}`);
//      alert(`You are severely underweight`);
//  } else if(BMI >= 16 && BMI < 18.5){
//     alert(`Your BMI is ${BMI}`);
//     alert(`You are underweight`);
//  } else if(BMI >= 18.5 && BMI < 25){
//     alert(`Your BMI is ${BMI}`);
//     alert(`You are normal`);
//  } else if(BMI >= 25 && BMI < 30){
//     alert(`Your BMI is ${BMI}`);
//     alert(`You are overweight`);
//  } else{
//     alert(`Your BMI is ${BMI}`);
//     alert(`You are obese`);
//  }




 //=============================END===================================


