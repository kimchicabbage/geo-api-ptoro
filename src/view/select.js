import { Element } from "./element.js";

class Select extends Element {
  constructor(id) {
    super(id);
  }

  addOption(value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    this.reference.appendChild(option);
  }

  clearOptions() {
    this.reference.innerHTML = "";
  }

  setOnChange(onChange) {
    this.reference.addEventListener("change", onChange);
  }

  getValue() {
    return this.reference.options[this.reference.selectedIndex].value;
  }
}

export { Select };
