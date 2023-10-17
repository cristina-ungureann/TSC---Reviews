import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces.ts/HasFormatter.js";
import { ListItem } from "./classes/ListItem.js";
  

document.addEventListener("DOMContentLoaded", () => {


  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  const name = document.querySelector('#name') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const review = document.querySelector('#review') as HTMLTextAreaElement;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const ul = document.querySelector('ul')!;
    const list = new ListTemplate(ul);

    let doc: HasFormatter;
    doc = new ListItem(email.value, name.value, review.value);
    list.render(doc);
    


    
  })
})