/////Net salary calculator
const ps = require("prompt-sync");
const prompt = ps()


function grossSalaryCalculation (){
    let basicSalary = prompt("Enter basic salary: ");
    let benefits = prompt("Enter benefits: ");
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);
    const grossSalary = basicSalary + benefits;
    return ` gross Salary: ${ grossSalary}`
}

function taxDeductions(grossSalary){
    

    if (grossSalary <= 24000){
        const tax = grossSalary * 0.1
        return `Tax: ${tax}`
    }else if (grossSalary >= 24001 && grossSalary <= 32333){
        const tax = grossSalary * 0.25
        return `Tax: ${tax}`
    }else if (grossSalary >= 32334 && grossSalary <= 500000){
        const tax = grossSalary * 0.3
        return `Tax: ${tax}`
    }else if ( grossSalary >= 500001 && grossSalary <= 800000){
        const tax = grossSalary * 0.325
        return `Tax: ${tax}`
    }else {
        const tax = grossSalary * 0.35
        return `Tax: ${tax}`
    }
}

function nhifDeductionsCalculator(grossSalary){
    
      const nhifDeductions = 0.025 * grossSalary
      return `NHIF deductions: ${ nhifDeductions}`
}

function nssfDeductionsCalculator(grossSalary){
   
    const nssfDeductions = 0.06 * grossSalary
      return `NSSF deductions: ${ nssfDeductions}`
}

function netSalaryCalculation(grossSalary, tax , nhifDeductions,nssfDeductions){
   
    const netSalary = grossSalary - tax- nssfDeductions - nhifDeductions
    return `netSalary: ${ netSalary}`
}

let grossSalary = parseFloat(grossSalaryCalculation().split(": ")[1]);
console.log(`Gross Salary: ${grossSalary}`);

let tax = parseFloat(taxDeductions(grossSalary).split(": ")[1]);
console.log(`Tax: ${tax}`);

let nhif = parseFloat(nhifDeductionsCalculator(grossSalary).split(": ")[1]);
console.log(`NHIF deductions: ${nhif}`);

let nssf = parseFloat(nssfDeductionsCalculator(grossSalary).split(": ")[1]);
console.log(`NSSF deductions: ${nssf}`);

let netSalary = parseFloat(netSalaryCalculation(grossSalary, tax, nhif, nssf).split(": ")[1]);
console.log(`Net Salary: ${netSalary}`);