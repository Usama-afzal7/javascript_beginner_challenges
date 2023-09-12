// Challenge 1 

function sum (a, b){
    return (a + b)
}

console.log(sum(2, 5))

// Challenge 2

function hoursToSecond(num){
    minutes = num * 60;
    seconds = minutes * 60;
    return seconds
}

console.log(hoursToSecond(2))

// Challenge 3
function calcPerimeter(width, height){
    return (width + height) * 2;
}

console.log((calcPerimeter(2,9)))

// Challenge 4

function calcTriangleArea(base, height){
    return 0.5 * base * height
}

console.log(calcTriangleArea(10,10))


// Challenge 5

function appendFrontend(string){
    return string + "Frontend"
}

console.log(appendFrontend("Apple"))

// Challenge 6

function sumGreaterThan100(num1, num2){
return (num1 + num2 ) > 100 
}

console.log(sumGreaterThan100(90,20))

// Challenge 7 

function lessThanOrEqualToZero(num){
    return num <= 0
}

console.log(lessThanOrEqualToZero(-2))

// Challenge 8 

function oppositeBoolean(bool){
    return !bool

}

console.log(oppositeBoolean(true))

// Challenge 9

function isNotZero(element){
    return element !== 0
}

console.log(isNotZero(null))

// Challenge 10 

function calcRemainder(x, y ){
    return x % y
}

console.log(calcRemainder(7, 8))

// Challenge 11

function isOdd(num){
    return num % 2 !== 0
}

console.log(isOdd(3))

//Challenge 12

function booleanInteger(num){
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(5))

// Challenge 13
function isLogggedInAndSubscribed(string1, string2){
    return (string1==="Logged_In" && string2 === "Subscribed")
}

console.log(isLogggedInAndSubscribed("Logged_Out", "Unsubscribed"))

//Challenge 14

function isLogggedInOrSubscribed(string1, string2){
    return (string1 ==="Logged_In" || string2 === "Subscribed")
}

console.log(isLogggedInOrSubscribed("Logged_In", "UnSubscribed"))