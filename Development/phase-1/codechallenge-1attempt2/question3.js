function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Pay
    const grossPay = basicSalary + benefits;

    // Calculate Deductions
    let payee = 0;
    let nssfDeductions = 0;

    // Calculate PAYEE (Tax)
    if (grossPay <= 5999) {
        payee = 150;
    } else if (grossPay <= 7999) {
        payee = 300;
    } else if (grossPay <= 11999) {
        payee = 400;
    } else if (grossPay <= 14999) {
        payee = 500;
    } else if (grossPay <= 19999) {
        payee = 600;
    } else if (grossPay <= 24999) {
        payee = 750;
    } else if (grossPay <= 29999) {
        payee = 850;
    } else if (grossPay <= 34999) {
        payee = 900;
    } else if (grossPay <= 39999) {
        payee = 950;
    } else if (grossPay <= 44999) {
        payee = 1000;
    } else if (grossPay <= 49999) {
        payee = 1100;
    } else if (grossPay <= 59999) {
        payee = 1200;
    } else if (grossPay <= 69999) {
        payee = 1300;
    } else if (grossPay <= 79999) {
        payee = 1400;
    } else if (grossPay <= 89999) {
        payee = 1500;
    } else if (grossPay <= 99999) {
        payee = 1600;
    } else {
        payee = 1700;
    }

    // Calculate NHIF Deductions (Assuming a flat rate of 500)
    const nhifDeductions = 500;

    // Calculate NSSF Deductions
    if (grossPay <= 7000) {
        nssfDeductions = grossPay * 0.06;
    } else if (grossPay <= 36000) {
        nssfDeductions = grossPay * 0.06;
    }

    // Calculate Net Salary
    const deductions = payee + nhifDeductions + nssfDeductions;
    const netSalary = grossPay - deductions;

    return {
        grossPay,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Invalid input. Please enter numeric values.");
} else {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Pay: Ksh " + salaryDetails.grossPay);
    console.log("PAYEE (Tax): Ksh " + salaryDetails.payee);
    console.log("NHIF Deductions: Ksh " + salaryDetails.nhifDeductions);
    console.log("NSSF Deductions: Ksh " + salaryDetails.nssfDeductions);
    console.log("Net Salary: Ksh " + salaryDetails.netSalary);
}

   
