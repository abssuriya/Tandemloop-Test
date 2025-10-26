let a = 10;
let num1;
let num2 = 1;
let result = "";

if (a % 2 === 0) {
    num1 = a - 1;
} else {
    num1 = a;
}
for (let i = 1; i <= num1; i++) {
    result = result + num2;
    if (i < num1) {
        result = result + ", ";
    }
    num2 = num2 + 2;
}

console.log("Input a =", a);
console.log("Output:", result);
