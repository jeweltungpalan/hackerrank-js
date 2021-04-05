//Problem URL: https://www.hackerrank.com/challenges/repeated-string/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let totalPerString = (s.match(/a/g) || []).length;
    if(totalPerString == 0){
        return 0;
    }
    else{
        let totalFromRepeated=Math.floor(n / s.length) * totalPerString;
        let totalFromBalance=(s.substring(0, n % s.length).match(/a/g) || []).length;
    
        return totalFromRepeated + totalFromBalance;
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}