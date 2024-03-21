import { Paragraph } from "./paragraph.js";
import { Button } from "./button.js";
import { TextInput } from "./text-input.js";
import { Select } from "./select.js";

class ElementFactory {
  static ElementType = {
    Paragraph,
    Button,
    TextInput,
    Select,
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

    if (elementType === ElementFactory.ElementType.Select) {
      return new Select(id);
    }
  }
}

export { ElementFactory };
