export class Creature {
    public name: string;
    public price: string;
    public location: string;
    public imageURL: string;

    constructor(name: string, price: string, location: string, imageURL: string){
        this.name = name;
        this.price = price;
        this.location = location;
        this.imageURL = imageURL
    }
}