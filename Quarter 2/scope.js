
//Arrow function with no parameter
const func=()=>{}

//Arrow function with one parameter
const func2=(name)=>{
    return "Hello " + name
}

const plantneedswater=(day)=>{
    if(day==="Wednesday") {
        return true
    } else {
        return false
    }
}

console.log(plantneedswater("Tuesday"))

const city=("Seoul")

function logcityskyline (){
    let skyscraper=("63 building")
}


// const logskycolor=()=>{
//     let color="blue"
//     console.log(color)
// }

// logskycolor()
// console.log(color) //reference error


let num=50

const lognum=()=>{
    num=100
    console.log(num)
}

lognum()
console.log(num)