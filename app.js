'use strict';

console.log('JS is linked');
var counter = 0;
var buttonOne = document.getElementById('button-one');
var buttonTwo = document.getElementById('button-two');
var buttonThree = document.getElementById('button-three');
var prodImgOne = document.getElementById('one');
var prodImgTwo = document.getElementById('two');
var prodImgThree = document.getElementById('three');
Product.priorDisplay = [];
Product.currentDisplay = [];


function Product(name, url) {
  this.name = name;
  this.url = url;
  this.votes = 0;
  this.counter = 0;
  this.appeared = 0;
  this.votepercent = 0;
}

var allProducts = [
  new Product('bag', 'img/bag.jpg'),
  new Product('banana', 'img/banana.jpg'),
  new Product('bathroom', 'img/bathroom.jpg'),
  new Product('boots', 'img/boots.jpg'),
  new Product('breakfast', 'img/breakfast.jpg'),
  new Product('bubblegum', 'img/bubblegum.jpg'),
  new Product('chair', 'img/chair.jpg'),
  new Product('cthulu', 'img/cthulhu.jpg'),
  new Product('dog duck', 'img/dog-duck.jpg'),
  new Product('dragon meat', 'img/dragon.jpg'),
  new Product('pen', 'img/pen.jpg'),
  new Product('pet-sweet', 'img/pet-sweep.jpg'),
  new Product('scissors', 'img/scissors.jpg'),
  new Product('shark', 'img/shark.jpg'),
  new Product('sweep', 'img/sweep.png'),
  new Product('Tauntaun', 'img/tauntaun.jpg'),
  new Product('unicorn', 'img/unicorn.jpg'),
  new Product('tentacle usb', 'img/usb.gif'),
  new Product('water-can', 'img/water-can.jpg'),
  new Product('wine-glass', 'img/wine-glass.jpg'),
];

var productOne = allProducts[0];
var productTwo = allProducts[1];
var productThree = allProducts[2];
// var previousProduct = {
//   one : null,
//   two : null,
//   three : null,
// };

function productOneFunc() {
  // previousProduct.one = productOne.url;
  // Product.priorDisplay.push(productOne.url);
  // Product.priorDisplay.push(productTwo.url);
  // Product.priorDisplay.push(productThree.url);
  counter++;
  productOne.votes++;
  pickNewProduct();
  // limitRepeat ();
  counterLimiter();
  console.log(Product.priorDisplay);
}

function productTwoFunc() {
  // Product.priorDisplay.push(productOne.url);
  // Product.priorDisplay.push(productTwo.url);
  // Product.priorDisplay.push(productThree.url);
  counter++;
  productTwo.votes++;
  pickNewProduct();
  // limitRepeat ();
  counterLimiter();
  console.log(Product.priorDisplay);
}

function productThreeFunc() {
  // Product.priorDisplay.push(productOne.url);
  // Product.priorDisplay.push(productTwo.url);
  // Product.priorDisplay.push(productThree.url);
  counter++;
  productThree.votes++;
  pickNewProduct();
  // limitRepeat ();
  counterLimiter();
  console.log(Product.priorDisplay);

}


buttonOne.addEventListener('click', productOneFunc);

buttonTwo.addEventListener('click', productTwoFunc);

buttonThree.addEventListener('click', productThreeFunc);


function pickNewProduct() {
  productOne = allProducts[Math.floor(Math.random() * allProducts.length)];
  productTwo = allProducts[Math.floor(Math.random() * allProducts.length)];
  productThree = allProducts[Math.floor(Math.random() * allProducts.length)];
  while (productOne.url === productTwo.url ||
    productOne.url === productThree.url ||
    productTwo.url === productThree.url || Product.priorDisplay.includes(productOne.url) || Product.priorDisplay.includes(productTwo.url) || Product.priorDisplay.includes(productThree.url)) {
    productOne = allProducts[Math.floor(Math.random() * allProducts.length)];
    productTwo = allProducts[Math.floor(Math.random() * allProducts.length)];
    productThree = allProducts[Math.floor(Math.random() * allProducts.length)];
  }
  Product.currentDisplay.push(productOne.url);
  Product.currentDisplay.push(productTwo.url);
  Product.currentDisplay.push(productThree.url);
  prodImgOne.src = productOne.url;
  prodImgTwo.src = productTwo.url;
  prodImgThree.src = productThree.url;
  Product.priorDisplay[0] = productOne.url;
  Product.priorDisplay[1] = productTwo.url;
  Product.priorDisplay[2] = productThree.url;
}

// function limitRepeat () {
//   do {
//     pickNewProduct();
//   } while (!Product.priorDisplay.includes(productOne.url) || !Product.priorDisplay.includes(productTwo.url) || !Product.priorDisplay.includes(productThree.url));
// }

function counterLimiter () {
  var resultsList = document.getElementById('results');
  if (counter === 25) {
    for (var i = 0; i < allProducts.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allProducts[i].name+ ' ' + allProducts[i].votes + ' Votes';
      resultsList.appendChild(liEl);
    }
    buttonOne.removeEventListener('click', productOneFunc);
    buttonTwo.removeEventListener('click', productTwoFunc);
    buttonThree.removeEventListener('click', productThreeFunc);
  }
}

counterLimiter();
pickNewProduct();
counterLimiter();