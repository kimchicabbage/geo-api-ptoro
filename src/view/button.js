import { Element } from "./element.js";

class Button extends Element {
  constructor(id) {
    super(id);
  }

  setOnClick(onClick) {
    this.reference.addEventListener("click", onClick);
  }
}

export { Button };
