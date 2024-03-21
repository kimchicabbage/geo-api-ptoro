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
    const latitude = Number(latitudeInDecimalDegrees);
    if (Number.isNaN(latitude)) {
      return;
    }
    this.location.latitude = latitude;
    this.notifyObservers();
  }

  setLongitudeInDecimalDegrees(longitudeInDecimalDegrees) {
    const longitude = Number(longitudeInDecimalDegrees);
    if (Number.isNaN(longitude)) {
      return;
    }
    this.location.longitude = longitude;
    this.notifyObservers();
  }

  setAltitudeInMeters(altitudeInMeters) {
    const altitude = Number(altitudeInMeters);
    if (Number.isNaN(altitude)) {
      return;
    }
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
