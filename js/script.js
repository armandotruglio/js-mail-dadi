console.log('JS OK');

// DADI

const firstDice = document.getElementById('first-dice');
const secondDice = document.getElementById('second-dice');
const winnerDice = document.getElementById('winner');

const min = 1;
const max = 6;


const firstThrow = Math.floor(Math.random() * (max - min + 1) + min);
const secondThrow = Math.floor(Math.random() * (max - min + 1) + min);


firstDice.innerHTML = firstThrow;
secondDice.innerHTML = secondThrow;

console.log(firstThrow);
console.log(secondThrow);

if(firstThrow > secondThrow){
    winnerDice.innerHTML = 'Vince il primo dado';
}
else if(firstThrow < secondThrow){
    winnerDice.innerHTML = 'Vince il secondo dado';
}
else{
    winnerDice.innerHTML = 'I dadi hanno pareggiato';
}