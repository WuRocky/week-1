let add = document.querySelectorAll(".img-star");

add.forEach((item) => {
	let img = item.parentElement;

	img.addEventListener("click", (e) => {
		let img = e.target;

		img.classList.toggle("done");
	});
});
