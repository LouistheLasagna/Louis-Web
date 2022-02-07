function greetworld() {
    console.log("Hello World")
}

function getreminder() {
    console.log("Water the plants")
}

function saythanks() {
    console.log("Thanks")
}

saythanks()
saythanks()

function calculatearea(width,height){
    console.log(width*height)
}

calculatearea(10,6)

function calculatevolume(length,height,width) {
    console.log(length*width*height)
}

calculatevolume(5,5,5)


function greeting (name="stranger") {
    console.log(`Hello, ${name}`)
}

greeting("Nick")
greeting()


function makeshoppinglist(item1="milk", item2="bread", item3="eggs") {
    console.log(`item1: ${item1}`)
    console.log(`item2: ${item2}`)
    console.log(`item3: ${item3}`)
}

makeshoppinglist()
makeshoppinglist("avocado")
makeshoppinglist("chocolate", "banana")
makeshoppinglist(undefined,undefined,"coffee")


function monitorcount(rows,columns) {
    return rows*columns  
}

let numofmonitors = monitorcount(1,2)
console.log(numofmonitors)