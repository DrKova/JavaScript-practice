alert("Hello World");
alert("My name is Emir");

//variables
//x + 20 = 25

let eyeColor = 'blue'
let hairColor = 'brown'
let sentence = "I can't see you"
eyeColor = 'green'


//comments
//This is a variable for storing my name.
let nyName
/*name: Emir
Date: 19 April 2023.
*/

//Number variables
let firstNumber = 1
let secondtNumber = 0.11
let thirdNumber = 512

//Math operators
// +
// -
// *
// /
//Special Math Operators
let increaseMe = 1
increaseMe = increaseMe + 1
increaseMe++
console.log(increaseMe);

//let answer

/*let number1
var number2

number1 = 20
number2 = 10

answer = number1+number2
console.log(answer)*/

//String
let numberString = '1'

//Number
var justANumber = 1

//concatenation


//Comparison Operators

// == equal to
// === equal to but with type
//!= : not equal
//!== : not equal
//< : less than
//> : greater than
//>= : greater or equal
// <= : less or equal

//if statement
if (1 == 1) {
    console.log("They are the same")
}

if (2 > 1) {
    console.log('2 is greater')
}

let someNumber = 1

if (someNumber == 1) {
    console.log('The number are the same')
}

let yourNumber = 1
let myNumber = 2

if (yourNumber == myNumber){
    console.log('Our number are the same')
}

//ACtivity: What if?

//let answer = prompt('What is your favorite color?')
if (answer == 'blue'){
    console.log('That is my favorite color too!')
}

if (1 == 1){
    console.log('They are the same')
} else {
    console.log('They are not the same')
}


let name = "Kova"
if (name =="Kova"){
    console.log("Hello my name is" + name + "too!")
} else{
    console.log("Hello, " + name + ". Nice to meet you")
}

//Activity: now what

//let answer = prompt("What is your favorite animal?")
if (answer == "dog"){
    console.log("That is my favorite too")
} else{
    console.log("I think that a " + answer + " would be nice also.")
}

//else if
if ( 1 == 2){
    console.log("One is the same")
} else if (2 == 2 ){
    console.log("Two is the same")
} else{
    console.log("Neither are the same")
}

let myName = 'Emir'
let yourName ='Edib'
if (myName == yourName){
    console.log('We have the same name!')
} else if(myName != yourName){
    console.log('Hello ' + yourName)
} else {
    console.log("I'm not sure who you are")
}

// let answer = prompt("What is your favorite food?")
if (answer == "pizza"){
    console.log("Pizza is great")
} else if (answer == "burger"){
    console.log("Burgers are great too")
} else if (answer == "tacos")
console.log("Taco Tuesdays should be everyday")
    else if (answer == "pasta"){
        console.log("Pasta is so fun to eat")
    } else{
        console.log(answer + " sounds great too")
 }


let gift = prompt("What gift should I buy for my wife");
if (gift == "roses"){
    console.log("Great. She loves flowers")
} else if(gift == "jewelry"){
    console.log("That's expensive")
}else if(gift == "card"){
    console.log("Definitely no!")
} else if(gift == "money"){
    console.log("Wise decision")
}else if(gift == "electronics"){
    console.log("She doesn't how to use it!")
}else if(gift == "books"){
    console.log("Awesome. She loves to read")
} else if(gift == "puppy"){
    console.log("She loves cats")
}else{
    (gift + " Sounds great too")
} 

//Comparing multimple sest of data in the if statement
// && : and
// || : or

if(1 == 1 && 2 == 2){
    console.log("They are both the same")
}

if (1 == 1 || 2 == 2){
    console.log("One or both are the same")
}

//nesting

if( 1 == 1) {
    if(2 == 2) {
        console.log("both are the same")
    } else if(3 == 2) {
        //do something
    } else{
        //do something else
    } //else if( 3 == 1) {
        //do something
    }


    //activity: if this or that



    //Version 1

   // let answer1 = prompt("What is your favorite color?")
    // let answer2 = prompt("Pick a number between 1-5")

if (answer1 == "blue" && answer2 == "1"){
    console.log("Those were my choices too!")
} else{
    console.log("You chose " + answer1 + " and " + answer2)
}

// let answer1 = prompt("What is your favorite color?")
// let answer2 = prompt("Pick a number between 1-5")
if (answer1 == "blue" || answer2 == "1"){
    console.log("At least one of those match")
} else{
    console.log("You chose " + answer1 + " and " + answer2)
}

//Version 2

let answer1 = prompt("What is your favorite color?")
let answer2 = prompt("Pick a number between 1-5")
if(answer1 == "blue") {
if(answer2 == "1") {
    console.log("Those were my choices too")
} else {
    console.log("You didnt' choose 1")
}
}else {
    console.log("You didn't choose blue")
}


// True or false : Boolean
let isitReal = true
let isitFun = false
let isitSpicy = "true"

//booleans with if statements

let areYouAwake1 = true
if(areYouAwake1 == true) {
    console.log("Glad you are awake")
}

let areYouHappy1 = true
if(areYouHappy){
    console.log("I'm happy too")
}

let areYouAwake3 = false
if (areYouAwake == false){
    console.log("Wake up")
}

let areYouAwake2 = false
if (areYouAwake != true){
    console.log("Wake up")
}

let areYouHappy = false
if(!areYouHappy){
    console.log("cheer up")
}


//Activity: truth or dare

let answer = prompt("Do you like cheese? Type Y or N")
let isItTrue

if(answer == "Y"){
    isItTrue = true
    console.log("Your answer was " + isItTrue)
} else if(answer == "N"){
    isItTrue = false
    console.log("Your answer was " + isItTrue)
}else{
    console.log("I don't understand")
}
