import getIndex from './helper.js';
import './styles/globals.css'
import './styles/variables.css'
import './fonts/Inter-Regular.woff'
import './fonts/Inter-Regular.woff2'
import './fonts/Inter-SemiBold.woff'
import './fonts/Inter-SemiBold.woff2'
import './fonts/fonts.css'
import './styles/style.css';


import coffee1 from './images/coffee-slider-1.png'
import coffee2 from './images/coffee-slider-2.png'
import coffee3 from './images/coffee-slider-3.png'

class Coffee {
  constructor(name, img, description, cost) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.cost = cost;
  }
}

class CoffeeSlider {
  constructor(containerId, cardTemplateId) {
    this.container = document.getElementById(containerId);
    this.cardTemplate = document.getElementById(cardTemplateId).content;
  }

  createCardElement(coffee) {
    const cardElement = this.cardTemplate.querySelector('.choose__container').cloneNode(true);
    cardElement.querySelector('.choose__img').src = coffee.img;
    cardElement.querySelector('.coffee-name').textContent = coffee.name;
    cardElement.querySelector('.coffee-description').textContent = coffee.description;
    cardElement.querySelector('.cost').textContent = coffee.cost;
    return cardElement;
  }

  render(cards) {
    cards.forEach(coffee => {
      const cardElement = this.createCardElement(coffee);
      this.container.appendChild(cardElement);
    });
  }
}

const slider = new CoffeeSlider('slider', 'sliderTemplate');

const sliderCoffee = [
  new Coffee("S’mores Frappuccino", coffee1, "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.", "$5.50"),
  new Coffee("Caramel Macchiato", coffee2, "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.", "$5.00"),
  new Coffee("Ice coffee", coffee3, "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.", "$4.50"),
];

slider.render(sliderCoffee);

let currentIndex = 0;

function showImage(index) {
  const containers = document.querySelectorAll('.choose__container');
  containers[currentIndex].classList.remove('active');
  containers[index].classList.add('active');
  currentIndex = index;
}

document.querySelector('.slider__container').addEventListener('click', function (event) {
  let index = currentIndex; 
  if (event.target.classList.contains('prev')) {
    index = getIndex('prev', currentIndex, containers.length);
  } else if (event.target.classList.contains('next')) {
    index = getIndex('next', currentIndex, containers.length);
  }
  showImage(index);
});

const containers = document.querySelectorAll('.choose__container');
containers[currentIndex].classList.add('active');