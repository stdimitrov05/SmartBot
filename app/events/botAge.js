module.exports.botAge = function () {
  /* Starting date */
  const curectY = 2022;
  const curectM = 1;
  const curectD = 5;

  /* Now time */
  let data = new Date();
  let y = data.getFullYear();
  let m = data.getMonth() + 1;
  let d = data.getDate();

  return `${d - curectD} days ${m - curectM} months ${y - curectY} years`;
};
