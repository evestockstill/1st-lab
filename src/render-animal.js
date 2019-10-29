export function renderAnimalItem(image) {
    const html = /*html*/`
        <li>
        <div class="grid">
            <fieldset class="animal-title">
                <legend>${image.title}</legend>
                <img class="pic" src="${image.url}">
                    <p class="info">${image.description}</p>
                    <p class="horns">${image.horns}</p>
            </fieldset>
        </div>
        </li>
        `;
    return html;
}
