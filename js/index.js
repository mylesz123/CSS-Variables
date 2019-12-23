let controlInputs = document.querySelectorAll(".controls input");

function handleInputChange() {
    let px = this.dataset.sizing || "";
    // set any element's style property to css var name & associated value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
}

controlInputs.forEach(input => input.addEventListener("change", handleInputChange));
controlInputs.forEach(input => input.addEventListener("mousemove", handleInputChange));