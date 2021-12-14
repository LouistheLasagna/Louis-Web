let names = ["Ellie", "Amy", "Alex", "Tom"]

const hobbies=["Gaming", "Playing sports", "Sleeping"]
console.log(hobbies)
console.log(hobbies[0])
console.log(hobbies[2])

hobbies[1]="Talking with friends"
console.log(hobbies[1])
console.log(hobbies)

// let condiments=["Ketchup", "Mustard", "Soy sauce", "Sriracha"]

// const utensils=["Fork", "Knife", "Chopsticks", "Spork"]

// condiments[0]="Mayo" //It is possible because condiments is let

// condiments=["Mayo"] //It is possible because condiments is let

// condiments[0]="Teaspoon" //It is impossible because utensils is const

// utensils=["Teaspoon"] //It is impossible because utensils is const


console.log(hobbies[hobbies.length-1])

const itemtracker=["item0","item1","item2"]
itemtracker.push("item3","item4")
console.log(itemtracker)

let subjects=[]
subjects.push("Web development", "Algebra", "Python")
console.log(subjects)

subjects[0]="History"
console.log(subjects)

const itemtracker2=["item0","item1","item2"]
const removed=itemtracker2.pop()
console.log(itemtracker2)
console.log(removed)

const deleted=subjects.pop()
console.log(subjects)
console.log(deleted)

const deleted2=subjects.shift()
console.log(deleted2)
console.log(subjects)

const newlength=subjects.unshift("Chemistry", "Biology", "Writing")
console.log(newlength)
console.log(subjects)


const randomnums=["A","B","C","D","E"]
const newarray=randomnums.slice(1,3)
console.log(newarray)

const nums=[1,2,3,4,5,6,7,8,9,10]
const numsarray=nums.slice(4,10)
console.log(numsarray)
const numsarray2=nums.slice(9)
console.log(numsarray2)
const numsarray3=nums.slice(0,2)
console.log(numsarray3)

const grocerylist=["a","a","orange juice", "bananas"]
console.log(grocerylist.indexOf("a"))

let arr=["a","b","a","c","a","d"]
const indexofa=arr.indexOf("a")
const indexofz=arr.indexOf("z")

if (arr.indexOf("z")!==-1){
    arr[indexofz]="Found"
}
console.log(arr)

const flowers=["peony","daffodil","marigold"]

function addflower(arr) {
    arr.push("lily")
}

addflower(flowers)

console.log(flowers)

const concept=["arrays","can","be","mutated"]
function changearr(arr){
    const indexofle=arr.indexOf("mutated")
    arr[indexofle]="MUTATED"
}
changearr(concept)
console.log(concept)

// function changearr(arr){
//     arr[arr.length-1]="MUTATED"
//     return arr
// }

let numberclusters=[[1,2],[3,4],[5,6]]

console.log(numberclusters[0][0])

numberclusters[2][1] = -6

numberclusters[2].length

console.log(numberclusters)