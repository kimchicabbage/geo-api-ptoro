import { Location } from "./model/location.js";
import { FindMyLocation } from "./controller/find-my-location.js";
import { ElementFactory } from "./view/element-factory.js";
import { UpdateTargetLocation } from "./controller/update-target-location.js";
import { CalculateDistance } from "./controller/calculate-distance.js";
import { Distance } from "./model/distance.js";

const initializeComponents = () => {
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
  const targetLocationModel = new Location();
  const updateTargetDistanceContoller = new UpdateTargetLocation(
    currentLocationModel,
    targetLocationModel,
    latitudeTextInput,
    longitudeTextInput,
    altitudeTextInput
  );
  currentLocationModel.addObserver(updateTargetDistanceContoller);

  const distanceModel = new Distance(currentLocationModel, targetLocationModel);
  const calculateDistanceButton = ElementFactory.createElement(
    ElementFactory.ElementType.Button,
    "calculate"
  );
  const distanceMessageParagraph = ElementFactory.createElement(
    ElementFactory.ElementType.Paragraph,
    "result"
  );
  const calculateDistanceController = new CalculateDistance(
    distanceModel,
    currentLocationModel,
    targetLocationModel,
    calculateDistanceButton,
    distanceMessageParagraph
  );
  distanceModel.addObserver(calculateDistanceController);
};

initializeComponents();
