const loanAmountInput = document.querySelector(".loan-selector");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

const calculateBtn = document.querySelector(".calculate-btn");


let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput .valve);

let interest = interestRate / 12 / 100;

const calculateEMI = () => {
    let emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure) / 
    (Math.pow(1 + interest, loanTenure) -1));
    return emi;

};

const updateData = (emi) => {
    loanEMIValue.innerHTML = Math.round(emi);

    let totalAmount = Math.round(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;

    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestValve.innerHTML = totalInterestPayable;

};

const init = () => {
    let emi = calculateEMI();
    updateData(emi);
};

init();

const refreshInputValues = () => {
     loanAmount = parseFloat(loanAmountInput.value);
     interestRate = parseFloat(interestRateInput.value);
     loanTenure = parseFloat(loanTenureInput .valve);
    
     interest = interestRate / 12 / 100;
    
};

calculateBtn.addEventListener("click", () => {
    refreshInputValues();
    let emi = calculateEMI();
    updateData(emi);
});





























