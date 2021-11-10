const fs = require("fs");
console.log("ready");

let sentence = "";
let count = 1;

fs.readFile("src/lorem.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    sentence = data.toString();
    
    if (sentence === "") {
        count = 0;  
    }

    for (let index = 0; index < sentence.length; index++) {
        if (sentence[index].toLowerCase() === " ") {
            count++;
        }
    }

    console.log("- Words: " + count);
    console.log("- Your file: " + sentence);
  }
});
