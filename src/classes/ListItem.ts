export class ListItem {
    constructor(
        public email: string,
        public name: string,
        public review: string
    ){}

    format(){
        return `${this.email} - ${this.name} - ${this.review}`
    }
}