$("#btn_pilihpaket a").on('click', function (event) {
	// Make sure this.hash has a value before overriding default behavior
	console.log(this.hash)
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
		// // Store hash
		let hash = this.hash;
		// // Using jQuery's animate() method to add smooth page scroll
		// // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000)
	} // End if
});

let coll = document.getElementsByClassName("wrap_faqjudul");
let i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}