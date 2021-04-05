//Problem URL: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
  let currentLine = 1;
  let phoneBook = {};
  input.split("\n").forEach((line) => {
    if (currentLine == 1) {
      numEntries = parseInt(line);
    } else if (currentLine <= numEntries + 1) {
      entry = line.split(" ");
      phoneBook[entry[0]] = entry[1];
    } else {
      if (phoneBook[line] !== undefined) {
        console.log(line + "=" + phoneBook[line]);
      } else {
        console.log("Not found");
      }
    }
    currentLine++;
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
