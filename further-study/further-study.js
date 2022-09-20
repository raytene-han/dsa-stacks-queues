const Queue = require("../queue");
const Stack = require("../stack");

function stringReversal(str) {

  let word = "";
  let reversedWord = new Stack()

    for (letter of str){
      reversedWord.push(letter)
    }

  while ( reversedWord.size !== 0){
     word += reversedWord.pop();
  }
  return word;
}

function balancedBrackets(str) {

  let openBrackets = new Set(['(', '{', '[']);
  let closeBrackets = new Set([')', '}', ']']);

  let brackets = {
    ']': '[',
    ')': '(',
    '}': '{'
  }

  let brStack = new Stack();

  for (let letter of str){
    if (openBrackets.has(letter)) {
        brStack.push(letter);
    } else if (closeBrackets.has(letter)){
      if ( brStack.peek() === brackets[letter]) {
          brStack.pop();
      } else { brStack.push(letter)}
    }

  }
  return brStack.size === 0;
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
