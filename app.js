let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

let what = document.getElementById('what')



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
        result = ' tie'
    }
    if(computer === 'paper'){
        result = ' you lose'
    }
    if(computer === 'scissors'){
        result = ' you win'
    }

    what.innerHTML = result;

    alert(`You picked rock, the computer picked ${computer},${result}`)
})



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
        result = ' tie'
    }
    if(computer === 'paper'){
        result = ' you lose'
    }
    if(computer === 'scissors'){
        result = ' you win'
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
        result = ' tie'
    }
    if(computer === 'paper'){
        result = ' you lose'
    }
    if(computer === 'scissors'){
        result = ' you win'
    }

    what.innerHTML = result;

   
})