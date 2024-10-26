function EMPLOYEESTOCKPROGRAMVALUE(purchasePower, ticker, discount, lookback){
  let lastyear = 0;
  if (lookback != nil) {
    // get lowest price w/in LookBack of 1y
    lastyear = ticker * (1-discount);
  } else {
    lastyear = ticker * (1-discount);
  }
  let now = ticker;
  let numBought = floor(purchasePower / lastyear);
  let boughtAt = numBought * lastyear;
  let currentValue = numBought * now;
  return currentValue - boughtAt;
}
