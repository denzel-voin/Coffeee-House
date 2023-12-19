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

// Фабрика для создания объектов Coffee
class CoffeeFactory {
  createCoffee(name, description, cost, img) {
    return new Coffee(name, description, cost, img);
  }
}

class Coffee {
  constructor(name, description, cost, img) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.cost = cost;
  }
}

class CoffeeSlider {
  constructor(containerId, cardTemplateId, coffeeFactory) {
    this.container = document.getElementById(containerId);
    this.cardTemplate = document.getElementById(cardTemplateId).content;
    this.coffeeFactory = coffeeFactory;
  }

  createCardElement(coffee) {
    const cardElement = this.cardTemplate.querySelector('.choose__container').cloneNode(true);
    cardElement.querySelector('.choose__img').src = coffee.img;
    cardElement.querySelector('.coffee-name').textContent = coffee.name;
    cardElement.querySelector('.coffee-description').textContent = coffee.description;
    cardElement.querySelector('.cost').textContent = coffee.cost;
    return cardElement;
  }

  render(coffees) {
    coffees.forEach(coffeeData => {
      // Используем фабрику для создания объектов Coffee
      const coffee = this.coffeeFactory.createCoffee(coffeeData.name, coffeeData.description, coffeeData.cost, coffeeData.img);
      const cardElement = this.createCardElement(coffee);
      this.container.appendChild(cardElement);
    });
  }
}


const coffeeFactory = new CoffeeFactory();


const slider = new CoffeeSlider('slider', 'sliderTemplate', coffeeFactory);

const sliderCoffeeData = [
  { name: "S’mores Frappuccino", description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.", cost: "$5.50", img: coffee1 },
  { name: "Caramel Macchiato", description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.", cost: "$5.00", img: coffee2 },
  { name: "Ice coffee", description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.", cost: "$4.50", img: coffee3 },
];

slider.render(sliderCoffeeData);


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