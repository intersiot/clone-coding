const form = document.querySelector(".js-form"), 
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// localStorage에 이름을 저장시키는 역할
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// form에서 submit을 할 경우 이벤트 처리
function handleSubmit(event) {
  // 이벤트의 디폴트 값을 금지함.
  event.preventDefault();
  // input에 입력된 값을 받음.
  const currentValue = input.value;
  // text=currentValue를 받아와서 보여줌.
  paintGreeting(currentValue);
  // 이름(currentValue)을 저장함
  saveName(currentValue);
}

// 유저의 이름을 요청
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// 현재 유저가 null이 아니라면 이름을 색칠하자
function paintGreeting(text) {
  // 이름을 색칠하려면 form을 숨겨야 함.
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// localStorage를 가져오는(불러오는) 역할
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // localStrage에 유저가 없을 경우
    askForName();
  } else {
    // localStrage에 유저가 있을 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();