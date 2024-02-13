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

console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
