const  Stack  = require('./Stack.js');

const match = (string) => {
  return string.split('')
    .filter(string => string === '{' || string === '}' || string === '(' || string === ')' || string === '[' || string === ']');
};

const linter = (array) => {  
  const stack = new Stack();
  arr = match(array);
  console.log(arr);

  const matched = {
    '(': ')',
    '[': ']',
    '{': '}',
    '}': '{',
    ']': '[',
    ')': '('
  };
  for(let i = 0; i < arr.length; i++) {
    const peek = stack.peek();
    if(arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
      stack.push(arr[i]); 
      //    if{ 
      //        matched[i]
      //    } 

    } else {
      const prevMatch = stack.pop();
      if(arr[i] !== matched[prevMatch]) {
          console.log('hi', arr[i], prevMatch); 
          
        return false;
      }
    }
  }
 
  if(stack.peek()) {
      
    return false;
  }
  return true;

};
// let str = 'hey';

let arr = 'heyy{}{}';
const checkTheLinter = linter(arr);
console.log(checkTheLinter);

// const checkThis = match('[function = () >] ');
// console.log(checkThis);

module.exports = 
{
  linter
};
