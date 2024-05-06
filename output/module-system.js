import { Player } from './classes/Player.js';
const player1 = new Player('Mashrafee', 40, 'Bangladesh');
const player2 = new Player('Sakib', 38, 'Bangladesh');
console.log(player1.country);
/*
    this doesn't bundle Player.js with module-system.js.
    so both network request is made in both files.
    if there are 500 files that uses Playe.js then 500 requests will be made for those 500 files.
    thats why we use different types of bundlers like webpack.
    conclusion: ts doesn't do the bundling.
*/
