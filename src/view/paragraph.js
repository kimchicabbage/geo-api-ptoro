import { Element } from "./element.js";

class Paragraph extends Element {
  constructor(id) {
    super(id);
    this.setHyperReference("");
    this.setTextContent("");
  }

  setTextContent(textContent) {
    this.reference.textContent = textContent;
  }

  setHyperReference(href) {
    this.reference.href = href;
  }
}

export { Paragraph };
