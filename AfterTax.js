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
    [
      "2324",  new Map([
        ["married_jointly", [
          [22000, .1],
          [89450, .12],
          [190750, .22],
          [364200, .24],
          [462500, .32],
          [693750, .35],
          [0, .37],
        ]],
        ["married_seperately", [
          [11000, .1],
          [44725, .12],
          [95375, .22],
          [182100, .24],
          [231250, .32],
          [346875, .35],
          [0, .37],
        ]],
        ["single", [
          [11000, .1],
          [44725, .12],
          [95375, .22],
          [182100, .24],
          [231250, .32],
          [578125, .35],
          [0, .37],
        ]],
        ["head_of_household", [
          [15700, .1],
          [59850, .12],
          [95350, .22],
          [182100, .24],
          [231250, .32],
          [578100, .35],
          [0, .37],
        ]],
      ])
    ],
  ])
  // Set variables
  let taxes = 0;
  let bracket = 0;
  let gross = salary; // So SALARY is not modified

  // Calculate taxes
  while (gross > 0) {
    // Simplify Variable Names; just for readability
    let tax_rate = tax_bracket.get(year).get(filing)[bracket][1];
    let bracket_cap = tax_bracket.get(year).get(filing)[bracket][0];
    let salary_delta = bracket_cap; // salary_delta defaults to bracket_cap

    if (bracket != 0) {
      if (bracket_cap == 0) {
        // If the salary was in the highest bracket, use whatever is above the previous bracket cap
        salary_delta = gross;
      } else {
        // Otherwise get the difference between the current bracket and the previous
        salary_delta = bracket_cap - tax_bracket.get(year).get(filing)[bracket-1][0];
      }
    }
    // Calculate taxes owed
    if (gross - salary_delta > 0) {
      // If the salary_delta is less than the gross remaining
      gross -= salary_delta;
      taxes += salary_delta * tax_rate;
    } else {
      // If the gross_remaining is less than the salary_delta
      taxes += gross * tax_rate;
      gross = 0;
    }
    bracket++;
  }

  return (salary - taxes);
}
