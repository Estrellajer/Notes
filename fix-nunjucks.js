const fs = require('fs');
const path = require('path');

const lexerPath = path.join(__dirname, '../node_modules/nunjucks/src/lexer.js');

fs.readFile(lexerPath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/var VARIABLE_START = '\{\{';/g, "var VARIABLE_START = '\{\$';")
                     .replace(/var VARIABLE_END = '\}\}';/g, "var VARIABLE_END = '\$\}';");

  fs.writeFile(lexerPath, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
