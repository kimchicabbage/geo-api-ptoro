function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const {
      latitude,
      longitude,
      accuracy,
      altitude,
      altitudeAccuracy,
      heading,
      speed,
    } = position.coords;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `위도: ${latitude} °, 경도: ${longitude} °, 위도 경도 정확도: ${accuracy}, 고도: ${altitude}, 고도 정확도: ${altitudeAccuracy}, 방위: ${heading}, 속도: ${speed}`;
  }

  function error(positionError) {
    let message = positionError.message;
    if (positionError instanceof GeolocationPositionError) {
      switch (positionError.code) {
        case GeolocationPositionError.PERMISSION_DENIED:
          message = "GeolocationPositionError: PERMISSION_DENIED";
          break;

        case GeolocationPositionError.POSITION_UNAVAILABLE:
          message = "GeolocationPositionError: POSITION_UNAVAILABLE";
          break;

        case GeolocationPositionError.TIMEOUT:
          message = "GeolocationPositionError: TIMEOUT";
          break;
      }
    }
    console.error(message);
    status.textContent = "현재 위치를 가져올 수 없음";
  }

  if (!navigator.geolocation) {
    status.textContent = "브라우저가 위치 정보를 지원하지 않음";
  } else {
    status.textContent = "위치 파악 중…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
