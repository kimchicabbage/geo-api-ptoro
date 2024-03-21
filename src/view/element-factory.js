import { Paragraph } from "./paragraph.js";
import { Button } from "./button.js";

class ElementFactory {
  static ElementType = {
    Paragraph,
    Button,
  };

  static createElement(elementType, id) {
    if (elementType === ElementFactory.ElementType.Paragraph) {
      return new Paragraph(id);
    }

    if (elementType === ElementFactory.ElementType.Button) {
      return new Button(id);
    }
  }
}

export { ElementFactory };
