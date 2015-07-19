var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var array = line.split(' ');
  return array.reduce(function(prev, curr) { if (!prev) { return curr; } if (curr.length > prev.length) { return curr; } return prev; });
}
