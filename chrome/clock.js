const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");


function getTime() {
  const date = new Date();
  
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
  // 초 부분이 01로 나오도록 삼항연산자 이용
  /*
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  */
  // 초까지는 별로 안 알고 싶어 할 거 같으니까 분까지만 나오게  
  clockTitle.innerText = `${hours} : ${minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();