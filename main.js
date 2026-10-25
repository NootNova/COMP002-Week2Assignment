
// [x] Record the first call before implementing your design; the first call returns undefined.

// [x] TODO: Check blank/whitespace before deliberate Number conversion.

// [x] TODO: Reject non-finite input, negative price, and negative/fractional quantity.

// [x] TODO: Preserve valid zero and decimal prices.

function calculateTicketTotal(priceText, quantityText, hasDiscount = false) {

  if (priceText.trim() === '') return 'Enter a price.';

  if(quantityText.trim() === '') return 'Enter a quantity.';

  const price = Number(priceText);

  const quantity = Number(quantityText);

  if (!Number.isFinite(price)) return 'Use a finite price.';

  if (!Number.isFinite(quantity)) return 'Use a finite quantity.';

  return price * quantity;
  
 
  // TODO: Use an if/else decision for your documented Boolean discount rule.

  // TODO: Return an understandable rejection message or a numeric successful total.

}

console.log(calculateTicketTotal('2.50', '3'));

console.log(calculateTicketTotal('0', '20'));

console.log(calculateTicketTotal('5.25', '15'));

console.log(calculateTicketTotal('35', '0'));


// TODO: Choose and run the boundary, error, next-valid, and flag tests in README.

// TODO: Record your own expected/actual results, explanations, repairs, and retests.
