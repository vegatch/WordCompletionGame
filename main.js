
//--------------personal code -----------
//--------------Random text to complete game
let fruits = [
    // "Apple",
    // "Orange",
    // "Mango",
    // "Banana",
    // "Cherry",
    // "Pineapple",
    // "Blueberry",
    // "Lemon",
    "Orange"
];


let hiddenChar = function (w) {
    let hiddenWord = w.substring(0, 1) + '(-)'.repeat(w.length-1);
    let hiddenWordSpace = hiddenWord.split('').join('  ');    
    return hiddenWordSpace;
}
//console.log(hiddenChar('Anglade'));


let randomFruits = function(fruit){    
    let givenFruit = fruit[Math.floor(Math.random() * fruit.length)];    
    let guessWord = hiddenChar(givenFruit);
    // document.open();     
    // givenFruit = document.write(`<h2>${givenFruit}</h2>`);
    // guessWord = document.write(`<h2>${guessWord}</h2>`);
    // document.close();
    return givenFruit;    
}
//console.log('Random value:', randomFruits(fruits))
let myArray = []
let userInput;
let stringCtrl = randomFruits(fruits);
let stringLast = stringCtrl.slice(1);
let stringLastArray = stringLast.split("");
let stringFirst = stringCtrl.charAt(0);
let hiddenCtrl = hiddenChar(stringCtrl);
console.log('Visible: ', stringCtrl);
console.log('Hidden: ', hiddenCtrl);
console.log('End string', stringLast)
console.log('End Strin Array', stringLastArray)
console.log('Start string', stringFirst)



let isIncluded = function(text = stringCtrl, userInput){
    return text.includes(userInput)    
}
isIncluded(stringCtrl, userInput)
console.log('from isIncluded', isIncluded(stringCtrl, userInput))

let isIndex = function(text = stringCtrl, userInput){    
    
    return text.indexOf(userInput);
}
isIndex(stringCtrl, userInput)
console.log('from isIndex', isIndex(stringCtrl, userInput));


if(isIndex !== -1){
   // userInput = prompt('what is your guess?')
    myArray[isIndex(stringCtrl, userInput)] = userInput
}else{
    alert('KISS')
}
console.log('from myArray', myArray)

let createArray = function(){
    myArray =[];
    let position = isIndex(stringLastArray, userInput);
    for(let i=0; myArray !== stringLastArray; i += 1){
        userInput = prompt('what is your guess')
        if(isIndex !== -1){
            myArray[isIndex(stringCtrl, userInput)] = userInput
        }else{
            alert('KISS')
        }
        return myArray;     
        
    }
}
createArray();
