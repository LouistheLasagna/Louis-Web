const kelvin=("0") //const means that the value will stay constant and kelvin is 293

let celsius=(kelvin-273) //This means that celsius is 273 degrees less than kelvin

let fahrenheit=(celsius*(9/5)+32) //This is showing the equation of fahrenheit and how to calculate it with celsius

fahrenheit=Math.floor(fahrenheit) //This code states that fahrenheit should be round down to the nearest whole number

console.log("The temperature is "+fahrenheit+" degrees fahrenheit.")

console.log("Zero degrees kelvin is "+fahrenheit+" degrees fahrenheit.")