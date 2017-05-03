/*var testTaker = [
	{
		question : "What is " + subject,
		answer : "The answer"
	},
	{
		question : "Who was related to the " + subject,
		answer : "The answer"
	},
	{
		question : "Why did " + subject + " happen?",
		answer : "The answer"
	}
]

var noteTaker = [
	{
		title : notes_subject,
		text : notes
	}
]*/

function note_Taker(){
	var div = document.createElement("DIV");
	/*
	There will be a button that's named "Add Notes",
	when clicked, will make another div with the same class as the other notes. But, it will appear as an input with the "Done" button replacing the edit-notes button. When "Done" is clicked, the input text will be saved into a variable and be used as the inner text of the p element that will replace the input element
	
	*/

}


function editNotes(){
	var notes = document.getElementsByClassName("edit-notes");
	var noteContainer = document.getElementsByClassName("body-div");
	for (var i = 0; i < notes.length; i++){
		notes[i].addEventListener("click", function edit(){
			for(var i = 0; i < notes.length; i++){
				var textNode = document.createElement("TEXTAREA");
				var p = document.createElement("p");
				};
			var text = this.parentNode.parentNode.childNodes[1];
			textNode.innerText = text.childNodes[3].innerText;
			console.log(textNode.innerText);
			console.log(text.c)
			text.replaceChild(textNode, text.childNodes[3]); 	
			p.innerText = text.childNodes[3].value;
			console.log(text.childNodes[3]);
			if(this.innerText == "SAVE CHANGES"){
				this.innerText = "EDIT NOTES";
				text.replaceChild(p, text.childNodes[3])
				};
			this.innerText = "SAVE CHANGES";
			});
		}
	}
editNotes();

document.querySelectorAll(".delete").onclick = function deleteNotes(){
	/*
	placeholder code

	var objectRemove = document.getElementsByClassName("delete");
	
	
	Everytime the delete button is clicked, the specific class number, for example, removing[0], will be pushed to a variable then the code below will execute

	objectRemove.remove();

	*/
}

var numCorrect = 0;

document.querySelectorAll(".answer").onclick = function test_Taker(){
	/*
	placeholder code
	var clicks = true;
	if (clicks == true){
		parentdiv.replaceChild(child, p-element)
	}


	if (input.innerText == testTaker[0].answer){
	numCorrect++
	}

	*/
}
