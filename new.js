var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// print if the number is Even and odd
nums.forEach(function (num) {
    if (num % 2 == 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
})
