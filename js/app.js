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
        localStorage.setItem("savedNotes" + i, notes[i].parentNode.parentNode.childNodes[1].childNodes[3].innerText);
    	};
    for (var i = 0; i < notes.length; i++) {
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].disabled = "disabled";
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].setAttribute("class", i);
        notes[i].addEventListener("click", function edit() {
            var text = this.parentNode.parentNode.childNodes[1];
            console.log(text.childNodes[3].innerText);
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
                localStorage.setItem("savedNotes" + text.childNodes[3].getAttribute("class"), text.childNodes[3].value);
            };
        });
    for (var i = 0; i < notes.length; i++) {
    	if (notes[i].parentNode.parentNode.childNodes[1].childNodes[3].innerText !== localStorage.getItem("savedNotes" + i)) {
    		notes[i].parentNode.parentNode.childNodes[1].childNodes[3].innerText = localStorage.getItem("savedNotes" + i)
    		};
    	};
    };
};

editNotes();

function deleteNotes(){
    var deleter = document.getElementsByClassName("delete");
    for (i = 0; i < deleter.length; i++){
        deleter[i].addEventListener("click", function deleting(){
            var container = this.parentNode.parentNode;
            container.remove();
        })
    };
};

deleteNotes();