var score = 0;
var playerChoice;

var readable = {
'0': 'Rock',
'1': 'Scissors',
'2': 'Paper'
};

var cpuChoice = {
  init : function(){
     this.store = Math.floor(Math.random () * 3 );
     this.text = readable[this.store];
},
store: '',
text: '',
};



var order = [0,1,2,0];

var chooseWinner = function(player, cpu) {
  if (order[player] === order[cpu]) {
    return 'Tie! Try again?';
  }
  if (order[player] === order[cpu+1]) {
    score++;
    return 'You won!';

  }
  else {
    score--;
    return 'You lost!';
  }

}

var paragraph = document.querySelector('p');


var assignClick = function (tag,pos)
 {
  tag.addEventListener ('click', function (){
cpuChoice. init();
playerChoice = pos;

var result = chooseWinner(playerChoice, cpuChoice.store);
var playerWeapon = playerChoice == 0 ?  'Rock' :
                   playerChoice == 1 ? 'Paper' :
                   playerChoice == 2 ? 'Scissors' : 'Something went wrong' ;


if (playerChoice == 0) {playerWeapon = 'Rock'}
else if (playerChoice == 1) {playerWeapon = "Scissors"}
else if ( playerChoice == 2) {playerWeapon = 'Paper'}
else ( playerWeapon = 'Something went wrong') ;

paragraph.innerText = `The computer chose: ${cpuChoice.text}. \nYou chose ${playerWeapon}. \n${result}. \n${score}`
  });

}



var images = {
  tags: document.getElementsByTagName('img'),
  init: function () {
    for(var step = 0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
