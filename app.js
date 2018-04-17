'use strict';

console.log('JS is linked');

var buttonOne = document.getElementById('button-one');
var buttonTwo = document.getElementById('button-two');
var buttonThree = document.getElementById('button-three');
var prodImgOne = document.getElementById('one');
var prodImgTwo = document.getElementById('two');
var prodImgThree = document.getElementById('three');


function Product(url) {
  this.url = url;
  this.votes = 0;
}

var allProducts = [
  new Product('img/bag.jpg'),
  new Product('img/banana.jpg'),
  new Product('img/bathroom.jpg'),
  new Product('img/boots.jpg'),
  new Product('img/breakfast.jpg'),
  new Product('img/bubblegum.jpg'),
  new Product('img/chair.jpg'),
  new Product('img/cthulhu.jpg'),
  new Product('img/dog-duck.jpg'),
  new Product('img/dragon.jpg'),
  new Product('img/pen.jpg'),
  new Product('img/pet-sweep.jpg'),
  new Product('img/scissors.jpg'),
  new Product('img/shark.jpg'),
  new Product('img/sweep.png'),
  new Product('img/tauntaun.jpg'),
  new Product('img/unicorn.jpg'),
  new Product('img/usb.gif'),
  new Product('img/water-can.jpg'),
  new Product('img/wine-glass.jpg'),
];

var productOne = allProducts[0];
var productTwo = allProducts[1];
var productThree = allProducts[2];


buttonOne.addEventListener('click', function(e) {
  productOne.votes++;
  productOne = allProducts[Math.floor(Math.random() * allProducts.length)];
  prodImgOne.src = productOne.url;
  productTwo = allProducts[Math.floor(Math.random() * allProducts.length)];
  prodImgTwo.src = productTwo.url;
  productThree = allProducts[Math.floor(Math.random() * allProducts.length)];
  prodImgThree.src = productThree.url;
});

buttonTwo.addEventListener('click', function(e) {
  productTwo.votes++;
  productTwo = allProducts[Math.floor(Math.random() * allProducts.length)];
  prodImgTwo.src = productTwo.url;

});

buttonThree.addEventListener('click', function(e) {
  productThree.votes++;
  productThree = allProducts[Math.floor(Math.random() * allProducts.length)];
  prodImgThree.src = productThree.url;

});

