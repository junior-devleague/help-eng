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
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].border = "none";
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].background = "none";
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].disabled = "disabled";
        notes[i].addEventListener("click", function edit() {
            var text = this.parentNode.parentNode.childNodes[1];
            if (text.childNodes[3].disabled == true) {
                text.childNodes[3].disabled = false;
                text.childNodes[3].style.background = "white";
                text.childNodes[3].style.border = "black solid 0.5px";
                this.innerText = "SAVE CHANGES"
            } else if (text.childNodes[3].disabled == false) {
                text.childNodes[3].disabled = true;
                text.childNodes[3].style.background = "none";
                text.childNodes[3].style.border = "none";
                this.innerText = "EDIT NOTES";
            };
        });
        /*var storedNotes = [];
        for (var i = 0; i < notes.length; i++) {
            storedNotes.push("");
        }
        function noteSaver() {
        	var notes = document.getElementsByClassName("edit-notes");
            storedNotes.push(localStorage.setItem("savedNotes", notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value));
        };
        storedNotes.forEach(noteSaver);
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value = localStorage.getItem("savedNotes");
        console.log(localStorage.getItem("savedNotes"))*/
    };
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
