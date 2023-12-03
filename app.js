const sliderCoffee = [{
  "name": "S’mores Frappuccino",
  "img": "./images/coffee-slider-1.png",
  "description": "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
  "cost": "$5.50"
}, {
  "name": "Caramel Macchiato",
  "img": "./images/coffee-slider-2.png",
  "description": "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
  "cost": "$5.00"
}, {
  "name": "Ice coffee",
  "img": "./images/coffee-slider-3.png",
  "description": "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
  "cost": "$4.50"
},]


const cardTemplate = document.querySelector('#slider').content;
const choose = document.querySelector('.container');

let cardElement;

const createCard = (cards) => {
  cards.forEach(element => {
    cardElement = cardTemplate.querySelector('.choose__container').cloneNode(true);
    cardElement.querySelector('.choose__img').src = element.img;
    cardElement.querySelector('.coffee-name').textContent = element.name;
    cardElement.querySelector('.coffee-description').textContent = element.description;
    cardElement.querySelector('.cost').textContent = element.cost;
    choose.append(cardElement)
  })
}

createCard(sliderCoffee)

const images = document.querySelectorAll('.choose__container');
let currentIndex = 0;

function showImage(index) {
  const containers = document.querySelectorAll('.choose__container');
  containers[currentIndex].classList.remove('active');
  containers[index].classList.add('active');
  currentIndex = index;
}

document.querySelector('.slider__container').addEventListener('click', function (event) {
  if (event.target.classList.contains('prev')) {
    let index = currentIndex - 1;
    if (index < 0) {
      index = containers.length - 1;
    }
    showImage(index);
  } else if (event.target.classList.contains('next')) {
    let index = currentIndex + 1;
    if (index >= containers.length) {
      index = 0;
    }
    showImage(index);
  }
});

const containers = document.querySelectorAll('.choose__container');
containers[currentIndex].classList.add('active');
