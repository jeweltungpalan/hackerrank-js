//Problem URL: https://www.hackerrank.com/challenges/new-year-chaos/problem

'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribes = 0;
    let current, diff, status, next, nextAfter;
    
    for(let i = q.length - 1; i >= 0; i--){
        current = q[i];
        diff = current - (i + 1);
        if(diff > 2){
            status = "Too chaotic";
            break;
        }
        
        for(let j = current - 2; j < i; j++){
            if(q[j] > current){
                bribes++;
            }
        }
    }
    
    if(status == "Too chaotic"){
        console.log(status);
    }
    else{
        console.log(bribes);
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}