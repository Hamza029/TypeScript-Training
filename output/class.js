"use strict";
{
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
    console.log(player1);
    const players = [];
    players.push(player1);
    players.push(player2);
    console.log(players);
}
