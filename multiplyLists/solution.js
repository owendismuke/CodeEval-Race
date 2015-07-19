var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var numArrays = line.split('|');
  console.log(numArrays);
  numArrays[0] = numArrays[0].split(' ');
  numArrays[1] = numArrays[1].split(' ');
  return numArrays[0].map(function(val, index){ return Number(val.trim()) * Number(numArrays[1][index].trim()); });
}
