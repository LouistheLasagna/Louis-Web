let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];

//Question 1 is downloading the file

const question2=secretMessage.pop()
console.log(question2)

console.log(secretMessage.length)

const question4=secretMessage.push("to", "Program")
console.log(question4)

const question5=secretMessage[7]=("right")
console.log(question5)

const question6=secretMessage.shift()
console.log(question6)

const question7=secretMessage.unshift("Programming","or","Coding")
console.log(question7)

const question8=secretMessage.slice(24)
console.log(question8)

const question9=question8[2].length
console.log(question9)

if (question8[2].length>2) {
  question8[2]="UPDATED"
}
else {
  question8.pop()
}

console.log(secretMessage)