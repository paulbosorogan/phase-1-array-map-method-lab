const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function getStr(newTutorials) {
  return newTutorials.split(" ")
  .map(item => item.charAt(0).toUpperCase().concat(item.substring(1)))
  .join(' ')
}
//console.log(getStr(tutorials[0]))

const titleCased = () => {
  return tutorials.map((sentence) => {return getStr(sentence)})
}
