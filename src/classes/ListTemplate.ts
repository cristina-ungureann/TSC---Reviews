

 import { HasFormatter } from "../interfaces.ts/HasFormatter.js";



 export class ListTemplate {
    constructor(
        private container: HTMLElement
    ){}

    render(item: HasFormatter){
        const li = document.createElement('li');
        li.innerText = item.format();
        this.container.append(li);
    }
 }