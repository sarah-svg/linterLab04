# linterLab04

Linter Lab
dependencies
express
dev dependencies
supertest
jest
nodemon
In this lab you'll be creating a web API that receives a block of code and responds with a linting status.

We are only going to check that all brackets match.

{ and }
[ and ]
( and )
Stack
A stack is a First In Last Out (FILO) data structure. When you:

push to a stack it puts an item on the top of the stack
pop from a stack it removes the top item on the stack


Linting Steps
strip away everything but the brackets
iterate through all the brackets
if we see an opening bracket push to the stack
if we see a closing bracket pop from the stack and compare
We're going to use a stack to check all brackets.

Example One
function add(a, b) {
  return a + b;
}
If we striped away everything except the brackets we would have: (){}. Whenever we come across an opening bracket we are going to push to a stack. Whenever we come across a closing bracket we are going to pop:

To begin our stack is empty [] (denoting a stack as an array where the last item is the top of the stack)
first we see a (. It's an opening bracket so we push to the stack ['(']
next we see a ). It's a closing bracket so we pop and compare. When we pop we get back a ( which is the opener to the closing bracket we are analyzing. []
next we see a {. It's an opening bracket so we push to the stack ['{']
finally we see a }. It's a closing bracket so we pop and compare. When we pop we get back a { which is the opener to the closing bracket we are analyzing. []
Example Two
function getFirstInArray(arr) {
  const first = arr[0];
  return first;
}
strip away everything except the brackets: (){[]}
we see a ( so we push ['(']
we see a ) so we pop and compare: ( and ) match. our stack is empty now []
we see a {. so we push ['{']
we see a [. so we push ['{', '[']
we see a ]. so we pop and compare: [ and ] match. our stack is now ['{']
we see a }. so we pop and compare: { and } match. our stack is now empty []
Example Three
function getSecondInArray(arr)) {
  const second = arr[1];
  return second;
}
strip away everything except the brackets ()){[]}
we see a ( so we push ['(']
we see a ) so we pop and compare: ( and ) match. our stack is empty now []
we see a ) so we pop and compare: undefined (because the stack is empty) and ) fail.
Example Four
function getSecondInArray(arr) {
  const second = arr[1;
  return second;
}
strip away everything except the brackets: (){[}
we see a ( so we push ['(']
we see a ) so we pop and compare: ( and ) match. our stack is empty now []
we see a {. so we push ['{']
we see a [. so we push ['{', '[']
we see a }. so we pop and compare: [ and } fail.
Endpoints
Post /lint:
Request:

{
  "code": "const add = (a, b) => { return a + b };"
}
Response:

{
  "success": true
}
or

{
  "error": "missing `{`"
}
Rubric
Stack implementation 5 points
Stack usage 5 points