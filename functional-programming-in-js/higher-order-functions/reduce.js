let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

let totalAmount = orders.reduce(function (sum, order) {
  return sum + order.amount;
}, 0);

console.log(totalAmount);
/**
 * Out: 1075
 */
