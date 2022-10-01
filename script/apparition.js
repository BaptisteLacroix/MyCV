/* Selecting all the elements with the class of hide. */
const hiddenElements = document.querySelectorAll(".hide");

/* A function that is called when the page loads and when the user scrolls. It is checking the position of the
elements and adding a class to them when they are in the viewport. */
scrollAnim = () => {
	let windowHt = window.innerHeight;
	hiddenElements.forEach(elements => {
		let elementPos = elements.getBoundingClientRect().top;
		if (elementPos <= windowHt / 0.35) {
			elements.classList.add('active');
		}
	});
}

/* Listening for the DOM to load and then calling the scrollAnim function. */
document.addEventListener("DOMContentLoaded", scrollAnim);

/* Listening for the user to scroll and then calling the scrollAnim function. */
window.addEventListener('scroll', scrollAnim);
