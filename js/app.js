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

var storeEdit_Notes = [document.getElementsByClassName("edit-notes")[0],
document.getElementsByClassName("edit-notes")[1],
document.getElementsByClassName("edit-notes")[2]];
var notes = document.getElementsByClassName("edit-notes");
var noteContainer = document.getElementsByClassName("body-div");

function editNotes(){
	/*
	placeholder code
	
	When clicked it will replace the parent-divs' notes with an input, then will be converted back to a p element by clicking the edit-notes element(the name will be changed to "done"), saving whatever was typed inside the input.

	*/
	var notes = document.getElementsByClassName("edit-notes");
    for (var i = 0; i < notes.length; i++){
    	var noteContainer = document.getElementsByClassName("body-div");
    	var formNode = document.createElement("form");
    	var inputNode = document.createElement("input");
    	formNode.appendChild(inputNode);
   		var ncChildren = noteContainer[i].childNodes[1];
   		notes[i].addEventListener("click", function edit(){
   		var noteContainer = document.getElementsByClassName("body-div");
   		var formNode = document.createElement("form");
    	var inputNode = document.createElement("input");
      	noteContainer[i].removeChild(noteContainer[i].childNodes[1]);
      	noteContainer[i].insertBefore(formNode, noteContainer[i].firstChild)
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
