const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
// 할일 항목을 저장 할 배열을 empty로 만든다.
// const toDos = [];
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  // toDos를 가져와서 로컬에 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  // paintToDo에 li를 만든다.
  const li = document.createElement("li");
  // 삭제 버튼을 만든다.
  const delBtn = document.createElement("button");
  // span을 만든다.
  const span = document.createElement("span");
  // 배열 안에 id의 value 값을 보기 좋게 newId로 따로 생성
  const newId = toDos.length + 1;
  // 아이콘을 만든다.
  // button, span 안에 text로 내용을 채움.
  delBtn.innerText = `x`;
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  // empty로 만든 li안에 sapn과 button을 넣음.
  li.appendChild(span);
  li.appendChild(delBtn);
  // li에 id를 추가
  li.id = newId;
  toDoList.appendChild(li);
  // 해야 할 일이 생성될 때마다 toDos에 배열을 만든다.
  // 1. 일단 toDoObjs를 만든다.
  // key, value식으로 저장하는 이유는 로컬스토리지에도 투두를 저장해야 하기 때문
  const toDoObj = {
    text: text,
    id: newId
  };
  saveToDos();
  toDos.push(toDoObj);
  // saveToDos(); toDos에 저장 전에 saveToDos() 함수를 호출하는 것이 좋다.
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  // 엔터를 입력하면 todo를 생성하고 삭제
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // toDos가 null이 아니면
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function(toDo) {
      // console.log(toDo.text);
      paintToDo(toDo.text);
    });
  } 
}

function init() {
  loadToDos();
  // todo 생성
  toDoForm.addEventListener("submit", handleSubmit);
}

// init함수 호출
init();