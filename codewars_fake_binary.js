/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

const fakeBin = (x) => {
  let str = '';
  for(let i = 0; i < x.length; i++) {
    parseInt(x[i]) < 5 ? str += '0' : str += '1';
  }

  return str;
}