import { Location } from "./model/location.js";
import { FindMyLocation } from "./controller/find-my-location.js";
import { ElementFactory } from "./view/element-factory.js";
import { UpdateTargetDistance } from "./controller/update-target-distance.js";

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

const latitudeTextInput = ElementFactory.createElement(
  ElementFactory.ElementType.TextInput,
  "latitude"
);
const longitudeTextInput = ElementFactory.createElement(
  ElementFactory.ElementType.TextInput,
  "longitude"
);
const altitudeTextInput = ElementFactory.createElement(
  ElementFactory.ElementType.TextInput,
  "altitude"
);

const updateTargetDistanceContoller = new UpdateTargetDistance(
  currentLocationModel,
  latitudeTextInput,
  longitudeTextInput,
  altitudeTextInput
);
currentLocationModel.addObserver(updateTargetDistanceContoller);
