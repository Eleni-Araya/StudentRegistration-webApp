const scores=[10,20,30,40,50];
let sum:number=0;

function findAverage(scores:number[]):number{
    for(let grade of scores){
        sum=sum+grade;
    }
    return sum/scores.length;

}
const result=findAverage(scores);
console.log(result);

const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
function sumArray(matrix:number[][]):number{
    let sum:number=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            sum=sum+matrix[i][j]

        }
    }
    return sum;

}
const sumofArray=sumArray(matrix);
console.log(sumofArray);