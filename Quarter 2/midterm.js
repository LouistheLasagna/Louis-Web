//Question 1
//Can also use console.log instead of return
function checkstring(x){
    if (x==="") {
        return "String is empty" //This returns if the string is empty
    } else {
        return "String is not empty" //This return sif it is not empty
    }
}

//Question 2
function validation(n, lower, upper) {
    if (typeof n!=="number") {
        return false
    }
    if (n>=lower && n<upper){
        return true
    } else {
        return false
    }
}

//Question 3
//Use built in methods
//pop, shife, push, slice, unshift, length
function swap(arr) {
    if (arr[0]>arr[arr.length-1]){
        firstelement=arr.shift() //Removes the first one
        lastelement=arr.pop() //Removes the last one
        arr.push(firstelement) //the first element is saved, so it can be pushed to the end
        arr.unshift(lastelement) //same for this one but it adds it to the front
    }
    return arr
}