// let rock = document.getElementById('rock')
// let paper = document.getElementById('paper')
// let scissors = document.getElementById('scissors')

// let what = document.getElementById('what')



// rock.addEventListener('click', () =>{
//     let computer = '';
//     const randomNum = Math.random();
//     console.log(randomNum)

//     if(randomNum >= 0 && randomNum < 1/3){
//         computer = 'rock'
//     }
//     if(randomNum >= 1/3 && randomNum < 2/3){
//         computer = 'paper'
//     }
//     if(randomNum >= 2/3 && randomNum < 3/3){
//         computer = 'scissors'
//     }

//     let result = '';
//     if(computer === 'rock'){
//         result = ' tie bruh'
//     }
//     if(computer === 'paper'){
//         result = ' you lose haha loser'
//     }
//     if(computer === 'scissors'){
//         result = ' you win nice'
//     }

//     what.innerHTML = result;

   
// })



// paper.addEventListener('click', () =>{
//     let computer = '';
//     const randomNum = Math.random();
//     console.log(randomNum)

//     if(randomNum >= 0 && randomNum < 1/3){
//         computer = 'rock'
//     }
//     if(randomNum >= 1/3 && randomNum < 2/3){
//         computer = 'paper'
//     }
//     if(randomNum >= 2/3 && randomNum < 3/3){
//         computer = 'scissors'
//     }

//     let result = '';
//     if(computer === 'rock'){
//         result = ' tie bruh'
//     }
//     if(computer === 'paper'){
//         result = ' you lose haha loser'
//     }
//     if(computer === 'scissors'){
//         result = ' you win nice'
//     }

//     what.innerHTML = result;

// })



// scissors.addEventListener('click', () =>{
//     let computer = '';
//     const randomNum = Math.random();
//     console.log(randomNum)

//     if(randomNum >= 0 && randomNum < 1/3){
//         computer = 'rock'
//     }
//     if(randomNum >= 1/3 && randomNum < 2/3){
//         computer = 'paper'
//     }
//     if(randomNum >= 2/3 && randomNum < 3/3){
//         computer = 'scissors'
//     }

//     let result = '';
//     if(computer === 'rock'){
//         result = ' tie bruh'
//     }
//     if(computer === 'paper'){
//         result = ' you lose haha loser'
//     }
//     if(computer === 'scissors'){
//         result = ' you win nice'
//     }

//     what.innerHTML = result;

   
// })

// TEMP CONVERTER

const prompt = require('prompt-sync')();

let unit = prompt('Choose either fahrenhiet or celsius to convert to the opposite (f or c): ')
if(unit = 'c' || 'C'){
    let num = prompt('Enter the degrees in celsius to convert to fahrenheit: ')
    toFahr();
}else if(unit = 'f' || 'F'){
    let num = prompt('Enter the degrees in fahrenheit to convert to celsius: ')
    toCels()
}


const toFahr = () =>{
    const fahr = num * (9/5) + 32
    return fahr 
}
const toCels = () =>{
    const cels = num -32 * (5/9)
    return cels 
}