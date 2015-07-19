var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){

  var array = line.split('');
  if (array.length <= 55) { return line; }
  array.length = 40;
  if (array[39] === ' ') { array.length = 39; }
  return array.join('') + "... <Read More>";
}
