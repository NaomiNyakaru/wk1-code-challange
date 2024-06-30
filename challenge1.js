////Student Grade Generators
const ps = require("prompt-sync");
const prompt = ps()

function grades(){
    let marks = prompt("Please enter your student marks:");

    if (marks <=100 && marks > 79){
        return 'A';
    }else if (marks <=79 && marks >= 60){
        return 'B';
    }else if (marks <= 59 && marks >= 49){
        return 'C';
    }else if (marks <= 48 && marks >= 40){
        return 'D';
    }else if (marks < 40 && marks >=0 ){
        return 'E';
    }else{
        return 'Not Applicable';
    }
}

console.log(grades());