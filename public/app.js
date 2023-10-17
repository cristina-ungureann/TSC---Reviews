import { ListTemplate } from "./classes/ListTemplate.js";
import { ListItem } from "./classes/ListItem.js";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.new-item-form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const review = document.querySelector('#review');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ul = document.querySelector('ul');
        const list = new ListTemplate(ul);
        let doc;
        doc = new ListItem(email.value, name.value, review.value);
        list.render(doc);
    });
});
