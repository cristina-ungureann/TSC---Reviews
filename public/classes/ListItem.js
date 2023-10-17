export class ListItem {
    constructor(email, name, review) {
        this.email = email;
        this.name = name;
        this.review = review;
    }
    format() {
        return `${this.email} - ${this.name} - ${this.review}`;
    }
}
