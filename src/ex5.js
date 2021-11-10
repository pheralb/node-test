console.log("ready");

let count = 0;
const sentence = "aAa";


for (let index = 0; index < sentence.length; index++) {
    if (sentence[index].toLowerCase() === "a") {
        count++;
    }
}

console.log("Result: " + count);