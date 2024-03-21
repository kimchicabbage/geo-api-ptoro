const currentLocation = {
  latitude: 0.0,
  longitude: 0.0,
  accuracy: 0.0,
  altitude: 0.0,
  altitudeAccuracy: 0.0,
  heading: 0.0,
  speed: 0.0,
};

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

    currentLocation.latitude = latitude || 0;
    if (latitude !== null) {
      const latitudeInput = document.getElementById("latitude");
      latitudeInput.value = latitude;
    }
    currentLocation.longitude = longitude || 0;
    if (longitude !== null) {
      const longitudeInput = document.getElementById("longitude");
      longitudeInput.value = longitude;
    }
    currentLocation.altitude = altitude || 0;
    if (altitude !== null) {
      const altitudeInput = document.getElementById("altitude");
      altitudeInput.value = altitude;
    }
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

function calculateDistance() {
  const latitudeInput = document.getElementById("latitude");
  const longitudeInput = document.getElementById("longitude");
  const altitudeInput = document.getElementById("altitude");
  const resultDiv = document.getElementById("result");

  const latitude = parseFloat(latitudeInput.value);
  const longitude = parseFloat(longitudeInput.value);
  const altitude = parseFloat(altitudeInput.value || 0);
  console.log(latitude, longitude, altitude);

  if (isNaN(latitude) || isNaN(longitude) || isNaN(altitude)) {
    resultDiv.textContent = "올바른 위치 정보를 입력하세요.";
    return;
  }

  const distance = calculateDistanceBetweenPoints(
    latitude,
    longitude,
    altitude,
    currentLocation.latitude,
    currentLocation.longitude,
    currentLocation.altitude
  );

  resultDiv.textContent = `현재 위치로부터 ${distance.toFixed(
    2
  )}km 떨어져 있습니다.`;
}

function calculateDistanceBetweenPoints(lat1, lon1, alt1, lat2, lon2, alt2) {
  const R = 6371; // 지구의 반지름 (단위: km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const dAlt = alt2 - alt1;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.sqrt(distance * distance + dAlt * dAlt); // 3차원 거리 계산
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

document
  .getElementById("calculate")
  .addEventListener("click", calculateDistance);
