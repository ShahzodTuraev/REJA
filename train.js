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

console.log(stringToNumber("-24"));
