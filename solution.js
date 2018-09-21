var fs = require('fs')
  , filename = process.argv[2];

if (!filename) {
  console.log("Usage: node solution.js <input-file>");
  process.exit(1);
}

let inputString = '';
let currentLine = 0;

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  inputString = data.split('\n');
  main();
});

function readLine() {
    return inputString[currentLine++];
}

function writeFile(content) {
  fs.writeFile(`${filename}.out`, content, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
}

function main() {
  let line = readLine()
  let output = ''
  while (line && line.trim().length > 0) {
    // TODO add your solution here
    const n = parseInt(line, 10);
    output += `${n+1}\n`
    line = readLine()
  }
  writeFile(output);
}
