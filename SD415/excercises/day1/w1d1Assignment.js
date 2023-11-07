
const prompt = require("prompt-sync")();
// let salaried=false;
// let sales=1000;

//     if(salaried){
//         if(sales>=300&&sales<500){
//             sales=sales*0.01;
//         }
//         if(sales>=500){
//             sales=sales*0.02;
//         }
//     }else{
//         if(sales>=300&&sales<500){
//             sales=sales*0.02;
//         }if(sales>=500){
//             sales=sales*0.03;
//         }
//     }


// console.log(`Sales Commission: $${sales}`);

// second question 2
// let age=0;
// while(age<18){
//  age = prompt("please enter your age: ");

// }
// let userInputAge=0;
// do{
//     const userInputAge = parseInt(prompt("please enter your age: ")); 
// }while(userInputAge<=18)


// third question 3
// let initialamount = parseFloat(prompt("What is your initial amount?: "))
// let annualinterestrate = parseFloat(prompt("What is your annual interest rate?: "))
// let numberofyears = parseFloat(prompt("What is your annual interest rate?: "))


// const monthlyRate = annualinterestrate / 12 / 100; // Monthly interest rate
// let balance = initialamount; // Initial balance

// for (let year = 1; year <= numberofyears; year++) {
//   for (let month = 1; month <= 12; month++) {
//     const monthlyInterest = balance * monthlyRate;
//     balance += monthlyInterest; 
//   }
// }

// console.log(`After ${numberofyears} years, the balance will be: $${balance}`);

// fourth question 4
// const rows = 5; 
// const cols = 5; 

// for (let i = 1; i <= rows; i++) {
//   let rowPattern = "";
//   for (let j = 1; j <= cols; j++) {
//     rowPattern += j;
//   }
//   console.log(rowPattern);
// }


// for (let i = 1; i <= rows; i++) {
//   let rowPattern = "";
//   for (let j = 1; j <= i; j++) {
//     rowPattern += i;
//   }
//   console.log(rowPattern);
// }

// question 5
// let cost= parseFloat(prompt("what is the cost of the house? "))

// let downpayment=0;
// if(cost>=0 && cost<50000){
//      downpayment=cost*0.05;
// }if(cost>=50000 && cost<100000){
//     downpayment=1000+0.1*(cost-50000)
// }if(cost>100000&&cost<=200000){
//     downpayment=2000+0.15*(cost-100)
// }if(cost>=200000){
//     downpayment=5000+0.10*(cost-200)
// }
// console.log("The downpayment is "+downpayment)


// question 6

// const number = parseInt(prompt("Enter an integer: "));

// let originalNumber = number;
// let sumOfDigits = 0;

// while (originalNumber !== 0) {
//   const digit = originalNumber % 10;
//   sumOfDigits += digit;
//   originalNumber = Math.floor(originalNumber / 10);
// }

// console.log(`The sum of the digits in ${number} is ${sumOfDigits}`);


// let n=parseFloat(prompt("please enter a number?"))
// function testPrime(){
//     for(let i=0;i<n;i++){
//         if(n%i==0){
//             return false;
//         }
      
//             return true;
        
       
//     }
          
//         }

// console.log(testPrime());

// function b(){
//     function a(){
//     console.log(x);
//     }
//     let x = 10;
//     a();
//     console.log(x);
//     }
//     let x = 20;
//     b(); 

    function a(){
        console.log(x); // consult Global for x and print 20 from Global
        }
        function b(){
        let x = 10;
        a(); // consult Global for a
        console.log(x);
        }
        let x = 20;
        b();