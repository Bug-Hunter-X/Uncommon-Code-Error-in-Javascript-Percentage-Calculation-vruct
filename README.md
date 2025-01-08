# Uncommon Code Error in Javascript Percentage Calculation
This repository demonstrates a potential bug in a Javascript function designed to calculate percentages. The function does not handle cases where the numerator exceeds the denominator or when the denominator is zero.  The bug is addressed in the solution provided in `bugSolution.js`.

## Bug Description
The `getPercentage` function, as implemented in `bug.js`, has two flaws: 
1. **Division by Zero:** If the denominator is 0, the function throws an error instead of returning a meaningful value (like 0 or NaN).
2. **Values greater than 100%:** If the numerator is larger than the denominator, the function returns a value above 100%, which may not be handled properly by calling functions.

## Solution
The `bugSolution.js` file contains a corrected version of `getPercentage` function that handles edge cases gracefully.