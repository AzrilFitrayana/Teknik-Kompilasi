const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function analyzeCode(inputProgram) {
  const inputProgramToken = inputProgram.match(/[\w]+|[^\w\s]/g);

  console.log(inputProgramToken);

  const RE_Keywords = /\b(auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static)\b/;
  let keyw = 0;

  const RE_Operators = /\+\+|--|[-=]|\*|\/|%|<=|>=/;
  let op = 0;

  const RE_Numerals = /^[0-9]+$/;
  let num = 0;

  const RE_Special_Characters = /[\[\]@&~!#$^|{}:;<>?,.'()""]/;
  let sc = 0;

  const RE_Identifier = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
  let id = 0;

  inputProgramToken.forEach((token) => {
    if (token.match(RE_Keywords)) {
      console.log(`${token} ----> Keyword`);
      keyw += 1;
    } else if (token.match(RE_Operators)) {
      console.log(`${token} ----> Operator`);
      op += 1;
    } else if (token.match(RE_Numerals)) {
      console.log(`${token} ----> Numeral`);
      num += 1;
    } else if (token.match(RE_Special_Characters)) {
      console.log(`${token} ----> Special Character/Symbol`);
      sc += 1;
    } else if (token.match(RE_Identifier)) {
      console.log(`${token} ----> Identifier`);
      id += 1;
    } else {
      console.log('Unknown value');
    }
  });

  console.log(' ');
  console.log('Token                 jumlah');
  console.log('Keyword               ', keyw);
  console.log('Operator              ', op);
  console.log('Numerals              ', num);
  console.log('Special Character     ', sc);
  console.log('Identifier            ', id);
}

rl.question('Enter your code: ', (inputProgram) => {
  analyzeCode(inputProgram);
  rl.close();
});