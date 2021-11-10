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
    newLine(sentence);
  }
});

function newLine (content) {
    let arrayContent = content.split(" ");
    let finalContent = "";
    for (let index = 0; index < arrayContent.length; index++) {
        finalContent += arrayContent[index] + '\n';
    }
    console.log("- Contents of the final file:");
    console.log(finalContent);
    newFile(finalContent);
}

function newFile(data) {
  fs.writeFile("src/new.txt", data, (err) => {
    if (err) {
      console.log("- Error: " + err);
    }
    console.log("- Status: file created successfully! (src/new.txt)");
  });
}
