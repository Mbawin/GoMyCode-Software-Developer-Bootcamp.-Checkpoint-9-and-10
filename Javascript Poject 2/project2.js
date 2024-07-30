// a function that reverses a string
function reverseString(str) {
    return str.reverse()
}


// a function that counts the number of characters in a string
function countCharacters(str) {
    return str.length;
}


// a function that capitalizes the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
    return sentence.replace(/\b\w+/g, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
    });
}


// a function to find the maximum value in an array of numbers
function findMax(arr) {
    if (arr.length === 0) {
    return undefined; 
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    }
    return max;
}


// a function to find the minimum value in an array of numbers
function findMin(arr) {
    if (arr.length === 0) {
    return undefined;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    }
    return min;
}


// a function that calculates the sum of all elements in an array
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
}


// a function that filters out elements from an array based on a given condition
function filterArray(arr, condition) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
        filteredArray.push(arr[i]);
    }
    }
    return filteredArray;
}


// a function to calculate the factorial of a given number
function factorial(num) {
    if (num < 0) {
    return "Error: Factorial is not defined for negative numbers";
    } else if (num === 0 || num === 1) {
    return 1;
    } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
    }
}


// a function to check if a number is prime or not
function isPrime(num) {
    if (num <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
    if (num <= 3) {
      return true; // 2 and 3 are prime
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false; // Divisibility by 2 or 3
    }
    let i = 5;
    while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
        return false;
    }
    i += 6;
    }
    return true;
}


// a function to generate the Fibonacci sequence up to a given number of terms
function fibonacci(n) {
    if (n <= 0) {
      return []; // Handle invalid input
    } else if (n === 1) {
    return [0];
    } else if (n === 2) {
    return [0, 1];
    } else {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
    }
}


