import { renderAnimalItem } from '../src/render-animal.js';
const test = QUnit.test;

QUnit.module('Render Animal Item');

test('renders html from data', assert => {
    const image = {
        title: 'UniWhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        description: 'A unicorn and a narwhal nuzzling their horns',
        horns: 1
    };
    const expected = /*html*/`
        <li>
        <div class="grid">
            <fieldset class="animal-title">
                <legend>UniWhal</legend>
                <img class="pic" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
                <p class="info">A unicorn and a narwhal nuzzling their horns</p>
                <p class="horns">1</p>
            </fieldset>
        </div>
        </li>
    `;
    const html = renderAnimalItem(image);

    assert.htmlEqual(html, expected);
});