const Flashcard = require("./flash.js");

//basic card contructor
function BasicCard(question, answer) {
	this.question = question;
	this.answer = answer;
}

BasicCard.prototype = new Flashcard("basic");

module.exports = BasicCard;