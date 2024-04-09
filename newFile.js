document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");
	let dogImage;

	// Create dog image element
	function createDogImage() {
		dogImage = document.createElement("img");
		dogImage.src = "dog.gif"; // Replace 'dog.gif' with your dog image path
		dogImage.classList.add("moving-dog");
		body.appendChild(dogImage);
	}

	// Update dog image position on mousemove event
	function updateDogPosition(event) {
		const offsetX = -50; // Half of the width of the moving dog
		const offsetY = -50; // Half of the height of the moving dog
		const posX = event.clientX + offsetX;
		const posY = event.clientY + offsetY;
		dogImage.style.left = posX + "px";
		dogImage.style.top = posY + "px";
	}

	// Remove dog image element
	function removeDogImage() {
		if (dogImage && dogImage.parentNode) {
			dogImage.parentNode.removeChild(dogImage);
		}
	}

	// Create dog image when the page loads
	createDogImage();

	// Update dog image position on mousemove event
	document.addEventListener("mousemove", updateDogPosition);

	// Remove dog image when the page unloads
	window.addEventListener("unload", removeDogImage);
});
