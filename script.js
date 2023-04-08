let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");

const updateGame = (p1, p2, gameState) => {

  p1NameDiv.innerText = p1.name
  p2NameDiv.innerText = p2.name
  p1HealthDiv.innerText = p1.health
  p2HealthDiv.innerText = p2.health
  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver
    result.innerText = game.declareWinner(game.isOver,p1,p2)
    return gameState
  } 
}



class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike (player, enemy, attackDmg) {
    let damageAmount = Math.ceil(Math.random() * attackDmg) 
    enemy.health -= damageAmount
    updateGame(p1,p2,gameState)
    return `${player.name} attacks ${enemy.name} for ${damageAmount}` 
  }

  heal (player) {
    let hpAmount = Math.ceil(Math.random() * 5)
    player.health += hpAmount
    updateGame(p1,p2,gameState)
    return `${player.name} heals for ${hpAmount} HP!`
  }
}

class Game {
  constructor() {
    this.isOver = false;
  }

  declareWinner(isOver,p1, p2) {
    let message
    if (isOver == true && p1.health <= 0) {
      message = `${p2.name} WINS!`;
      audio3.play();
    }  
    else if(isOver == true && p2.health <= 0) {
      message = `${p1.name} WINS!`
    } 
    console.log(isOver, p1.health, p2.health)
    return message
  }

  reset(p1,p2) {
    p1.health = 100
    p2.health = 100
    this.isOver = false
    resultDiv.innerText = ''
    updateGame(p1,p2)
  }
  


}

let player1 = new Player('Kilobyte', 100, 15)
let player2 = new Player('Megabyte', 100, 15)


let p1 = player1
let p2 = player2



let game = new Game();
updateGame(p1,p2)

let gameState = game.isOver





document.addEventListener('keypress', function(e) {
  if (e.key == "q" &&  p2.health >= 0 && game.isOver == false ){
    p1.strike(p1, p2, p1.attackDmg)
    audio.play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "a" && 100 > p2.health > 0 ){
   p1.heal(p1)
   audio2.play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "p" &&  p1.health >= 0 && game.isOver == false ){
    p2.strike(p2, p1, p2.attackDmg)
    audio.play();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key == "l" && 100 > p2.health > 0 ){
   player2.heal(p2)
   audio2.play();
  }
});

const getInputValue=()=>{
const naam = document.getElementById("naam").value 
 let naam1 = naam
console.log(naam1)
p1NameDiv.innerText = naam1

}






