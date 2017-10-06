var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var marvel = new BasicCard("What comicbook studio created the X-Men?", "Marvel");

console.log(marvel.front);
console.log(marvel.back);

var mario = new ClozeCard("Super Mario Bros. ended the videogame crash", "Mario");

console.log(mario.fullText);
console.log(mario.cloze);
console.log(mario.partial);
