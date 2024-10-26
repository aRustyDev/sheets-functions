function BONUS(period, base, signon, annual) {
  let arr = [];
  let sob = signon;
  for (let i = 0; i < period; i++) {
    arr.push(sob + (base * annual));
    sob = 0;
  }
  return arr;
}
