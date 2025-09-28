function convertToRoman(num) {
  const values = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let [roman, value] of values) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}


let input = prompt("Enter a number to convert to Roman:");
input = parseInt(input);

if (isNaN(input) || input <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  alert(`Roman numeral: ${convertToRoman(input)}`); 
}

// do not edit below this line
// (remove this line if you are not running in Node.js environment)
module.exports = convertToRoman;
