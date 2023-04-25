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

// let answer = prompt("Do you like cheese? Type Y or N")
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

// values of an array
// let container = []
let people = ["bob", "joe", "sam"]

// Arrays are indexed in starting with 0
let stuff = [1, 2, 3, "test", true]

//Pop and push
// let container = ["red", "blue", "yellow", "brown"]
container.pop()

container.push("orange")

//shift and ushift
// let container = ["red", "blue", "yellow", "brown"]
container.shift()
container.unshift("purple")

//changing specific elements
let container = ["red", "blue", "yellow", "brown"]
container[0]
container[0] = "purple"

//Splice and Slice
let container = ["red", "blue", "yellow", "brown"]
container.splice(0, 0, "black") //add black to the front
container.splice(0, 1) //remove the first element
container.splice(0, 1, "black") //remove first element and insert black

let container = ["red", "blue", "yellow", "brown"]
let newContainer = container.slice(3)

//Activity all the things
//let things = []
//let answer
answer = prompt("What is your first favorite thing?")
things.push(answer)

answer = prompt("What is your second favorite thing?")
things.push(answer)

answer = prompt("What is your third favorite thing")
things.push(answer)

console.log(things)

let container = []
//let answer
answer = prompt("What is your favorite Bosnian movie?")
container.push(answer)

answer = prompt("What was your favorite movie in 1994?")
container.push(answer)

answer = prompt("What was your favorite movie in 1996?")
container.push(answer)

answer = prompt("What is your favorite movie genre?")
container.push(answer)

answer = prompt("What movie have you watched over 2 times?")
container.push(answer)

answer = prompt("What is your all time favorite movie?")
container.push(answer)
container.splice(0,0, "LOTR")
container.pop()
console.log(container)


//for Loop
// for (starting place; condition, incrementer) []
// i++
// i = 1 + 1
for (let i = 1; i < 10; i++) {
    console.log(i)
}
for (var I = 1; i < 5; i++) {
    console.log("Hello" + i)
}
// never ending loops
//infinite loop
for (var i = 1; i < 10; i++) {
    console.log()
}
// for loop with an if condition
for (let i = 1; i < 5; i++){
    if (i == 1) {
        console.log()
    } else if (i == 2) {
        console.log("Bye")
    }else if(i == 3){
        console.log("Yo")
    } else if (i == 4){
        console.log("See ya")
    }
}
// breaking the for loop
for (var i = 1; i < 10; i++){
    if (i == 5) {
        break;
    } else {
        console.log(i)
    }
}
//for loop with an array
let things = [1, 2, "hello", "bye"]
for (let i = 1; i < 5; i++){
    console.log(things[i])
}
//activity this will be a bit tricky
let answer = prompt("Type YES or NO")
let answers = ["YES", "NO"]
let responses = ["You said Yes", "You said no", "You didn't follow directions"]
for (let i = 0; i < 2; i++) {
    if (answer != answers[0] && answer != answers[1]) {
        console.log(responses[2])
        break;
    } else if(answer == answers[i]) {
        console.log(responses[i])
    }
}

//for loop in a for loop
let numbers = [1, 2, 3, 4, 5]
var letters = ["a", "b", "c"]

for (let i = 0; i < 5; i++){
    console.log(numbers[i])
    for (var t = 0; t < 3; t++){
        console.log(letters[t])
    }
}
// activity: the square
let square = ""
for (let i = 0; i <5; i++) {
    for (let t = 0; t < 5; t++){
        square = square + "*"
    }
    square = square  + "\n"
}
console.log(square)


let triangle = "" 

for (let i = 0; i < 5; i++){
    for (let t = 0; t < i; t++){
       
        triangle = triangle + "*"
    }
    triangle = triangle + "\n" 
}
console.log(triangle)

//while loop
let i = 0;
while (i < 5){
    console.log(i)
    i++
}

//do while loop

let i = 0
do {
    console.log(i)
    i++
} while (i < 5)

//for vs while vs Do While
//diff between FOR and DO/DO WHILE
for (let i = 0; i < 5; i++){
    console.log(i)
}

let answer0
let areYouHappy2 = true
while (areYouHappy2) {
    answer0 = prompt("Are you happy")
    if (answer0 == "yes") {
        console.log("You are happy")     
    } else {
        areYouHappy2 = false 
        console.log("You are not happy")
    }
    
}
// Diff between Do and Do While

let i = 0
while (i < 0){
    console.log(i)
    i++
}


let i = 0
do {
    console.log(i)
    i++
} while (i < 0)

//Switch Statements

//let favFood ="pasta"

if (favFood == "pizza") {
    console.log("Pizza!")
} else if (favFood == "pasta") {
    console.log("Pasta!")
} else {
    console.log(favFood)
}

let favFood = "pasta"
    switch(favFood) {
        case "pizza" :
            console.log("Pizza!")
            break
        case "pasta" :
            console.log("Pasta!")
            break
        default :
            console.log(favFood)
    }

    let favColor = "red"
    switch(favColor) {
        case "blue" :
    console.log("Violets are blue")
        break
        case "red" :
    console.log("Roses are red")
        break
    default:
    console.log("Sugar is sweet")
}

//function basics
//Defining a function


const message = function (){
console.log("Hello there!")
}
message()

//Declaring a function

function message(){
    console.log("By now")
} message()
     
function newMessage(){
    console.log(1)
    console.log(2)
    console.log(3)
} 
newMessage()
newMessage()
newMessage()
newMessage()
newMessage()

//returning data

function getMessage(){
    return "Hello there"
}
    getMessage()
console.log(getMessage())



function getNumber() {
    return 1
}
console.log(getNumber())


function getCost(){
    //Cost of oranges
    return 5
} 
console.log("Five oranges cost about 5$" + getCost())



function getNumber(){
    return 5
}
//console.log(getNumber() + 5)


function getSomething(){
    return getNumber() + 5
}
console.log(getSomething())


//Parameters and Arguments

function messages (message1, message2) {
    console.log(message1)
    console.log(message2)
}
messages ("Message 1, Message 2")


//Activity : Area of a rectangle

function rectArea(length, width) {
    let area = length * width
    return area
}
rectArea(2, 5)

//const
const something = "bob"

const arr =[1, 2, 3]

//Variable scope

let num = 1
function thing() {
    num = 2
    let num2 = 4
    console.log("Function " + num2)
}

thing()
console.log("Outside function: " + num2)

//const

