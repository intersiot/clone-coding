const dateContainer = document.querySelector(".js-date"),
  dateTitle = dateContainer.querySelector("h1");


function getDate() {
  const d = new Date();
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // 년도 가져오기
  const year = d.getFullYear();
  // 월 가져오기
  const month = d.getMonth() + 1;
  // 일 가져오기
  const date = d.getDate();
  // 요일 가져오기
  const day = week[d.getDay()];
  // console.log(year, month, date, day);
  const dateFormat = `${year}.${month}.${date}, ${day}`;
  dateTitle.innerText = dateFormat;
}

function init() {
  getDate();
}

init();