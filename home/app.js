import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderAnimalItem from '../src/render-animal.js';

const list = document.querySelector('.animal-images');
const animalTypeFilter = document.querySelector('.animal-type-filter');

animalTypeFilter.addEventListener('change', () => {
    const filter = animalTypeFilter.value;
    let filteredImages = null;

    if (!filter) {
        filteredImages = images;
    }
    else {
        filteredImages = images.filter(images => {
            return images.type === filter;
        });
    }
    render(filteredImages);
});

render(images);
function render(imagesToRender) {
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }
    imagesToRender.forEach(images => {
        const html = renderAnimalItem(images);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}