let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

let what = document.getElementById('what')

let wins = document.getElementById('wins')
let loss = document.getElementById('loss')
let ties= document.getElementById('ties')

const score = {
    wins:0,
    losses:0,
    ties:0
}


rock.addEventListener('click', () =>{
    let computer = '';
    const randomNum = Math.random();
    console.log(randomNum)

    if(randomNum >= 0 && randomNum < 1/3){
        computer = 'rock'
    }
    if(randomNum >= 1/3 && randomNum < 2/3){
        computer = 'paper'
    }
    if(randomNum >= 2/3 && randomNum < 3/3){
        computer = 'scissors'
    }

    let result = '';
    if(computer === 'rock'){
        result = ' tie bruh'
    }
    if(computer === 'paper'){
        result = ' you lose haha loser'
    }
    if(computer === 'scissors'){
        result = ' you win nice'
    }

    what.innerHTML = result;

   
})

if(result === ' you win nice'){
    score.wins += 1
    wins.innerHTML = `Wins: ${score.wins}`
}else if(result === ' you lose haha loser'){
    score.losses += 1
    loss.innerHTML = `Losses: ${score.losses}`
}else if(result === ' tie bruh'){
    score.ties += 1
    ties.innerHTML = `Ties: ${score.ties}`
}



paper.addEventListener('click', () =>{
    let computer = '';
    const randomNum = Math.random();
    console.log(randomNum)

    if(randomNum >= 0 && randomNum < 1/3){
        computer = 'rock'
    }
    if(randomNum >= 1/3 && randomNum < 2/3){
        computer = 'paper'
    }
    if(randomNum >= 2/3 && randomNum < 3/3){
        computer = 'scissors'
    }

    let result = '';
    if(computer === 'rock'){
        result = ' tie bruh'
    }
    if(computer === 'paper'){
        result = ' you lose haha loser'
    }
    if(computer === 'scissors'){
        result = ' you win nice'
    }

    what.innerHTML = result;

})



scissors.addEventListener('click', () =>{
    let computer = '';
    const randomNum = Math.random();
    console.log(randomNum)

    if(randomNum >= 0 && randomNum < 1/3){
        computer = 'rock'
    }
    if(randomNum >= 1/3 && randomNum < 2/3){
        computer = 'paper'
    }
    if(randomNum >= 2/3 && randomNum < 3/3){
        computer = 'scissors'
    }

    let result = '';
    if(computer === 'rock'){
        result = ' tie bruh'
    }
    if(computer === 'paper'){
        result = ' you lose haha loser'
    }
    if(computer === 'scissors'){
        result = ' you win nice'
    }

    what.innerHTML = result;

   
})

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
