const fs = require("fs");

//constructors

function CardLog() {

	this.LogCard = function(card) {

		//checking for logs folder
		fs.stat("./logs", function(error, info){
			//if logs folder does not exist, create logs folder
			if (info === undefined) {
				fs.mkdirSync("./logs");
			}
			//append 
			fs.appendFile("./logs/" + card.cardtype + ".log", noFunc(card), function(error){
				if (error) {
					throw error;
				}
			});
		});
	};

	this.ReadCards = function(cardtype) {
		fs.readFile("./logs/" + cardtype + ".log", "utf8", function(error, data){
			if (error) {
				throw error;
			}

			var cardsArray = data.split("\n");
			//remove last element in array since it's an empty string
			cardsArray.pop();

			for (var i = 0; i < cardsArray.length; i++) {
				var cardObj = JSON.parse(cardsArray[i]);

				//checking card type
				if (cardObj.cardtype === "basic") {
					console.log("Question: " + cardObj.question + "\n" +
					"Answer: " + cardObj.answer + "\n" +
					"==================================================")
				}
				//card type is cloze
				else { 
					console.log("Partial Text: " + cardObj.partialText + "\n" +
					"Cloze: " + cardObj.cloze + "\n" +
					"Full Text: " + cardObj.fullText + "\n" +
					"==================================================")
				}
			}
		});
	};

	this.NewCard = function(question, answer, cardtype) {
		if (cardtype === "basic") {
			console.log("Basic card created.\n" + 
			"Question: " + question + "\n" +
			"Answer: " + answer);
		}
		else {
			console.log("Cloze card created.\n" +
			"Partial Text: " + question.replace(answer, "...") + "\n" +
			"Cloze: " + answer + "\n" + 
			"Full Text: " + question);
		}
	};

	// used to keep functions out when appending to the log files
	var noFunc = function(card)
	{
		var emptyObj = {};

		for (var prop in card)
		{
			if (typeof card[prop] !== "function") {
				emptyObj[prop] = card[prop];
			}
		}

		return JSON.stringify(emptyObj) + "\n";
	};



};

module.exports = new CardLog();