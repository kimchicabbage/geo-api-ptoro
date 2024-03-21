import { Location } from "./model/location.js";
import { FindMyLocation } from "./controller/find-my-location.js";
import { ElementFactory } from "./view/element-factory.js";

const currentLocationModel = new Location();
const findMyLocationButton = ElementFactory.createElement(
  ElementFactory.ElementType.Button,
  "find-me"
);
const myLocationMessageParagraph = ElementFactory.createElement(
  ElementFactory.ElementType.Paragraph,
  "current-location"
);
const findMyLocationController = new FindMyLocation(
  currentLocationModel,
  findMyLocationButton,
  myLocationMessageParagraph
);
