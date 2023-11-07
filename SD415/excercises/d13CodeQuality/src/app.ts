// import { assert } from "chai"
// function checkPrime(num: number): boolean {
// for (let i = 2; i < num; i++)
// if (num % i === 0) return false;
// return num > 1;
// }
// export function checkPrime(num: number): boolean {
//         for (let i = 2; i < num; i++)
//             if (num % i === 0) return false;
//         return num > 1;
//     }

// export function ssReverse(arr: number[]){ return arr; }

//suppose have many functions to test and want tests in separate file

/**
 * @param {number} num is an integer
 * @returns {boolean} true if number is prime, else false
 * Prime numbers have only 2 factors: 1 and themselves.  
*/
// export function checkPrime(num: number): boolean {
//         for (let i = 2; i < num; i++)
//             if (num % i === 0) return false;
//         return num > 1;
//     }

//     export function ssReverse(arr: number[]){ return arr; }


export function computeSalesCommission(salaried: boolean, salesAmount: number): number {
    if (salaried) {
        if (salesAmount >= 300 && salesAmount < 500) {
            return salesAmount = salesAmount * 0.01;
        }
        if (salesAmount >= 500) {
            return salesAmount = salesAmount * 0.02;
        }
    } else {
        if (salesAmount >= 300 && salesAmount < 500) {
            return salesAmount = salesAmount * 0.02;
        } if (salesAmount >= 500) {
            
            return salesAmount = salesAmount * 0.03;
        }
    }
    return 0;
}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));

export function compoundInterest(initialamount: number, annualinterestrate: number, numberofyears: number): number {

    const monthlyRate = annualinterestrate / 12 / 100; // Monthly interest rate
    let balance = initialamount; // Initial balance

    for (let year = 1; year <= numberofyears; year++) {
        for (let month = 1; month <= 12; month++) {
            const monthlyInterest = balance * monthlyRate;
            balance += monthlyInterest;
        }
    }
    return balance;
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
console.log("expect 16470.09", compoundInterest(5000, 5, 10));

export function isVowel(str:string): boolean{
    if(str==="a"||str==="e"||str==="i"||str==="o"||str==="u"){
        return true;

    }
    return false;

}
console.log("It is ",isVowel("d"));
console.log("It is ",isVowel("e"));

export function calcDownpayment(cost: number): number {
    
if (cost < 50000) {
    return cost * 0.05;
  } else if (cost < 100000) {
    return 2500 + 0.1 * (cost - 50000);
  } else if (cost < 200000) {
    return 7500 + 0.15 * (cost - 100000);
  } else {
    return 20000 + 0.1 * (cost - 200000);
  }
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

export function sumDigits(num:number):number{
    let sum=0;
    let reminder:number=0;
    while(num>0){
        reminder=num%10;
        sum+=reminder;
        num=Math.floor(num/10);
    }
    return sum;
}

console.log("expect 10: ",sumDigits(1234));
console.log("expect 3: ",sumDigits(102));
console.log("expect 8: ",sumDigits(8));