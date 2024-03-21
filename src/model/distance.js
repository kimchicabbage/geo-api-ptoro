import { Observable } from "./observable.js";
import { Location } from "./location.js";

const EARTH_RADIUS_IN_METER = 6371000.0;

class Distance extends Observable {
  distances = {
    plane: 0.0,
    space: 0.0,
    altitude: 0.0,
  };

  constructor(location1, location2 = new Location()) {
    super();
    this.updateDistances(location1, location2);
  }

  getPlaneDistanceInMeter() {
    return this.distances.plane;
  }

  getSpaceDistanceInMeter() {
    return this.distances.space;
  }

  getAltitudeDistanceInMeter() {
    return this.distances.altitude;
  }

  updateDistances(locationFrom, locationTo) {
    const latitudeInRadian1 = this.degreeToRadian(
      locationFrom.getLatitudeInDecimalDegrees()
    );
    const latitudeInRadian2 = this.degreeToRadian(
      locationTo.getLatitudeInDecimalDegrees()
    );
    const longitudeInRadian1 = this.degreeToRadian(
      locationFrom.getLongitudeInDecimalDegrees()
    );
    const longitudeInRadian2 = this.degreeToRadian(
      locationTo.getLongitudeInDecimalDegrees()
    );

    const deltaLatitude = latitudeInRadian1 - latitudeInRadian2;
    console.debug({ deltaLatitude });
    const deltaLongitude = longitudeInRadian1 - longitudeInRadian2;
    console.debug({ deltaLongitude });
    const a =
      Math.pow(Math.sin(deltaLatitude / 2), 2) +
      Math.cos(latitudeInRadian1) *
        Math.cos(latitudeInRadian2) *
        Math.pow(Math.sin(deltaLongitude / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    this.distances.plane = c * EARTH_RADIUS_IN_METER;

    const deltaAltitude =
      locationFrom.getAltitudeInMeters() - locationTo.getAltitudeInMeters();

    this.distances.altitude = Math.abs(deltaAltitude);

    this.distances.space = Math.sqrt(
      Math.pow(this.distances.plane, 2) + Math.pow(this.distances.altitude, 2)
    );

    this.notifyObservers();
  }

  degreeToRadian(degree) {
    return degree * (Math.PI / 180.0);
  }
}

export { Distance };
