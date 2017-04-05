const BasicCard = require("./modules/basic.js")
	, ClozeCard = require("./modules/cloze.js")
	, CardLog = require("./modules/cardlog.js");

// globals
var question = process.argv[3];
var answer = process.argv[4];

// user inputs and showing results
function userMain() {
	switch(process.argv[2]) {
		case "basic":
			// creates a basic card and logs it
			if (process.argv.length === 5) {
				CardLog.LogCard(new BasicCard(question, answer));
				CardLog.NewCard(question, answer, "basic");
			}
			else {
				console.log("Input error. Please follow this input example:\n" +
				"node flashcards.js basic 'the question' 'the answer'");
			}
			break;

		case "cloze":
			//creates a cloze card and logs it
			if (process.argv.length === 5) {
				CardLog.LogCard(new ClozeCard(question, answer));
				CardLog.NewCard(question, answer, "cloze");
			}
			else {
				console.log("Input error. Please follow this input example:\n" +
				"node flashcards.js cloze 'full statement' 'section user wants to cloze/blank out'");
			}
			break;

		case "read":
			if (process.argv[3] === "basic" || process.argv[3] === "cloze")
				CardLog.ReadCards(process.argv[3]);
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