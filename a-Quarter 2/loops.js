// for (let counter=0; counter<10; counter++) {
//     console.log(counter)
// }

// for (let counter=10; counter>0; counter--) {
//     console.log(counter)
// }

// for (let counter=5; counter<=10; counter++) {
//     console.log(counter)
// }

// for (let counter=100; counter>=0; counter--) {
//     console.log(counter)
// }

///Looping with arrays
const animals=["Bear", "Sloth", "Lion"]
for (let i=0; i<animals.length; i++) {
    console.log(animals[i])
}

const alphabets=["a","b","c","d","e","f"]
for (let i=0; i<alphabets.length; i++) {
    console.log(alphabets[i])
}

const numbers=[1,2,3,4,5,6,7,8]
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]%2===0) {
        console.log(numbers[i])
    }
}

const numbers2=[1,5,-1,4,2,9,10]
for (let i=0; i<numbers2.length; i++) {
    if (numbers2[i]>4) {
        console.log(numbers2[i])
    }
}

const array=[6,19,20]
const array2=[19,91,2]
for (let i=0; i<array.length; i++) {
    for (let j=0; j<array2.length; j++) {
        if (array[i]===array2[j]) {
            console.log("Both loops have the number: " + array2[j])
        }
    }
}

//Nested loop
const arr=[[1,2,3],[4,5,6],[7,8,9]]
for (let i=0; i<arr.length; i++) { //Outer
    for (let j=0; j<arr[0].length; j++) { //Inner
        console.log(arr[i][j]) //Don't change the order
    }
}

const lst=[[11,22,33],[44,55,66],[77,88,99]]
for (let i=0; i<lst.length; i++) {
    for (let j=0; j<lst[0].length; j++) {
        if (lst[i][j]%6===0) {
            console.log(lst[i][j])
        }
    }
}

//Nested loop
let bobsfollowers=["Joe","Marta","Sam","Erin"]
let tinasfollowers=["Sam","Marta","Elle"]
let mutualfollowers=[]
for (let i=0; i<bobsfollowers.length; i++) {
    for (let j=0; j<tinasfollowers.length; j++) {
        if (bobsfollowers[i]===tinasfollowers[j]) {
            mutualfollowers.push(bobsfollowers[i])
        }
    }
}

for (let counter=1; counter<4; counter++) {
    console.log(counter)
}

let counter2=1
while (counter2<4) {
    console.log(counter2)
    counter2++
}

//For is good for when we know how many times we have to loop
//While is good when you don't know how many times you have to loop

const cards=['diamond','spade','heart','club']
let currentcard
let i=0

while (currentcard!=="spade") {
    currentcard=cards[i]
    console.log(currentcard)
    i++
}

for (let i=0; i<99; i++) {
    if (i>2) {
        break
    }
    console.log("Banana")
}
console.log("Orange you glad I broke out the loop")


const characters=['a','b','c','d','e','f','g']
for (let i=0; i<characters.length; i++) {
    if (characters[i]==="a"||"e"||"i"||"o"||"u") {
        break
    }
}

