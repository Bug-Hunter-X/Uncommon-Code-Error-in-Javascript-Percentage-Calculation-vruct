function getPercentage(numerator, denominator) {
  if (denominator === 0) {
    return 0; // Handle division by zero
  }
  return (numerator / denominator) * 100;
}

//Example
let percentage = getPercentage(5, 0); //should be 0
console.log(percentage); // Output: 0

percentage = getPercentage(5, 10); //should be 50
console.log(percentage); //Output: 50

percentage = getPercentage(0, 10); //should be 0
console.log(percentage); //Output: 0

percentage = getPercentage(10,0); //should be 0
console.log(percentage); //Output: Infinity