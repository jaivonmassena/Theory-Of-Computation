const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
console.log(`${filename}`)
// Read file
fs.readFile(filename, 'utf8', (err, data) =>{
    if (err) throw err;

    const regStr = /(http|https)?:\/{2}[\w.\/-]+/g
    const match = data.match(regStr);
    console.log( match);
})
// Set up regex

// Find matches

// Print all matches
