const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    console.dir(event.target); //event가 일어난 버튼이 target임
    const btn = event.target;
    
    const li = btn.parentNode; //btn의 부모 element에 접근,evnet가 일어난 버튼을 감싸고 있는 li
    toDoList.removeChild(li); //toDoList의 자식중 해당 li제거

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);  //이벤트가 일어난 버튼의 li를 제외한, 나머지만 반환됨(이벤트가 벌어진 li만 없어진것임 === 제거됬다는말)
    })                                       //parseInt를 쓰면 string이 숫자로 바뀜
    //filter는 마치 forEach에서 function을 실행하는것과같이
    //각각마다 적용되는것임
    toDos = cleanToDos;
    saveToDos(); // 이 함수는 toDos를 localStorage에 저장한다.
}


//saveToDos 는, toDos를 가져와서 로컬Storage에 저장하는 일을 하게된다.
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//localStorage에선 String만 저장할수있으므로 stringify를 써줘야함
}                                                          //자바스크립트 object를 string으로 바꿔준다

function paintToDo(text){
    console.log(text);
    //querySelector은 무언가를 가져올때씀, 뭔가를 생성하기를 원한다면??!!
    //li element를 생성해보자
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click",deleteToDo);  //버튼에 click 이벤트 리스너를 생성함
    span.innerText = text
    
    //중요!!!!!!!!!!!!!
    //뭔가를 그의 father element안에 넣고싶을때, appendChild()를쓴다.
    //span을 li안에 넣고, 버튼을 li안에 넣어보자
    //li가 appendChild한다 뭐를?? span을
    //<li> span, button </li> 이런느낌임
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    //li에 id속성을 추가한다. li가 id속성을 가지고있어야,
    //나중에 삭제기능만들때, li의 id를 이용하여 삭제기능을 만들기때문에
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();//추가된후의 배열을 localStrage에 저장함
    //localStorage를 보면 Key : toDos , Value : [object Object],[object Object]..이렇게 저장되어있음
    //localStorage는 String만 저장할수있으므로, toDos를저장하면 위에서 처럼 표기됨
    //고로 stringify를 써야함
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function something(toDo){
    console.log(toDo.text);
    paintToDo(toDo.text);
};
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        //데이터를 전달할때, 자바스크립트가 그걸 다룰수 있도록
        //string-> object로 바꿔주는 기능임 : JSON.parse
        
        //object->string으로 변환해주는건 JSON.stringify임
        console.log(parsedToDos);
        parsedToDos.forEach(something); //forEach :paredToDos배열의 각각에 함수를 실행시켜줌
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();