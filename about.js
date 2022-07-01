console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function complimentUser(evt) {
	evt.preventDefault();

	alert("You are a baller! Keep up the good work!");

}

let comp = document.querySelector("#duck");

comp.addEventListener('mouseover', complimentUser);
