for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        console.log("Chicken"); 
    // Divide currentNumber by 7, and check if the remainder is 0
    } else if (currentNumber % 7 ===0) {
        console.log("Monkey");
    // If the currentNumber is not perfectly divisible by 5 or 7, just print currentNumber
    } else {
        console.log(currentNumber);
    }
}