let fs = require('fs');
let file = 'site/index.html';

let imageFileNames = fs.readdirSync('site/images');
let indexFile = fs.readFileSync(file, 'utf-8').split('\n');
// console.log(indexFile)

// This code is just here to demonstrate how fs.readdirSync works

console.log('sites/images contains the following files:');
let fileName;
let fileNames = [];

for (let i = 0; i < imageFileNames.length; i++) {
  fileName = `      <img src="images/${imageFileNames[i]}" alt="Image from gallery" height="400" width="400">`;
  fileNames.push(fileName);
}

let counter = 0;
for (let i = 0; i < indexFile.length; i++) {
  if (indexFile[i].includes('<img')) {
    indexFile[i] = fileNames[counter];
    counter = counter + 1;
  }
}

// console.log(indexFile);
// }
indexFile = indexFile.join('\n');
fs.writeFileSync(file, indexFile, 'utf8');

// console.log(`${i + 1}. ${fileName}`);
