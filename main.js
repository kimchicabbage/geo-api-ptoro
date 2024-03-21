function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `위도: ${latitude} °, 경도: ${longitude} °`;
  }

  function error(positionError) {
    console.error(positionError);
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