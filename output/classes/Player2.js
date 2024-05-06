// a class that implements an interface can't have private attribute unless we implement a get method for that attribute and private must also be mentioned in the interface. also remove the private attribute from interface. thats how we can use private in a class that implements interface
export class Player2 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
