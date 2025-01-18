'use strict'
const container = document.getElementById('container');
const html = `<article class="card">
<h3 class="card__title"></h3>
<div class="card__body">
  <div class='card__body__image'></div>
  <section class='card__body__content'>
  </section>
</div>
</article>`;

/**
 * @param {string} title
 * @param {string} body
 *
 * @return {HTMLElement}
 */
function createCardComponent(title, body) {
    // @todo - Implement function
}

const component = createCardComponent(
    "Frontend System Design: Fundamentals",
    "This is a random body text"
);

container.appendChild(component);