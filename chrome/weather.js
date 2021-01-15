/*
loaction에 대한 정보를 가져온다.
유저의 위치 정보를 가져와서 저장하고 
이미 저장한 값이 없다면 요청하고, 있다면 아무 것도 하지 않음.
*/
const weather = document.querySelector(".js-weather");
const API_KEY = "3950bbc8afca58a28a8540137dc6626d";
const COORDS = 'coords';

// 새로고침 없이 데이터를 가져옴(자바스크립트를 이용해서 특정 URL 호출)
// then함수는 데이터가 완전히 들어온 후에 호출한다. (이전에 사용하면 fetch가 완료되지 않을 수도 있음)
// 자바스크립트에서 뭔가 끝나길 기다리는 방법은 then 사용
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(response) {
    return response.json();
  }).then(function(json) {
    // console.log(json);
    // 온도 가져오기
    const temperature = json.main.temp;
    // 장소 가져오기
    const place = json.name;
    // console.log(temperature, place);
    weather.innerText = `${temperature} @ ${place}`;
  });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표를 가져오는데 성공했을 때 사용할 함수
function handleGeoSucces(position) {
  // 위도와 경도를 읽어오기
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // key와 value의 이름이 같다면 아래와 같이 입력할 수 있다.
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

// 좌표를 가져오는데 실패했을 때 사용할 함수
function handleGeoError() {
  console.log("Cant access geo location");
}

// 좌표를 요청하는 함수
function askForCoords() {
  // navigator API 사용
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    // 좌료를 요청
    askForCoords();
  } else {
    // getWeather함수 호출
    const parseCoords = JSON.parse(loadedCoords);
    // console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

// init함수 호출
init();