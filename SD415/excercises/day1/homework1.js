import promptSync from "prompt-sync";
const prompt = promptSync();
function problem1(salaried,sales){
    if(salaried){
        if(sales>=300&&sales<500){
            sales=sales*0.01;
        }
        if(sales>=500){
            sales=sales*0.02;
        }
    }else{
        if(sales>=300&&sales<500){
            sales=sales*0.02;
        }if(sales>=500){
            sales=sales*0.03;
        }
    }
}