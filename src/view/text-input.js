import { Element } from "./element.js";

class TextInput extends Element {
  constructor(id) {
    super(id);
  }

  setText(value) {
    this.reference.value = value;
  }

  getText() {
    return this.reference.value;
  }

  setOnChange(onChange) {
    this.reference.addEventListener("change", onChange);
  }
}

export { TextInput };
