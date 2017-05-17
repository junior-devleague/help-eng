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

function editNotes() {
    var notes = document.getElementsByClassName("edit-notes");
    var noteContainer = document.getElementsByClassName("body-div");
    for (var i = 0; i < notes.length; i++) {
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value = localStorage.getItem("savedNotes" + i);
    };
    for (var i = 0; i < notes.length; i++) {
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].disabled = "disabled";
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].setAttribute("class", i);
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
                localStorage.setItem("savedNotes" + text.childNodes[3].getAttribute("class"), text.childNodes[3].value);
            };
        });
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