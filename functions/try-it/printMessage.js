let message = "Hello, World!";

function printMessage() {
   console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);