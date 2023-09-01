// let rock = document.getElementById('rock')
// let paper = document.getElementById('paper')
// let scissors = document.getElementById('scissors')

// let what = document.getElementById('what')

// let wins = document.getElementById('wins')
// let loss = document.getElementById('loss')
// let ties= document.getElementById('ties')
// console.log(wins,loss,ties)

// const score = {
//     wins:0,
//     losses:0,
//     ties:0
// }



// rock.addEventListener('click', () => {
//     let computer = '';
//     const randomNum = Math.random();
    
//     if (randomNum < 1/3) {
//         computer = 'rock';
//     } else if (randomNum < 2/3) {
//         computer = 'paper';
//     } else {
//         computer = 'scissors';
//     }

//     let result = '';
//     if (computer === 'rock') {
//         result = 'tie bruh';
//     } else if (computer === 'paper') {
//         result = 'you lose haha loser';
//     } else {
//         result = 'you win nice';
//     }

//     what.innerHTML = result;

//     if(result === 'you win nice'){
//         wins.innerHTML = `Wins: ${score.wins += 1}`
//     }
//     else if(result === 'you lose haha loser'){
//         loss.innerHTML = `Losses: ${score.losses += 1}`
//     } else if(result === 'tie bruh'){
//         ties.innerHTML = `Ties: ${score.ties += 1}`
//     }
// });

// paper.addEventListener('click', () => {
//     // Same logic as the 'rock' event listener, adjusted for 'paper'
//     let computer = '';
//     const randomNum = Math.random();
    
//     if (randomNum < 1/3) {
//         computer = 'rock';
//     } else if (randomNum < 2/3) {
//         computer = 'paper';
//     } else {
//         computer = 'scissors';
//     }

//     let result = '';
//     if (computer === 'rock') {
//         result = 'you win nice';
//     } else if (computer === 'paper') {
//         result = 'tie bruh';
//     } else {
//         result = 'you lose haha loser';
//     }

//     what.innerHTML = result;

//     if(result === 'you win nice'){
//         wins.innerHTML = `Wins: ${score.wins += 1}`
//     }
//     else if(result === 'you lose haha loser'){
//         loss.innerHTML = `Losses: ${score.losses += 1}`
//     } else if(result === 'tie bruh'){
//         ties.innerHTML = `Ties: ${score.ties += 1}`
//     }
// });

// scissors.addEventListener('click', () => {
//     // Same logic as the 'rock' event listener, adjusted for 'scissors'
//     let computer = '';
//     const randomNum = Math.random();
    
//     if (randomNum < 1/3) {
//         computer = 'rock';
//     } else if (randomNum < 2/3) {
//         computer = 'paper';
//     } else {
//         computer = 'scissors';
//     }

//     let result = '';
//     if (computer === 'rock') {
//         result = 'you lose haha loser';
//     } else if (computer === 'paper') {
//         result = 'you win nice';
//     } else {
//         result = 'tie bruh';
//     }

//     what.innerHTML = result;

//     if(result === 'you win nice'){
//         wins.innerHTML = `Wins: ${score.wins += 1}`
//     }
//     else if(result === 'you lose haha loser'){
//         loss.innerHTML = `Losses: ${score.losses += 1}`
//     } else if(result === 'tie bruh'){
//         ties.innerHTML = `Ties: ${score.ties += 1}`
//     }
// });

// TEMP CONVERTER

// const prompt = require('prompt-sync')();


// const toFahr = (num) =>{
//     const fahr = num * (9/5) + 32
//     return fahr 
// }
// const toCels = (num) =>{
//     const cels = (num -32) * (5/9)
//     return cels 
// }

// let unit = prompt('Choose either fahrenhiet or celsius to convert to the opposite (f or c): ')
// if(unit === 'c' || 'C'){
//     let num = prompt('Enter the degrees in celsius to convert to fahrenheit: ')
//     let fahrenheit = toFahr(num);
//     console.log(`${num} degrees celsius is ${fahrenheit} degress fahrenheit`)
// }else if(unit === 'f' || 'F'){
//     let num = prompt('Enter the degrees in fahrenheit to convert to celsius: ')
//     let celsius = toCels(num)
//     console.log(`${num} degrees fahrenheit is ${celsius} degress celsius`)
// }

const object = {
    name: 'ezat',
    height: '6foot 4in',
    from:'palestine',
    likes: {
        basketball: true,
        coding: true,
        reading:false,
        math:true
    }
}

console.log(JSON.stringify(object))