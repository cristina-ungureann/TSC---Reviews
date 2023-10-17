export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item) {
        const li = document.createElement('li');
        li.innerText = item.format();
        this.container.append(li);
    }
}
