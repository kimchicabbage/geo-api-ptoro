import { Observable } from "./observable.js";

class Location extends Observable {
  location = {
    latitude,
    longitude,
    altitude,
  };

  constructor(
    latitudeInDecimalDegrees = 0.0,
    longitudeInDecimalDegrees = 0.0,
    altitudeInMeters = 0.0
  ) {
    super();
    this.location.latitude = latitudeInDecimalDegrees;
    this.location.longitude = longitudeInDecimalDegrees;
    this.location.altitude = altitudeInMeters;
  }

  setLatitudeInDecimalDegrees(latitudeInDecimalDegrees) {
    this.location.latitude = latitudeInDecimalDegrees;
    this.notifyObservers();
  }
  setLongitudeInDecimalDegrees(longitudeInDecimalDegrees) {
    this.location.longitude = longitudeInDecimalDegrees;
    this.notifyObservers();
  }
  setAltitudeInMeters(altitudeInMeters) {
    this.location.altitude = altitudeInMeters;
    this.notifyObservers();
  }

  getLatitudeInDecimalDegrees() {
    return this.location.latitude;
  }
  getLongitudeInDecimalDegrees() {
    return this.location.longitude;
  }
  getAltitudeInMeters() {
    return this.location.altitude;
  }
}

export { Location };
