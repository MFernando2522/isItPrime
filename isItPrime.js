// Function to check if a number is prime
function checkPrime(num) {
    let isPrime = true;

    // Check if number is equal to 1
    if (num === 1) {
        return "1 is neither prime nor composite number.";
    }

    // Check if number is greater than 1
    else if (num > 1) {
        // Loop through numbers from 2 to num/2
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // Exit the loop early if a divisor is found
            }
        }
        // Return result based on whether the number is prime or not
        if (isPrime) {
            return `${num} is a prime number.`;
        } else {
            return `${num} is not a prime number.`;
        }
    }

    // If number is less than 1, return that it's not a prime number
    else {
        return "The number is not a prime number.";
    }
}

// Add event listener to handle form submission
document.getElementById('primeForm').addEventListener('submit', function(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Get the number entered by the user
    let num = document.getElementById('number').value;

    // Convert the value to an integer
    num = parseInt(num);

    // Get the result from the checkPrime function
    let result = checkPrime(num);

    // Display the result inside the 'result' div
    document.getElementById('result').innerText = result;
});
