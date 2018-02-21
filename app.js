const prompt = require('prompt');


var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

//TEST DATA //

// var marvel = new BasicCard("What comicbook studio created the X-Men?", "Marvel");

// console.log(marvel.front);
// console.log(marvel.back);

// console.log(BasicCard);
// var mario = new ClozeCard("Super Mario Bros. ended the videogame crash", "Mario");

// console.log(mario.partial);
// console.log(mario.fullText);
// console.log(mario.cloze);

prompt.start();

prompt.get(['front', 'back'], function (err, result) {
	console.log('front' + result.front);
	console.log('back ' + result.back);
});