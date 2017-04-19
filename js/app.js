var testTaker = [
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
]

function note_Taker(){
	var div = document.createElement("DIV");
	/*
	There will be a button that's named "Add Notes",
	when clicked, will make another div with the same class as the other notes. But, it will appear as an input with the "Done" button replacing the edit-notes button. When "Done" is clicked, the input text will be saved into a variable and be used as the inner text of the p element that will replace the input element
	
	*/

}

document.querySelectorAll(".edit-notes").onclick = function editNotes(){
	/*
	placeholder code
	
	When clicked it will replace the parent-divs' notes with an input, then will be converted back to a p element by clicking the edit-notes element(the name will be changed to "done"), saving whatever was typed inside the input.

	*/
}

document.querySelectorAll(".delete").onclick = function deleteNotes(){
	/*
	placeholder code

	var removing = document.getElementsByClassName("delete");
	
	
	Everytime the delete button is clicked, the specific class number, for example, removing[0], will be pushed to a variable then the code below will execute

	removing.remove();

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
