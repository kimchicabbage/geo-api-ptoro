import { Observer } from "./observer.js";

class FindMyLocation extends Observer {
  currentLocationModel;
  findMyLocationButton;
  myLocationMessageParagraph;

  constructor(
    currentLocationModel,
    findMyLocationButton,
    myLocationMessageParagraph
  ) {
    super();
    this.currentLocationModel = currentLocationModel;
    this.findMyLocationButton = findMyLocationButton;
    this.myLocationMessageParagraph = myLocationMessageParagraph;
    this.init();
  }

  init() {
    this.findMyLocationButton.setOnClick(() => {
      this.findMe();
    });
  }

  generateMapLinkUrl(latitude, longitude) {
    return `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  }

  generateMyLocationMessage(latitude, longitude, altitude) {
    const latitudeString = latitude ? `위도: ${latitude}°` : "";
    const longitudeString = longitude ? `, 경도: ${longitude}°` : "";
    const altitudeString = altitude ? `, 고도: ${altitude}m` : "";

    return `${latitudeString}${longitudeString}${altitudeString}`;
  }

  handlePositionSuccess = (position) => {
    const { latitude, longitude, altitude } = position.coords;
    const timestamp = position.timestamp;

    console.debug({
      latitude,
      longitude,
      altitude,
      timestamp,
    });

    this.updateLocationModel(latitude, longitude, altitude);
    this.updateMyLocationMessage(latitude, longitude, altitude);
  };

  handlePositionError = (positionError) => {
    const errorMessages = {
      [GeolocationPositionError.PERMISSION_DENIED]:
        "GeolocationPositionError: PERMISSION_DENIED",
      [GeolocationPositionError.POSITION_UNAVAILABLE]:
        "GeolocationPositionError: POSITION_UNAVAILABLE",
      [GeolocationPositionError.TIMEOUT]: "GeolocationPositionError: TIMEOUT",
    };

    const message = errorMessages[positionError.code] || "알 수 없는 오류 발생";
    this.updateMyLocationMessage(`현재 위치를 가져올 수 없음: ${message}`);
  };

  updateLocationModel(latitude, longitude, altitude) {
    this.currentLocationModel.setLatitudeInDecimalDegrees(latitude ?? 0);
    this.currentLocationModel.setLongitudeInDecimalDegrees(longitude ?? 0);
    this.currentLocationModel.setAltitudeInMeters(altitude ?? 0);
  }

  updateMyLocationMessage(latitude, longitude, altitude) {
    if (latitude && longitude) {
      const mapLinkUrl = this.generateMapLinkUrl(latitude, longitude);
      this.myLocationMessageParagraph.setHyperReference(mapLinkUrl);
    }

    const message = this.generateMyLocationMessage(
      latitude,
      longitude,
      altitude
    );
    this.myLocationMessageParagraph.setTextContent(message || "위치 정보 없음");
  }

  findMe() {
    if (!navigator.geolocation) {
      this.updateMyLocationMessage("브라우저가 위치 정보를 지원하지 않음");
      return;
    }

    this.updateMyLocationMessage("위치 파악 중…");
    navigator.geolocation.getCurrentPosition(
      this.handlePositionSuccess,
      this.handlePositionError
    );
  }
}

export { FindMyLocation };
