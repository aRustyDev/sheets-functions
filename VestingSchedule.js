// Base	RSU	Vest Over	Health	401k	PTO	PTOV	ESP	Edu	Bonus (Perf)	Bonus (SignOn)
function VESTSCHED(rsu, rates){
  // SUM of rates MUST equal 1 (ie 100% Vested)
  if (rates.reduce((partialSum, a) => partialSum + a, 0) != 1) {
    return Error
  } else {
    return rates.forEach(function (rsu, item){return rsu * item});
  };
}
