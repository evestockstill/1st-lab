export function renderAnimalItem(animal) {
    if (!animal) {
        throw new Error('you need an animal');
    }
    const html = /*html*/`
        <li>
        <div class="grid">
            <fieldset class="animal-title">
                <legend>${animal.title}</legend>
                <img class="pic" src="${animal.url}">
                    <p class="info">${animal.description}</p>
                    <p class="horns">${animal.horns}</p>
            </fieldset>
        </div>
        </li>
        `;
    return html;
}
