class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }
    calculate() {
        if (this.operation === "add") {
            return this.a + this.b;
        } else if (this.operation === "sub") {
            return this.a - this.b;
        } else if (this.operation === "mul") {
            return this.a * this.b;
        } else if (this.operation === "div") {
            if (this.b === 0) {
                return "Error";
            }
            return this.a / this.b;
        } else {
            return "Invalid.";
        }
    }
}
let a = 10;
let b = 5;
let operation = "sub";

let calc = new Calculator(a, b,operation);
console.log("First Number:", a);
console.log("Second Number:", b);
console.log("Operation:", operation);
console.log("Result:", calc.calculate());
