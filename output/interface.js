{
    function drawRectangle(options) {
        let width = options.width;
        let length = options.length;
    }
    drawRectangle({ width: 30, length: 40 });
    //   drawRectangle({ width: 30, length: 40, height: 10 }); // error: Object literal may only specify known properties, and 'height' does not exist in type (strict checking)
    let options3d = {
        width: 30,
        length: 20,
        height: 10,
    };
    drawRectangle(options3d); // doesn't do scrict checking
}
import { Player2 } from './classes/Player2.js';
{
    const player1 = new Player2('Mashrafee', 40, 'Bangladesh');
    let sakib;
    sakib = new Player2('Sakib', 35, 'Bangladesh'); // this is correct because Player2 class implements IsPlayer
    console.log(player1.country);
    const players = [];
    players.push(player1);
    players.push(sakib);
    console.log(players);
}
