
(function () {
module.exports.loanPayment = function (ir, p, ppy, ny) {
  var numer=ir*p/ppy, b=(ir/ppy)+1.0, e=-(ppy*ny), denom=1.0-Math.pow(b,e);
  return numer/denom;
}
module.exports.futureValue = function (p, ny, ror, compound) {
  var b = ror/compound + 1.0, e = compound*ny;
  return p * Math.pow(b,e);
}
module.exports.initialInvestment = function(ror, compound, ny, target) {
  var b=(1+ror/compound), e=compound*ny;
  return target / Math.pow(b,e);
}
module.exports.desiredAnnuity = function (wd, wdpy, ny, ror) {
  var t1=wd*wdpy, b=1+ror/wdpy, e=wdpy*ny, t2=1-(1/Math.pow(b,e));
  return t1-t2;
}
module.exports.maxWithdrawal = function (p, ror, wdpy, ny) {
  var t1=ror/wdpy, b=1+t1, e=wdpy*ny, t2=Math.pow(b,e)-1;
  return p*(t1/t2+t1);
}
module.exports.remainingLoanBalance = function (p, ir, ppy, amt, np) {
  var bal=p, rate = ir/ppy;
  for(var i=0;i<np;i++) {
    bal-=amt-(bal*rate);
  }
  return bal;
}

}());
