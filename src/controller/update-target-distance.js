import { Observer } from "./observer.js";

class UpdateTargetDistance extends Observer {
  currentLocationModel;
  latitudeTextInput;
  longitudeTextInput;
  altitudeTextInput;
  constructor(
    currentLocationModel,
    latitudeTextInput,
    longitudeTextInput,
    altitudeTextInput
  ) {
    super(() => {
      this.updateTargetDistance();
    });
    this.currentLocationModel = currentLocationModel;
    this.latitudeTextInput = latitudeTextInput;
    this.longitudeTextInput = longitudeTextInput;
    this.altitudeTextInput = altitudeTextInput;
  }

  updateTargetDistance() {
    this.setLatitudeText(
      this.currentLocationModel.getLatitudeInDecimalDegrees()
    );
    this.setLongitudeText(
      this.currentLocationModel.getLongitudeInDecimalDegrees()
    );
    this.setAltitudeText(this.currentLocationModel.getAltitudeInMeters());
  }

  setLatitudeText(latitude) {
    this.latitudeTextInput.setText(latitude);
  }

  setLongitudeText(longitude) {
    this.longitudeTextInput.setText(longitude);
  }

  setAltitudeText(altitude) {
    this.altitudeTextInput.setText(altitude);
  }
}

export { UpdateTargetDistance };
