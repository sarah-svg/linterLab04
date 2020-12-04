// const match = (string) => {
//     const reg = /(\(|\)|\[|\]|\{|\})/g;
//     const newReg = this.item
//         .split("")
//         .filter((letter) => letter.match(reg))
//         .join("");
//         return newReg;
   
// }
const match = (string) => {
  return string.split('')
    .filter(string => string === '{' || string === '}' || string === '(' || string === ')' || string === '[' || string === ']');
};

const linter = (string) => {
  str = match(string);
  console.log(str);
  const lint = [];
  const matched = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      lint.push(str[i]);
    } else {
      const prevMatch = lint.pop();
      if(str[i] != matched[prevMatch]) {
        return false;
      }
    }
  }
  if(lint.length != 0) {
    return false;
  }
  return true;

};
let str = '{}}hey';


module.exports = 
{
  linter
};
