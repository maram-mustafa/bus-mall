'use strict';

let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');

let counts = 0;
let maxAttempts = 25;

let leftIndex;
let centerIndex;
let rightIndex;


product.allImages = [];

function product(name, source) {
    this.name = name;
    this.source = source;
    this.time = 0;
    this.votes = 0;
    product.allImages.push(this);
}


new product('bag', 'img/bag.jpg');
new product('banana', 'img/banana.jpg');
new product('bathroom', 'img/bathroom.jpg');
new product('boots', 'img/boots.jpg');
new product('breakfast', 'img/breakfast.jpg');
new product('bubblegum', 'img/bubblegum.jpg');
new product('chair', 'img/chair.jpg');
new product('cthulhu', 'img/cthulhu.jpg');
new product('dog-duck', 'img/dog-duck.jpg');
new product('dragon', 'img/dragon.jpg');
new product('pen', 'img/pen.jpg');
new product('pet-sweep', 'img/pet-sweep.jpg');
new product('scissors', 'img/scissors.jpg');
new product('shark', 'img/shark.jpg');
new product('sweep', 'img/sweep.png');
new product('tauntaun', 'img/tauntaun.jpg');
new product('unicorn', 'img/unicorn.jpg');
new product('usb', 'img/usb.gif');
new product('water-can', 'img/water-can.jpg');
new product('wine-glass', 'img/wine-glass.jpg');

console.log(product.allImages);

function renderThreeImages() {
    leftIndex = genrateRandomIndex();
    centerIndex = genrateRandomIndex();
    rightIndex = genrateRandomIndex();

    while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
        leftIndex = genrateRandomIndex();
        centerIndex = genrateRandomIndex();
    }


    leftImageElement.src = product.allImages[leftIndex].source;
    product.allImages[leftIndex].time++;
    centerImageElement.src = product.allImages[centerIndex].source;
    product.allImages[centerIndex].time++;
    rightImageElement.src = product.allImages[rightIndex].source;
    product.allImages[rightIndex].time++;
}
renderThreeImages();
// console.log(product.allImages.time);


leftImageElement.addEventListener('click', handleClicking);
centerImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);

function handleClicking(event) {
    counts++;
    if (maxAttempts >= counts) {
        if (event.target.id === 'left-image') {
            product.allImages[leftIndex].votes++;
        } else if (event.target.id === 'center-image') {
            product.allImages[centerIndex].votes++;
        } else if (event.target.id === 'right-image') {
            product.allImages[rightIndex].votes++;
        }
        renderThreeImages();
        // consolee.log(product.allImages);
    } else {
        renderList()
        leftImageElement.removeEventListener('click', handleCliching);
        centerImageElement.removeEventListener('click', handleCliching);
        rightImageElement.removeEventListener('click', handleCliching);
    }

}

function renderList() {
    let ul = document.getElementById('ulList');
    for (let i = 0; i < product.allImages.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${product.allImages[i].name} shown ${product.allImages[i].time} it has ${product.allImages[i].votes} Votes `;
    }
}



function genrateRandomIndex() {     // to genarete a random images
    return Math.floor(Math.random() * product.allImages.length);
}