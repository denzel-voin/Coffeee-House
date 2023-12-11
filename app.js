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
  new Coffee("S’mores Frappuccino", "./images/coffee-slider-1.png", "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.", "$5.50"),
  new Coffee("Caramel Macchiato", "./images/coffee-slider-2.png", "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.", "$5.00"),
  new Coffee("Ice coffee", "./images/coffee-slider-3.png", "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.", "$4.50"),
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
