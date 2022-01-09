let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1); // Recursive
};
countDownFrom(10); // Out: 10,9,8 ... 1
