import { Observable } from "./observable.js";
import { Location } from "./location";

const EARTH_RADIUS_IN_METER = 6371000.0;

class Distance extends Observable {
  distances = {
    plane,
    space,
    altitude,
  };
  constructor(location1, location2 = new Location()) {
    super();
    this.distances = {
      plane: 0.0,
      space: 0.0,
      altitude: 0.0,
    };

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
    const latitudeDiffInMeter = this.calculateDifferenceInMeter(
      locationFrom.getLatitudeInDecimalDegrees(),
      locationTo.getLatitudeInDecimalDegrees()
    );

    const longitudeDiffInMeter = this.calculateDifferenceInMeter(
      locationFrom.getLongitudeInDecimalDegrees(),
      locationTo.getLongitudeInDecimalDegrees()
    );

    this.distances.plane =
      Math.sqrt(
        Math.pow(latitudeDiffInMeter, 2) + Math.pow(longitudeDiffInMeter, 2)
      ) * EARTH_RADIUS_IN_METER;

    const altitudeDiffInMeter = this.calculateAltitudeDiffInMeter(
      locationFrom.getAltitudeInMeters(),
      locationTo.getAltitudeInMeters()
    );

    this.distances.altitude = altitudeDiffInMeter;

    this.distances.space =
      Math.sqrt(
        Math.pow(latitudeDiffInMeter, 2) +
          Math.pow(longitudeDiffInMeter, 2) +
          Math.pow(altitudeDiffInMeter, 2)
      ) * EARTH_RADIUS_IN_METER;
  }

  calculateDifferenceInMeter(coord1, coord2) {
    const diff = Math.abs(coord1 - coord2);
    return this.degreeToRadian(diff) * EARTH_RADIUS_IN_METER;
  }

  calculateAltitudeDiffInMeter(altitude1, altitude2) {
    return Math.abs(altitude1 - altitude2);
  }

  degreeToRadian(degree) {
    return degree * (Math.PI / 180.0);
  }
}

export { Distance };
