import { Observer } from "./observer.js";

class UpdateTargetLocation extends Observer {
  currentLocationModel;
  targetLocationModel;
  latitudeTextInput;
  longitudeTextInput;
  altitudeTextInput;

  constructor(
    currentLocationModel,
    targetLocationModel,
    latitudeTextInput,
    longitudeTextInput,
    altitudeTextInput
  ) {
    super(() => {
      this.updateTargetLocation();
    });
    this.currentLocationModel = currentLocationModel;
    this.targetLocationModel = targetLocationModel;
    this.latitudeTextInput = latitudeTextInput;
    this.longitudeTextInput = longitudeTextInput;
    this.altitudeTextInput = altitudeTextInput;
    this.init();
  }

  init() {
    this.setupInputListener(this.latitudeTextInput, () => {
      this.targetLocationModel.setLatitudeInDecimalDegrees(
        this.latitudeTextInput.getText()
      );
      this.setLatitudeText(
        this.targetLocationModel.getLatitudeInDecimalDegrees()
      );
    });

    this.setupInputListener(this.longitudeTextInput, () => {
      this.targetLocationModel.setLongitudeInDecimalDegrees(
        this.longitudeTextInput.getText()
      );
      this.setLongitudeText(
        this.targetLocationModel.getLongitudeInDecimalDegrees()
      );
    });

    this.setupInputListener(this.altitudeTextInput, () => {
      this.targetLocationModel.setAltitudeInMeters(
        this.altitudeTextInput.getText()
      );
      this.setAltitudeText(this.targetLocationModel.getAltitudeInMeters());
    });
  }

  setupInputListener(input, callback) {
    input.setOnChange(callback);
  }

  updateTargetLocation() {
    this.setLatitudeText(
      this.currentLocationModel.getLatitudeInDecimalDegrees()
    );
    this.targetLocationModel.setLatitudeInDecimalDegrees(
      this.latitudeTextInput.getText()
    );

    this.setLongitudeText(
      this.currentLocationModel.getLongitudeInDecimalDegrees()
    );
    this.targetLocationModel.setLongitudeInDecimalDegrees(
      this.longitudeTextInput.getText()
    );

    this.setAltitudeText(this.currentLocationModel.getAltitudeInMeters());
    this.targetLocationModel.setAltitudeInMeters(
      this.altitudeTextInput.getText()
    );
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

export { UpdateTargetLocation };
