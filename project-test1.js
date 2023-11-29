// // console.log('!!!!! Functions !!!!!!');
// // //yourFunction();
// // //core function
// // // function [] {}

// // // function expression
// // const myFunction = function() {
// //     console.log('my functions');
// // };

// // // function declaration
// // function yourFunction() {
// //     console.log('your functions');
// // };
// // // run functions
// // yourFunction();
// // myFunction();
// // yourFunction();

// // //returns are optional
// // // parameter / agruments also optional 

// // function xavier(isms) {
// //     const speak = `waaahh!, ${isms}!!!!!`;
// //     console.log(speak);
// //     const xavierWording = document.querySelector('#xavier_words')
// //     xavierWording.innerHTML = speak;
// //     return speak;

// // }

// // const xavierism = xavier('wehooo');

// // console.log('xaviers words', xavierism);

// // // maths

// // const theDowntownx2 = function (roman) {
// //     return roman * 2;
// // };

// // console.log(theDowntownx2(4));
// // console.log(theDowntownx2(.98576));
// // console.log(theDowntownx2(97));
// // console.log(theDowntownx2(6));
// // console.log(theDowntownx2(46));

// // //built in functions 

// // console.log('number as string', '4');
// // console.log('with number ()', Number('4'));
// // console.log('parseInt', parseInt(1.5));
// // console.log('parseFloat', parseFloat('1.6'));
// // String();


// // // DOM interaction

// // //const xavierWording = document.querySelector('#xavier_words')
// // //console.log(xavierWording);
// // //xavierWording.innerHTML = 'test';

// // // function that increases

// // let counter = 2;

// // function goingonup() {
// //     // increase
// //     counter++;
// //     console.log('goinonup', counter);
// //     const counterElement = document.querySelector('#counter');
// //     counterElement.innerHTML = counter;
// // }
// // // function that decreases

// // const goingondown = function () {
// //     // decrease
// //     counter--;
// //     console.log('goingondown', counter);
// //     //const counterElement = document.querySelector('#counter');
// //     //counterElement.innerHTML = counter;
// //     domCounterUpdate()

// // }    

// // // organized dom update to a function
// // const domCounterUpdate = function() {
    
// //     const counterElement = document.querySelector('#counter');
// //     counterElement.innerHTML = counter;


// // }

// // domCounterUpdate()


// // penguiens
// // [{}, {}, {}, {}]

// const penguinsList = [ {
//     name: 'Flippy', // string
//     colors: ['black', 'white', 'gray'], //array with strings
//     size: 1.2, // number 
//     isCute: false, // boolean
// },
// { 
//     name: 'Greg', // string
//     colors: ['white', 'gray'], //array with strings
//     size: 2, // number 
//     isCute: true, // boolean
// },
// { 
//     name: 'Steve', // string
//     colors: ['black', 'white'], //array with strings
//     size: 1.9, // number 
//     isCute: true, // boolean
// }
// ]

// console.log(penguinsList);

// const filterPenguins = function(animalList) { 
//     console.log('Filter');
//     console.log('List', animalList);
// // create new list
// const uglyList = [];

// // loop over list
// for (let animalItem of animalList){
//     console.log(animalItem);
//     // conditional if statement
//     if(animalItem.isCute === false){
//         console.log(animalItem);
//       // add Non-cute to list  
     
//     }

    
// }

// // return all is cute false as a new list

// return uglyList
// }

// const filteredPenguinsList = filterPenguins(penguinsList);
// console.log(filteredPenguinsList);

// const renderPenguins = function (penguinsForRender){
//     console.log('renderPenguins');
//     const penguinsElement = document.querySelector('#penguins')
//     console.log(penguinsElement);

//     penguinsElement.innerHTML= '';


//     //loog through list


//     for (let i=0; i<penguinsForRender.length; i++)
//     {const penguinItem = penguinsForRender[i];
//         const itemElement = document.createElement('li');
//         itemElement.innerText = penguinItem.name;
//         console.log(penguinItem);
//         // add penguin to page
//         // display name 
//         penguinsElement.append (`<li>${penguinItem.name}</li>`);
//     }

    
// }

// //check for cute and make a meassage
// let cuteMessage ='';
// let cuteClass = '';

// if (penguinItem.isCute === true) {
//     cuteMessage = ' I am adorable';
// } else {
//     cuteMessage = 'am I not cute????';
//     cuteClass = 'notCute';
// }


// penguinsElement.innerHtml += `
//     <li class="${cuteClass}">
//             <li> Name: ${penguinItem.name}</li>
//             <li> size: ${penguinItem.size}</li>
//             <li> colors: ${penguinItem.colors.join(', ')}</li>
//             <li> "${cuteMessage}"</li>
        
        
        
//         </ul>
    
//     </li>





// `

// renderPenguins(penguinsList);

console.log('!!!!! Events, Tables, Froms  !!!!!!!')

function handler(event){
    console.log('click me')
    console.log('Event', event)
    console.log('clicked element', event.target);
    
// way to actually interact with something we clicked
   // event.target.innerText = 'clicked'

    console.log('parent Element', event.target.parentElement)
   event.target.parentElement.innerHTML = 'sup sup'
}

function handlerClick (event){
    event.target.innerHTML = 'sup yup'
}
function handlerButton(event){
    event.target.innerHTML = 'yo yo';
   // event.target.style = 'background: purple';
   event.target.classList.add('newcol');
   event.target.classList.remove('duh');

}

function handlerSubmit(angel){
    // prevents refresh
    angel.preventDefault();

    const firstNameElement = angel.target.querySelector('#firstName');
    const lastNameElement = angel.target.querySelector('#lastName');

    console.log('submit', angel);
    console.log('first name', firstNameElement.value);
    console.log('last name', lastNameElement.value);

}