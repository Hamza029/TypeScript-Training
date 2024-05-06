"use strict";
{
    // by default all attributes of a class are private
    class Player {
        constructor(n, a, c) {
            this.name = n;
            this.age = a;
            this.country = c;
        }
        play() {
            console.log(`${this.name} from ${this.country} is playing`);
        }
    }
    const player1 = new Player('Mashrafee', 40, 'Bangladesh');
    const player2 = new Player('Sakib', 38, 'Bangladesh');
    //   console.log(player2.name); // Property 'name' is private and only accessible within class 'Player'
    console.log(player2.country);
    //   player2.country = 'England'; // Cannot assign to 'country' because it is a read-only property
}
{
    // defining attributes in constructor's parameter
    // in this case we must explicitly mention access modifier with parameters
    class Player {
        constructor(name, age, country) {
            this.name = name;
            this.age = age;
            this.country = country;
        }
        play() {
            console.log(`${this.name} from ${this.country} is playing`);
        }
    }
    const player1 = new Player('Mashrafee', 40, 'Bangladesh');
    console.log(player1);
}
