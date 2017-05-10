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


function editNotes() {
    var notes = document.getElementsByClassName("edit-notes");
    var noteContainer = document.getElementsByClassName("body-div");
    for (var i = 0; i < notes.length; i++) {
        notes[i].addEventListener("click", function edit() {
        	for (var i = 0; i < notes.length; i++) {
                var textNode = document.createElement("TEXTAREA");
                textNode.setAttribute("class", "body-items");
                textNode.setAttribute("rows", "5");
                textNode.setAttribute("cols", "63");
            };
            var text = this.parentNode.parentNode.childNodes[1];
            textNode.innerText = text.childNodes[3].innerHTML;
            if (this.innerText == "SAVE CHANGES") {
            	textNode.innerText = text.childNodes[3].value;
          		text.childNodes[3].style.background = "none";
                text.childNodes[3].style.border = "none";
                text.childNodes[3].disabled = "disabled";
                this.innerText = "EDIT NOTES";
            } else {
            	this.innerText = "SAVE CHANGES";
                text.replaceChild(textNode, text.childNodes[3]);
            };
            console.log(text.childNodes[3].nodeName);
        });
    }
}
editNotes();

function deleteNotes(){

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
