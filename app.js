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
Product.votes = [];
Product.names = [];

function Product(name, url) {
  this.name = name;
  this.url = url;
  this.votes = 0;
  this.counter = 0;
  this.appeared = 0;
  this.votePercent = 0;
}

var allProducts = [
  new Product('Bag', 'img/bag.jpg'),
  new Product('Banana', 'img/banana.jpg'),
  new Product('Bathroom', 'img/bathroom.jpg'),
  new Product('Boots', 'img/boots.jpg'),
  new Product('Breakfast', 'img/breakfast.jpg'),
  new Product('Bubblegum', 'img/bubblegum.jpg'),
  new Product('Chair', 'img/chair.jpg'),
  new Product('Cthulu', 'img/cthulhu.jpg'),
  new Product('Dog Duckmouth', 'img/dog-duck.jpg'),
  new Product('Dragon Meat', 'img/dragon.jpg'),
  new Product('Pen', 'img/pen.jpg'),
  new Product('Pet-sweet', 'img/pet-sweep.jpg'),
  new Product('Scissors', 'img/scissors.jpg'),
  new Product('Shark', 'img/shark.jpg'),
  new Product('Sweep', 'img/sweep.png'),
  new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg'),
  new Product('Unicorn', 'img/unicorn.jpg'),
  new Product('Tentacle Usb drive', 'img/usb.gif'),
  new Product('Water Can', 'img/water-can.jpg'),
  new Product('Wine glass', 'img/wine-glass.jpg'),
];

Product.prototype.calcPercent = function () {
  var division = (this.votes / this.appeared);
  this.votePercent = Math.round(division * 100);
};

var productOne = allProducts[0];
var productTwo = allProducts[1];
var productThree = allProducts[2];


function productOneFunc() {
  counter++;
  productOne.votes++;
  productOne.appeared++;
  pickNewProduct();
  counterLimiter();
  console.log(Product.priorDisplay);
}

function productTwoFunc() {
  counter++;
  productTwo.votes++;
  productTwo.appeared++;
  pickNewProduct();
  counterLimiter();
  console.log(Product.priorDisplay);
}

function productThreeFunc() {
  counter++;
  productThree.votes++;
  productThree.appeared++;
  pickNewProduct();
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


function counterLimiter () {
  var resultsList = document.getElementById('results');
  if (counter === 25) {
    for (var i = 0; i < allProducts.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allProducts[i].name + ' ' + allProducts[i].votes + ' Votes';
      resultsList.appendChild(liEl);
      Product.votes.push(allProducts[i].votes);
      Product.names.push(allProducts[i].name);
    }
    buttonOne.removeEventListener('click', productOneFunc);
    buttonTwo.removeEventListener('click', productTwoFunc);
    buttonThree.removeEventListener('click', productThreeFunc);
    Product.renderChart();
  }
}

Product.renderChart = function () {
  var ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.names,
      datasets: [{
        label: 'Product Votes',
        data: Product.votes,
        backgroundColor: ['rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(200, 99, 132, 0.6)',
          'rgba(255, 100, 132, 0.6)',
          'rgba(25, 100, 132, 0.6)',
          'rgba(25, 100, 132, 0.6)',
          'rgba(25, 100, 132, 0.6)',
          'rgba(25, 100, 132, 0.6)',
          'rgba(25, 100, 132, 0.6)',
          'rgba(255, 100, 132, 0.6)',
          'rgba(255, 99, 233, 0.6)',
          'rgba(200, 99, 233, 0.6)',
          'rgba(48, 99, 43, 0.6)',
          'rgba(48, 99, 43, 0.6)',
          'rgba(48, 99, 43, 0.6)',
          'rgba(48, 99, 43, 0.6)',
        ],
        hoverBackgroundColor: 'black'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text: 'Results'
      }
    }
  });
};

counterLimiter();
pickNewProduct();
counterLimiter();