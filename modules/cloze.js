const Flashcard = require("./flash.js");

function ClozeCard(fullText, cloze) {
	this.fullText = fullText;
	this.cloze = cloze;

	var CreatePartialText = function(fullText, cloze) {
		if (fullText.includes(cloze))
			return fullText.replace(cloze, "...");
		else
			throw Error("Cloze was not included in the full text.");
	};

	this.partialText = CreatePartialText(fullText, cloze);
}

ClozeCard.prototype = new Flashcard("cloze");

module.exports = ClozeCard;