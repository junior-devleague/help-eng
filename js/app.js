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

var noteText = ["The Kamehameha butterfly is one of the two species of butterfly native to Hawaii. The Hawaiian name is pulelehua...", "Kohala is the name of the northwest portion of the island of Hawaii in the Hawaiian Archipelago. In ancient Hawaii it was often ruled by an independent High Chief called the Ali'i Nui. In modern times it is divided into two districts of Hawaii County", "A great warrior, diplomat and leader, King Kamehameha I united the Hawaiian Islands into one royal kingdom in 1810 after years of conflict. Kamehameha I was destined for greatness from birth. Hawaiian legend prophesized that a light in the sky with feathers like a bird would signal the birth of a great chief."];

function editNotes() {
    var notes = document.getElementsByClassName("edit-notes");
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value !== localStorage.getItem("savedNotes" + i)){
            notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value = localStorage.getItem("savedNotes" + i);
            }
        };
    var noteContainer = document.getElementsByClassName("body-div");
    for (var i = 0; i < notes.length; i++) {
    	if (notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value == ""){
    		notes[i].parentNode.parentNode.childNodes[1].childNodes[3].value = noteText[i];
    	};
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
        if (this.parentNode.childNodes[1].value == testTaker[this.classList.item(1)].answer && this.parentNode.childNodes[1].value !== "") {
            score++;
            document.getElementById("score").innerText = score + "/3";
            this.parentNode.childNodes[1].disabled = true;
            this.innerText = "Correct!";
            } else if (this.parentNode.childNodes[1].value !== testTaker[this.classList.item(1)].answer && this.parentNode.childNodes[1].value !== "") {
            		this.innerText = "Wrong!";
            }
        };
    };
};

testSet();