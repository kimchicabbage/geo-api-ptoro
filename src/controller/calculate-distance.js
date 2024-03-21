import { Observer } from "./observer.js";

class CalculateDistance extends Observer {
  distanceModel;
  currentLocationModel;
  targetLocationModel;
  calculateDistanceButton;
  distanceMessageParagraph;
  constructor(
    distanceModel,
    currentLocationModel,
    targetLocationModel,
    calculateDistanceButton,
    distanceMessageParagraph
  ) {
    super(() => {
      this.updateDistanceMessage();
    });
    this.distanceModel = distanceModel;
    this.currentLocationModel = currentLocationModel;
    this.targetLocationModel = targetLocationModel;
    this.calculateDistanceButton = calculateDistanceButton;
    this.distanceMessageParagraph = distanceMessageParagraph;
    this.init();
  }

  init() {
    this.calculateDistanceButton.setOnClick(() => {
      this.distanceModel.updateDistances(
        this.currentLocationModel,
        this.targetLocationModel
      );
    });
  }

  updateDistanceMessage() {
    const distance = this.distanceModel.getSpaceDistanceInMeter();
    const message = this.generateDistanceMessage(distance);
    this.distanceMessageParagraph.setTextContent(message);
  }

  generateDistanceMessage(distance) {
    return `${distance}m`;
  }
}

export { CalculateDistance };
