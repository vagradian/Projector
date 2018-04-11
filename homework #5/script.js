function flip(string) {
  return string.split("").reverse().join("");
}

console.log(flip("hello"));



function compare(item) {
  if (item >= 2) {
    return true;
  }
}

function filter(array, func) {
  var newArray = [];

  for (i = 0; i < array.length; i++) {
    if (compare(array[i]) === true) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(filter([1, 2, 3], compare));



function encrypt(string, shift) {
  var array = [];
  var newString = "";

  for (i = 0; i < string.length; i++) {
    var encrypt = (string.charCodeAt(i) + shift);
    var newLetter = (String.fromCharCode(encrypt));
    array.push(newLetter);
  }

  newString = (array.join(""));
  return newString;
}

console.log(encrypt("hello", 0));
console.log(encrypt("hello", 3));