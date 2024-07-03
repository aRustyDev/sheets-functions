function AFTERTAX(salary, year, filing) {
  const tax_bracket = new Map([
    [
      "2425",  new Map([
        ["married_jointly", [
          [23200, .1],
          [94300, .12],
          [201050, .22],
          [383900, .24],
          [487450, .32],
          [731200, .35],
          [0, .37],
        ]],
        ["married_seperately", [
          [11600, .1],
          [47150, .12],
          [100525, .22],
          [191950, .24],
          [243725, .32],
          [365600, .35],
          [0, .37],
        ]],
        ["single", [
          [11600, .1],
          [47150, .12],
          [100525, .22],
          [191950, .24],
          [243725, .32],
          [609350, .35],
          [0, .37],
        ]],
        ["head_of_household", [
          [16550, .1],
          [63100, .12],
          [100500, .22],
          [191950, .24],
          [243700, .32],
          [609350, .35],
          [0, .37],
        ]],
      ])
    ],
  ])
  let taxes = 0;
  let bracket = 0;
  let gross = salary;
  while (gross > 0) {
    let tax_rate = tax_bracket.get(year).get(filing)[bracket][1];
    let bracket_cap = tax_bracket.get(year).get(filing)[bracket][0];
    let salary_delta = bracket_cap;
    if (bracket != 0) {
      salary_delta = bracket_cap - tax_bracket.get(year).get(filing)[bracket-1][0];
    }
    if (gross - salary_delta > 0) {
      gross -= salary_delta;
      taxes += salary_delta * tax_rate;
    } else {
      taxes += gross * tax_rate;
      gross = 0;
    }
    bracket++;
  }

  return (salary - taxes);
}
