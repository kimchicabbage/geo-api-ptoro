import { Observer } from "./observer.js";

class UpdateTargetLocation extends Observer {
  currentLocationModel;
  targetLocationModel;
  latitudeTextInput;
  longitudeTextInput;
  altitudeTextInput;
  targetLocationSelector;
  locations = {
    seoul: { latitude: 37.5665, longitude: 126.978 },
    newyork: { latitude: 40.7128, longitude: -74.006 },
    paris: { latitude: 48.8566, longitude: 2.3522 },
  };

  constructor(
    currentLocationModel,
    targetLocationModel,
    latitudeTextInput,
    longitudeTextInput,
    altitudeTextInput,
    targetLocationSelector
  ) {
    super(() => {
      this.updateTargetLocation();
    });
    this.currentLocationModel = currentLocationModel;
    this.targetLocationModel = targetLocationModel;
    this.latitudeTextInput = latitudeTextInput;
    this.longitudeTextInput = longitudeTextInput;
    this.altitudeTextInput = altitudeTextInput;
    this.targetLocationSelector = targetLocationSelector;
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

    this.locations.seoul = { latitude: 37.5665, longitude: 126.978 };
    this.locations.neyork = { latitude: 40.7128, longitude: -74.006 };
    this.locations.paris = { latitude: 48.8566, longitude: 2.3522 };
    this.setupSelectorOptions();
  }

  setupSelectorOptions() {
    Object.keys(this.locations).forEach((key) => {
      this.targetLocationSelector.addOption(key, key);
    });

    this.targetLocationSelector.setOnChange(() => {
      const { latitude, longitude } =
        this.locations[this.targetLocationSelector.getValue()];
      this.setLatitudeText(latitude);
      this.targetLocationModel.setLatitudeInDecimalDegrees(latitude);
      this.setLongitudeText(longitude);
      this.targetLocationModel.setLongitudeInDecimalDegrees(longitude);
      this.setAltitudeText(0);
      this.targetLocationModel.setAltitudeInMeters(0);
    });
  }

  setupInputListener(input, callback) {
    input.setOnChange(callback);
  }

  updateTargetLocation() {
    const currentLatitude =
      this.currentLocationModel.getLatitudeInDecimalDegrees();
    this.setLatitudeText(currentLatitude);
    this.targetLocationModel.setLatitudeInDecimalDegrees(currentLatitude);

    const currentLongitude =
      this.currentLocationModel.getLongitudeInDecimalDegrees();
    this.setLongitudeText(currentLongitude);
    this.targetLocationModel.setLongitudeInDecimalDegrees(currentLongitude);

    const currentAltitude = this.currentLocationModel.getAltitudeInMeters();
    this.setAltitudeText(currentAltitude);
    this.targetLocationModel.setAltitudeInMeters(currentAltitude);
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
