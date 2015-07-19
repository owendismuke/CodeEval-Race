var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

function solution(){
  var result = 0;
  fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
    if (line != "") {
      result += Number(line);
    }
  });
  console.log(result);
}

solution();

