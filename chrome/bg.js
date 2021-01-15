const body = document.querySelector("body");
const IMG_NUMBER = 6;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  // +1을 하는 이유는 Math.random() 함수가 0을 줄 수 있기 때문!
  // body.appendChild(image);
  // 이미지 크기 조절 위한 이벤트
  /* API에서 작업 중이라면 필요한 코드이지만 원격에선 no필요
  image.addEventListener("loadend", handleImgLoad); */
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * 6);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

/*
math.random(): 숫자를 랜덤으로 뽑음.
math.floor(): 숫자를 랜덤으로 뽑는데 반내림.
math.ceil(): 숫자를 랜덤으로 뽑는데 반올림.
*/

init();