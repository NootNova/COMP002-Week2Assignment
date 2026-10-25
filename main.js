
// [x] Record the first call before implementing your design; the first call returns undefined.

// [x] TODO: Check blank/whitespace before deliberate Number conversion.

// [x] TODO: Reject non-finite input, negative price, and negative/fractional quantity.

// [x] TODO: Preserve valid zero and decimal prices.

// [x] TODO: Use an if/else decision for your documented Boolean discount rule.

// [x] TODO: Return an understandable rejection message or a numeric successful total.

function calculateTicketTotal(priceText, quantityText, hasDiscount = true) {

  if (priceText.trim() === '') return 'Enter a price.';

  if(quantityText.trim() === '') return 'Enter a quantity.';

  const price = Number(priceText);

  const quantity = Number(quantityText);

  let discount = .15;

  if (!Number.isFinite(price)) return 'Use a finite price.';

  // Added an 'if' for price and quantity being less than 0 to reject negatives.

  if ((price) < 0) return 'Enter a valid price.';

  if (!Number.isFinite(quantity)) return 'Use a finite quantity.';

  if((quantity) < 0) return 'Enter a valid quantity.'

  if (hasDiscount === true) {

    console.log('Discount active.')

    let discountAmount = discount * price; 

    let discountPrice = price - discountAmount;

    return discountPrice * quantity;

  } else {
    
    console.log('Discount inactive');

    return price * quantity;

  }

}

console.log(calculateTicketTotal('2.50', '3'));

console.log(calculateTicketTotal('0', '20'));

console.log(calculateTicketTotal(' 5.25', '15 '));

console.log(calculateTicketTotal('35', '0'));

console.log(calculateTicketTotal('-5', '4'));

console.log(calculateTicketTotal('3', '5.25'));

console.log(calculateTicketTotal('bef', '20'));

console.log(calculateTicketTotal('5', '-6'));


// TODO: Choose and run the boundary, error, next-valid, and flag tests in README.

// TODO: Record your own expected/actual results, explanations, repairs, and retests.
