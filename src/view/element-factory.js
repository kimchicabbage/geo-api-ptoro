import { Paragraph } from "./paragraph.js";
import { Button } from "./button.js";
import { TextInput } from "./text-input.js";

class ElementFactory {
  static ElementType = {
    Paragraph,
    Button,
    TextInput,
  };

  static createElement(elementType, id) {
    if (elementType === ElementFactory.ElementType.Paragraph) {
      return new Paragraph(id);
    }

    if (elementType === ElementFactory.ElementType.Button) {
      return new Button(id);
    }

    if (elementType === ElementFactory.ElementType.TextInput) {
      return new TextInput(id);
    }
  }
}

export { ElementFactory };
