class Location {
  location = {
    latitude: 0.0,
    longitude: 0.0,
    altitude: 0.0,
  };

  constructor(
    latitudeInDecimalDegrees = 0.0,
    longitudeInDecimalDegrees = 0.0,
    altitudeInMeters = 0.0
  ) {
    this.location.latitude = latitudeInDecimalDegrees;
    this.location.longitude = longitudeInDecimalDegrees;
    this.location.altitude = altitudeInMeters;
  }

  setLatitudeInDecimalDegrees(latitudeInDecimalDegrees) {
    this.location.latitude = latitudeInDecimalDegrees;
  }
  setLongitudeInDecimalDegrees(longitudeInDecimalDegrees) {
    this.location.longitude = longitudeInDecimalDegrees;
  }
  setAltitudeInMeters(altitudeInMeters) {
    this.location.altitude = altitudeInMeters;
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
