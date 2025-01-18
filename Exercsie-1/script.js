
const container = document.getElementById('container');
const template = document.getElementById('card__template')
/**
 * @param {string} title
 * @param {string} body
 *
 * @return {HTMLElement}
 */
function createCardComponent(title, body) {
    // @todo - Implement function
    const card = template.content.cloneNode(true).firstElementChild;
    const [cardTitle, cardBody] = card.querySelectorAll('.card__title, .card__body__content');

    cardTitle.textContent = title;
    cardBody.textContent = body;
    console.log(card)
    return card

} 
container.appendChild(createCardComponent('ForntendMaster', 'Frotnend'))