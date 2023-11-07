
// import { assert } from "chai"
// import { checkPrime, ssReverse } from "../src/app.js"


// function checkPrime(num: number): boolean {
// for (let i = 2; i < num; i++)
// if (num % i === 0) return false;
// return num > 1;
// }


// describe("checkPrime returns true if argument is prime", function () {
//     it("37 is prime", function () {
//         assert.strictEqual(checkPrime(37), true);
//     });
//     it(" 77 is not prime", function () {

//         assert.strictEqual(checkPrime(77), false);
//     });
// });



//suppose have many functions to test and want tests in separate file
// import { assert } from "chai"

/* import from functions.ts module-- note the .js extension (even though actual file is .ts */

//suppose have many functions to test and want tests in separate file
// import { assert } from "chai"
// /* import from functions.ts module-- note the .js extension (even though actual file is .ts */
// import {checkPrime, ssReverse} from "../src/app.js";
// describe("checkPrime returns true if argument is prime ", function () {
// it("37 is prime", function () {
// assert.strictEqual(checkPrime(37), true);
// });
// it(" 77 is not prime", function () {
// assert.strictEqual(checkPrime(77), false);
// });
// });
// describe("ssReverse", function () {
//  it("[1, 2, 3, 4]", function () {//test array equality
//  assert.deepStrictEqual(ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
//  });
// });
/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */



/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
import { assert } from "chai"
// import { isVowel } from "../src/vowel"
import {  computeSalesCommission, compoundInterest,isVowel,calcDownpayment,sumDigits } from "../src/app.js"


describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });    
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });          

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    // it("tests salaried and 3500 sales", function(){
    //     assert.strictEqual(computeSalesCommission(true, 3500), 65);
    // });
    // it("tests not salaried and 3500 sales", function(){
    //     assert.strictEqual(computeSalesCommission(false, 3500), 100);
    // });
});

describe("test of compoundInterest", function(){
    it("tests $100 for 1 year at 10% monthly compound", function(){
        const exact = compoundInterest(100, 10, 1);
        assert.strictEqual(+exact.toFixed(2), 110.47 );
    });
    it("tests $10000 for 5 years at 10% monthly compound", function(){
        const exact = compoundInterest(10000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 16470.09 );
    });
    it("tests $5000 for 5 years at 10% monthly compound", function(){
        const exact = compoundInterest(5000, 5, 10);
        assert.strictEqual(+exact.toFixed(2), 8235.05 );
    })


});

describe("test of downpayment",function(){
    it("test cost of $2000",function(){
        assert.strictEqual(calcDownpayment(40000),2000);
    })
    it("test cost of $50000",function(){
        assert.strictEqual(calcDownpayment(50000),2500);
    })
    it("test cost of $100000",function(){
        assert.strictEqual(calcDownpayment(100000),7500);
    })
    it("test cost of $250000",function(){
        assert.strictEqual(calcDownpayment(250000),25000);
    })

describe("test of sum digits",function(){
    it("test the sum of 1234 digit",function(){
        assert.equal(sumDigits(1234),10);
    })
    it("test the sum of the 102 digits",function(){
        assert.equal(sumDigits(102),3);
    })
    it("test the sum of the 8 digit",function(){
        assert.equal(sumDigits(8),8);
    })

})    













})


