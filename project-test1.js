console.log('!!!!! Functions !!!!!!');
//yourFunction();
//core function
// function [] {}

// function expression
const myFunction = function() {
    console.log('my functions');
};

// function declaration
function yourFunction() {
    console.log('your functions');
};
// run functions
yourFunction();
myFunction();
yourFunction();

//returns are optional
// parameter / agruments also optional 

function xavier(isms) {
    const speak = `waaahh!, ${isms}!!!!!`;
    console.log(speak);
    const xavierWording = document.querySelector('#xavier_words')
    xavierWording.innerHTML = speak;
    return speak;

}

const xavierism = xavier('wehooo');

console.log('xaviers words', xavierism);

// maths

const theDowntownx2 = function (roman) {
    return roman * 2;
};

console.log(theDowntownx2(4));
console.log(theDowntownx2(.98576));
console.log(theDowntownx2(97));
console.log(theDowntownx2(6));
console.log(theDowntownx2(46));

//built in functions 

console.log('number as string', '4');
console.log('with number ()', Number('4'));
console.log('parseInt', parseInt(1.5));
console.log('parseFloat', parseFloat('1.6'));
String();


// DOM interaction

//const xavierWording = document.querySelector('#xavier_words')
//console.log(xavierWording);
//xavierWording.innerHTML = 'test';

// function that increases

let counter = 2;

function goingonup() {
    // increase
    counter++;
    console.log('goinonup', counter);
    const counterElement = document.querySelector('#counter');
    counterElement.innerHTML = counter;
}
// function that decreases

const goingondown = function () {
    // decrease
    counter--;
    console.log('goingondown', counter);
    //const counterElement = document.querySelector('#counter');
    //counterElement.innerHTML = counter;
    domCounterUpdate()

}    

// organized dom update to a function
const domCounterUpdate = function() {
    
    const counterElement = document.querySelector('#counter');
    counterElement.innerHTML = counter;


}

domCounterUpdate()


