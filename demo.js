// Log the string "Area of a circle" to the console
console.log("Area of a circle")

// Declare a pi
var pi = 3.14;

console.log(typeof pi) ;

// Declare a radius and assign the value 5
var radius = 5;

console.log(typeof radius);

var area = pi * radius **

console.log("The area of a circle given the radius " + pi + "(m) is " + area + "(m2)")


// Section 4

var number = 3;

if (number < 0) {
    console.log(
        number + " is a negative number"
    )
} else if (number == 0){
    console.log(
        number + " is zero"
    )
} else {
    console.log(
        number + " is a positive number"
    )
}

// Compare 3 number

var a = 98
var b = 3
var c = 5 

if (a > b && a > c) {
    if (b > c) {
        console.log(c + " is the smallest number, and " + a + " is the biggest number between " + a + ", " + b + ", " + c)
    } else if (c > b) {
        console.log(b + " is the smallest number, and " + a + " is the biggest number between " + a + ", " + b + ", " + c)
    }

} else if (b > a && b > c){
    if (a > c) {
        console.log(c + " is the smallest number, and " + b + " is the biggest number between " + a + ", " + b + ", " + c)
    } else if (c > a) {
        console.log(a + " is the smallest number, and " + b + " is the biggest number between " + a + ", " + b + ", " + c)
    }
} else if (c > a  && c > b) {
    if (a > b) {
        console.log(b + " is the smallest number, and " + c + " is the biggest number between " + a + ", " + b + ", " + c)
    } else {
        console.log(a + " is the smallest number, and " + c + " is the biggest number between " + a + ", " + b + ", " + c)
    }
}

// Loops section 5 

// var a = 10
// var b = 1 

// for (let a = 10; a > b; a--) {
//     console.log(a)
// }

// var a = 1 
// var b = 9
// for (let a = 1; a < b; a++){
//     console.log(a)
// }

var sum = 0

for (let a = 1; a <= 5; a++) {
    sum = sum + a
    console.log(sum)
}

// Section 6 

function helloworld(){
    console.log("hello world!")
}

helloworld()

var a = "Tran Thien Van"

function myname(a){
    return a
}

console.log(myname(a))

// Section 6




// Magic-8-Ball 
function play(){
    // Create a random number integer. Thats why we have to use floor and random!
    const randomNumber = (Math.floor(Math.random() * 2))
    // Log to the console to see the randomNumber 
    console.log(randomNumber)
    // Create a message variable to target the class of the h3 in the html
    let message = document.getElementsByClassName("result")[0];
    console.log(message)

    // If else statements to tell yes or no
    if (randomNumber == 0) {
        message.innerHTML = "Yes";
    } else {
        message.innerHTML = "No";
    }
} 
