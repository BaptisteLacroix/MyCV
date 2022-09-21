const hiddenElements = document.querySelectorAll(".hide");

scrollAnim = () => {
	let windowHt = window.innerHeight;
	hiddenElements.forEach(elements => {
		let elementPos = elements.getBoundingClientRect().top;
		if (elementPos <= windowHt / 0.5 ) {
			elements.classList.add('active');
		}
	});
}

document.addEventListener("DOMContentLoaded", scrollAnim);

window.addEventListener('scroll', scrollAnim);