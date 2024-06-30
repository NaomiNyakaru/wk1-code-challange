*Challenge1*
The program is a student grade generator.
It contains a function -grades that calculates the grades depending on the marks, function(grades) is called at the end and it display the grade using console.log.
There is also a -prompt that enables user input.
The grade ranges are as below:
 A > 79
 B - 60 to 79
 C - 59 to 49
 D - 40 to 48
 E - less 40.

*Challenge2*
The program is about a speed generator.
The program contains a function -speedDetector that calculates demeritPoints to be given to the driver and determine the licence status.
There is a prompt to enable user input.
From the body of the function: SpeedLimit is placed at 70 and a demerit point for every other 5km
If the speed is below 70, an OK is returned. 
If it is above 70 demeritPoints are calculated by subtracting it speed limit and then dividing the difference by 5.
The demerit points are further use to determine licence status.
If the demerits are above 12 the licence is suspended, otherwise the demerit points are displayed.

*Challange3*
The program calculates net salary.
first we have a prompt that allows user input.
Second we have the body made up of five functions:
.Calculating gross salary
    Gross salary is the basic salary and benefits. the parseFloat is used to convert input strings to numeric float values.
.calculating tax deductions on gross salary
    Tax deductions are done as per the different tax brackets.
.Calculating nhif deduction on gross salary
    nhif deduction is 2.5% of an employees gross salary 
.Calculating nssf deductions on gross salary 
    nssf deduction is 6% on an employees gross salary
.Calculating net salary
    finally, this is calculated by subtracting the tax,nssf and nhif on gross salary.

Finally, we call the functions and also convert their string inputs to numeric values

