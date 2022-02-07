console.log("Hello");
console.log(13); //Age
console.log(0); //Number of siblings
//Testing comment

/*Multi
line
comment */

console.log(true); //Boolean
console.log(false); //Boolean

console.log('Javascript') //String

console.log(2011); //Number

console.log("Hello I am Louis") //String sentence

console.log(1.5); //Number wtih decimal

console.log(6+3); //Adding
console.log(6-3); //Subtracting
console.log(6*3); //Multiplying
console.log(6/3); //Dividing
console.log(6%3); //Remainder

console.log(13+3.5);
console.log(2021-1969);
console.log(0.2708*100);
console.log(65/240);

console.log("Hello "+"World"); //Concatenate strings
console.log("Hello "+"Students");

console.log('Hello'.length);
console.log("Hello".toUpperCase());

console.log("Hello".startsWith("H"));
console.log("Hello".startsWith("He"));
console.log("Hello".startsWith("he")); //Case sensitive

console.log("apple".toUpperCase());
console.log(" Hello World".startsWith(" "));

console.log(Math.random()*50);
console.log(Math.floor(1.4));
console.log(Math.floor(Math.random()*50));

console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log((Math.random()*10)+1);

console.log(Math.ceil(1.6)*2);
console.log(Math.ceil(1.6*2));

let x = true
console.log(x)
x=false
console.log(x)

const y=true
console.log(y)

let w = 4
w+=1
console.log(w) //Easier than w=w+1

let levelup=10
levelup+=5
levelup-=100
levelup*=11
console.log(levelup%2)

let a=10;
a++;
console.log(a)

let gaineddollar=3
let lostdollar=50

gaineddollar++
lostdollar--

console.log(gaineddollar-lostdollar)

let favoriteanimal="panda"
console.log("My favorite animal: "+favoriteanimal)

const mypet='armadillo'
console.log(`I own a pet ${mypet}.`) //important

let myname="Louis"
let mycity="LA"


const sentence=(`My name is ${myname}. My favorite city is ${mycity}.`)
console.log(sentence)

const unknown1='foo'
console.log(typeof unknown1)

const unknown2=10
console.log(typeof unknown2)

const unknown3=true
console.log(typeof unknown3)

if (true) {
    console.log("This wil print")
}

if (false) {
    console.log("true")
} else {
    console.log("false")
}

let hungerlevel=7

if (hungerlevel>7){
    console.log("Time to eat")
} else {
    console.log("We can eat later")
}


let mood="sleepy"
let tirednesslevel=6

if (mood==="sleepy"&&tirednesslevel>8){
    console.log("Time to sleep")
} else {
    console.log("Not bed time yet")
}


let grjeogrea="" //empty string / falsy

let yijrhijra=null //falsy
console.log(yijrhijra)

let name
console.log(name) //const always has to have value

let wordcount=1
console.log(wordcount-=1)

let username=''
let defaultname=username||'stranger'
console.log(defaultname)

let tool=""
let writingutensil=tool||'pen'
console.log(`The ${writingutensil} is mightier than the sword`)

let isNightTime=true

if(isNightTime) {
    console.log('Turn on the lights!')
} else {
    console.log('Turn off the lights!')
}

isNightTime ? console.log('Turn on the lights!'): console.log('Turn off the lights!')

let iscorrect=true

//Refactor
if(iscorrect){
    console.log("Correct")
} else {
    console.log("Incorrect")
}

iscorrect ? console.log("Correct"): console.log("Incorrect") //Ternary operator

//Else if
let stoplight="Yellow"

if (stoplight === "Red"){
    console.log("Stop")
} else if (stoplight==="Yellow"){
    console.log("Slow down")
} else if (stoplight==="Green"){
    console.log("Go")
} else{
    console.log("Caution, unknown")
}

let season="Summer"

if (season === "Spring"){
    console.log("Becoming warm")
} else if (season==="Summer"){
    console.log("Its hot")
} else if (season==="Fall"){
    console.log("Its getting cool")
} else {
    console.log("Its cold")
}

let groceryitem="Papaya"

switch(groceryitem){
    case "Tomato":
        console.log("Tomatoes are $0.49")
        break
    case "Lime":
        console.log("Limes are $1.49")
        break
    case "Papaya":
        console.log("Papayas are $1.29")
        break
    default:
        console.log("Invalid item")
        break
}

let GPA="A"
let score
switch(GPA){
    case "A":
        score=100
        break
    case "B":
        score=90
        break
    case "C":
        score=80
        break
    default:
        score=60
        break
}
console.log(score)

