const assert = require('assert');
var finance = require('./finance');

describe('Testing financial functions', function() {


  it('Testing Loan Payment Function', function() {
      assert.equal(parseFloat(finance.loanPayment(0.04, 73000.00, 12.00, 30.00)).toFixed(2), 348.51);
  });

  it('Testing Loan Payment Function', function() {
    assert.equal(parseFloat(finance.futureValue(1000,5,.06,7)).toFixed(2), 1348.13);
  });

  it('Testing Initial Investment Function',function() {
    assert.equal(parseFloat(finance.initialInvestment(0.13,12,4,10000)).toFixed(2), 5961.85);
  });

  it('Testing Desired Annuity Function',function() {
    assert.equal(parseFloat(finance.desiredAnnuity(160,52,1,0.06)).toFixed(2), 8319.94);
  });

  it('Testing Desired Annuity 2 Function',function() {
    assert.equal(parseFloat(finance.desiredAnnuity(100,12,1,0.06)).toFixed(2), 1199.94);
  });

  it('Testing Max Withdrawal Function',function() {
    assert.equal(parseFloat(finance.maxWithdrawal(3000, 0.06, 3*4, 1)).toFixed(2), 258.20);
  });

  it('Testing Remaining Loan Balance 1 Function',function() {
    assert.equal(parseFloat(finance.remainingLoanBalance(10000, .09, 12, 207.58, 30)).toFixed(2), 5558.19);
  });

  it('Testing Remaining Loan Balance 2 Function',function() {
    assert.equal(parseFloat(finance.remainingLoanBalance(93000, .06, 12, 560.58, 11*12)).toFixed(2), 75191.28);
  });
});
