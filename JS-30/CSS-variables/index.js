const inputs = document.querySelectorAll(".controls input");

// DOESN'T WORK (Dymamic context w/ event listeners)
// const handleUpdate = () => {
// 	const value = "wtf";
// 	console.log(this.value); **refers to Window context (i.e. window.value)**
// };

function handleUpdate() {
	const suffix = this.dataset.sizing || "";

	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
