
var finance = require('./finance');

console.log(finance.loanPayment(0.04, 73000.00, 12.00, 30.00));
console.log(finance.futureValue(1000,5,.06,7));
console.log(finance.initialInvestment(0.13,12,4,10000));
console.log(finance.desiredAnnuity(160,52,1,0.06));
console.log(finance.desiredAnnuity(100,12,1,0.06));
console.log(finance.maxWithdrawal(3000, 0.06, 3*4, 1));
console.log(finance.remainingLoanBalance(10000, .09, 12, 207.58, 30));
console.log(finance.remainingLoanBalance(93000, .06, 12, 560.58, 11*12));
