console.log("ready");

let count = 1;
const sentence = "Hello World!";

if (sentence === ""){
    count = 0;
}

for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === " ") {
        count++;
    }
}

console.log("Result: " + count);
