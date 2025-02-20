// // Chapter 09 (USER INPUT & CONDITIONAL STATEMENT)

// // Q1)


// // Q2)
// var gender = prompt("Enter your Gender");
// var message;
// if(gender === Male){
//     message = ( "Wellcome Sir..")
// }
// else if(gender === Female){
//     message = ( "Wellcome Maam..")
// }
// else{
//     message = console.log("Incorrect Value...");
// }

// // Q3)
// var message = console.log("Signal color", " ", "message"); 
// console.log("Red", " ", "Must stop");
// console.log("Yellow", " ", "Redy to move");
// console.log("Green", " ", "Move now");

// // Q4)

// // Q5)
 // (a)
// var a = 4;
// if(++a === 5){
//     alert("Give condition for variable a is True")
// }

// // (b)
// var b = 82;
// if(++a === 83){
//     alert("Give condition for variable b is True")
// }

// // (c)
// var c = 12;
// if(c++ === 13){
//     alert(" condition 1 is True")
// }
// if(++c < 13){
//     alert("condition 2 is True")
// }
// if(++c < 14){
//     alert("condition 3 is True")
// }
// if(c === 14){
//     alert("condition 4 is True")
// }

// // (d)
// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if(totalCost = materialCost + laborCost){
// //     alert("The cost equals")
// };

// // (e)
// if(true){
//     alert("True")
// };
// if(false){
//     alert("False")
// };

// // (f)
// if("car" < "cat"){
//     alert("Car is smallest than cat")
// }

// Q6)
// var total = 300; 
// var obtained = 219; 
// console.log("Total Marks:", " ", total);
// console.log("Obtained Marks:", " ", obtained);
// console.log("Percentage:", " ", total/obtained*100);
// console.log("Grade:", " ", "B");
// console.log("Remarks:", " ", "You need to improve");

// Q7)

// Q8)
// var number = prompt("Enter a number:");
// number = parseInt(number);
// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }

// Q9)
// var number = prompt("Enter a number:");
// number = parseInt(number);
// if (number % 2 === 0) {
//     alert("The number " + number + " is even.");
// } else {
//     alert("The number " + number + " is odd.");
// }

// Q10)


// Q11)

// Chapter 12 -13 (IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)

// Q1)
// var input = prompt("Enter a character:");
// if (!isNaN(input) && input.trim() !== "") {
//     alert("The input is a number.");
// } 
// else if (input.length === 1 && input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
//     alert("The input is an uppercase letter.");
// } 
// else if (input.length === 1 && input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
//     alert("The input is a lowercase letter.");
// } 
// else {
//     alert("The input is neither a number nor a letter.");
// }

// Q2)
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));
// if (num1 > num2) {
//     alert("The larger number is: " + num1);
// } else if (num2 > num1) {
//     alert("The larger number is: " + num2);
// } else {
//     alert("The two numbers are equal.");
// }

// Q3)
// var number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

// Q4)


// Q5)
// var correctPassword = "mySecret123";  
// var userPassword = prompt("Please enter your password:");
// if (userPassword === "") {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password");
// }

// Q6)
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// Q7)
// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
// time = parseInt(time);
// if (time >= 500 && time < 1200) {
//     alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// } else if ((time >= 2100 && time <= 2359) || (time >= 0 && time < 500)) {
//     alert("Good Night!");
// } else {
//     alert("Please enter a valid time in 24-hour format (0000 - 2359).");
// }


// Home Assignment

// Chapter 10 (if statements)

// Q1)
// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City OF Lights");
// }

// Q2)

// Q3)
// var ZipCode = 10010;
// if (ZipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }

// Q4)


// Chapter 11 (Comparison Operators)

// Q1)
// var ticket_no = 12234
// if (ticket_no !== 12345) {
//     "plz Come.."
// }

// else {
//     "better luck next time.."
// }

// console.log(ticket_no)




