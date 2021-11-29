let racenumber=(Math.floor(Math.random()*1000))


let timeregistered=true

let runnerage=19

if (runnerage>18, timeregistered===true){
    racenumber+=1000
}

if (runnerage>18 && timeregistered===true){
    console.log("You will race at 9:30 AM, your race number is", racenumber)
} else if (runnerage>18 && timeregistered===false) {
    console.log("You will race at 11:00 AM, your race number is", racenumber)
} else if (runnerage<18 && timeregistered===true||false) {
    console.log("You will race at 12:30 PM, your race number is", racenumber)
} else (runnerage===18); { //Sorry, I don't know why this always shows even if the runnerage is over or under 18
    console.log("Please see the reigsteration desk.")
}