let x=5;
let result=x+5;
console.log(result)
const r=5;
const rx=5+r;
console.log(rx)
var xy=5;
var xy=4+xy;
console.log(xy);
// const prompt = require("prompt-sync")();
let name = prompt("What is your name?: ")
console.log("Hi ", name);


// first copy npn install promt-sync to the terminal and it will download packages like .json
// once you install this code will promt or ask the user there name when you run the node js
const prompt = require('prompt-sync')();

// const name = prompt('What is your name? ');
// console.log(`Hello, ${name}!`);

const tempInCelsius = prompt("Enter value in celsius: ")
const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
console.log(tempInFahrenheit);

const radius=prompt("radius: ")
for(let i=1;i<6;i++){
    let str="";
    for(let j=1;j<=5;++j){
        str+=i
    }
    console.log(str)
    
}


