// 1-task

function strCount(str, letter) {
  let num = 0;
  str.split("").forEach((ele) => {
    if (ele === letter) num++;
  });
  return num;
}

// 2-task

function invert(array) {
  return array.map((ele) => {
    return ele * -1;
  });
}

// 3-task

const stringToNumber = function (str) {
  return str * 1;
};

// 4-task

function repeats(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    delete arr[i];
    if (!arr.includes(a)) {
      sum = sum + a;
    } else {
      sum = sum - a;
    }
  }
  return sum;
}

// 5-task

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

// 6-task

const combineNames = (first, last) => {
  return `${first} ${last}`;
};

// 7-task
function yearDays(year) {
  return year % 4 === 0 ? `${year} has 366 days` : `${year} has 365 days`;
}

console.log(yearDays(100));
