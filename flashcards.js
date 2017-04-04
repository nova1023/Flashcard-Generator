const BasicCard = require("./modules/basic.js")
	, ClozeCard = require("./modules/cloze.js")
	, CardLogger = require("./modules/cardlogger.js");

// globals
var question = process.argv[3];
var answer = process.argv[4];

// user inputs and showing results
function userMain() {
	switch(process.argv[2]) {
		case "basic":
			// creates a basic card and logs it
			if (process.argv.length === 5) {
				CardLogger.LogCard(new BasicCard(question, answer));
				CardLogger.NewCard(question, answer, "basic");
			}
			else {
				console.log("Input error. Please follow this input example:\n" +
				"node flashcards.js basic 'the question' 'the answer'");
			}
			break;

		case "cloze":
			//creates a cloze card and logs it
			if (process.argv.length === 5) {
				CardLogger.LogCard(new ClozeCard(question, answer));
				CardLogger.NewCard(question, answer, "cloze");
			}
			else {
				console.log("Input error. Please follow this input example:\n" +
				"node flashcards.js cloze 'full statement' 'cloze section of statement'");
			}
			break;

		case "read":
			if (process.argv[3] === "basic" || process.argv[3] === "cloze")
				CardLogger.ReadCards(process.argv[3]);
			else
				console.log("Please input 'basic' or 'cloze' after 'read'");
			break;

		default:
			console.log("Please use one of these commands: 'basic', 'cloze', or 'read'");
			break;
	}
}

//calling userMain function
userMain();