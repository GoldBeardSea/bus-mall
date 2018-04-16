'use strict';

console.log('JS is linked');

var buttonOne = document.getElementById('button-one');
var buttonTwo = document.getElementById('button-two');
var buttonThree = document.getElementById('button-three');

var buttonOneVotes = 0;
var buttonTwoVotes = 0;
var buttonThreeVotes = 0;


buttonOne.addEventListener('click', function(e) {
  buttonOneVotes++;
});

buttonTwo.addEventListener('click', function(e) {
  buttonTwoVotes++;
});

buttonThree.addEventListener('click', function(e) {
  buttonThreeVotes++;
});

console.log(buttonOneVotes);
console.log(buttonTwoVotes);
console.log(buttonThreeVotes);