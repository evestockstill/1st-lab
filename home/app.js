import animals from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import { renderAnimalItem } from '../src/render-animal.js';
const ul = document.getElementById('list-animals');
const animalTypeFilter = document.querySelector('.animal-type-filter');

animalTypeFilter.addEventListener('change', () => {
    const filterString = animalTypeFilter.value;
    let filteredAnimals = null;

    if (!filterString) {
        filteredAnimals = animals;
    }
    else {
        filteredAnimals = animals.filter(animal => {
            return animal.keyword === filterString;
        });
    }
    render(filteredAnimals);
});

render(animals);
function render(animalsToRender) {
    while (ul.lastElementChild) {
        ul.lastElementChild.remove();
    }
    animalsToRender.forEach(animal => {
        const html = renderAnimalItem(animal);
        const dom = htmlToDOM(html);
        ul.appendChild(dom);
    });
}