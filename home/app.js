import animals from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import { renderAnimalItem } from '../src/render-animal.js';

const list = document.querySelector('.animals');
const animalTypeFilter = document.querySelector('.animal-type-filter');

animalTypeFilter.addEventListener('change', () => {
    const filterString = animalTypeFilter.value;
    let filteredAnimals = null;

    if (!filterString) {
        filteredAnimals = animals;
    }
    else {
        filteredAnimals = animals.filter(animal => {
            return animal.type === filterString;
        });
    }
    render(filteredAnimals);
});

render(animals);
function render(animalsToRender) {
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }
    animalsToRender.forEach(animal => {
        const html = renderAnimalItem(animal);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}