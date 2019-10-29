import htmlToDOM from '../util/html-to-DOM.js';
const test = QUnit.test;

QUnit.module('html to DOM');

test('converts html to DOM', (assert) => {
    const html = /*html*/`
        <span>test</span>
    `;
    const dom = htmlToDOM(html);
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});