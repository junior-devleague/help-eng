var testTaker = [
	{
		question : "What is the hawaiian name of the Kamehameha butterfly?",
		answer : "Puelehua"
	},
	{
		question : "Who was usually in control Kohala?",
		answer : "Ali'i Nui"
	},
	{
		question : "When was the Hawaiian Islands united?",
		answer : "1810"
	}
];

function editNotes() {
    var notes = document.getElementsByClassName("edit-notes");
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value !== localStorage.getItem("savedNotes" + i)){
            notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value = localStorage.getItem("savedNotes" + i);
            }
        };
    var noteContainer = document.getElementsByClassName("body-div");
    for (var i = 0; i < notes.length; i++) {
        localStorage.setItem("savedNotes" + i, notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value);
    };
    for (var i = 0; i < notes.length; i++) {
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].disabled = true;
        notes[i].parentNode.parentNode.childNodes[1].childNodes[3].setAttribute("class", i);
        notes[i].addEventListener("click", function edit() {
            var text = this.parentNode.parentNode.childNodes[1];
            if (text.childNodes[3].disabled == true) {
                text.childNodes[3].disabled = false;
                text.childNodes[3].style.background = "white";
                text.childNodes[3].style.border = "black solid 0.5px";
                this.innerText = "SAVE CHANGES";
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

function testSet() {
var q = document.getElementsByClassName("questions");
var s = document.getElementsByClassName("submit");
var score = 0;
for (var i = 0; i < q.length; i++) {
    q[i].innerText = testTaker[i].question
    s[i].classList.add(i);
    s[i].onclick = function(){
        if (this.parentNode.childNodes[1].value == testTaker[this.classList.item(1)].answer) {
            score++;
            document.getElementById("score").innerText = score;
            this.parentNode.childNodes[1].disabled = true;
            };
        };
    };
};

testSet();