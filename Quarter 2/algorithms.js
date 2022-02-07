//Question 1
function calcadd(number1,number2){
    return (number1+number2)
}
calcadd(5,5)

//Question 2
function radius(radius){
    let pi=(3.14)
    area=(pi*radius**2)
    return area
}

let result1 = radius(2)
console.log(result1)

//Question 3
function lessthan(number3,number4) {
    if (number3+number4<100){
        return (true)
    }

    else {
        return (false)
    }
}
lessthan(40,40)

//Question 4
function leapyear(year) {
    if (year%4===0){
        return true
    }
    else {
        return false
    }
}
leapyear(2020)

//Question 5
function ten(number5,number6){
    if(number5+number6===10){
        return (true)
    }
    else if(number5||number6===10){
        return (true)
    }
    else{
        return (false)
    }
}
ten(10,5)