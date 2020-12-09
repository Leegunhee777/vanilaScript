//<id = "title" 인 HTML 요소를 가져와서,
//title에 click이벤트가 생길때마다, title의 style 값에 접근하여 BASE_COLOR(white)  , OTHER_COLOR(blue) 바꾸는 예제임
const title = document.querySelector("#title");

const BASE_COLOR = "white";
const OTHER_COLOR = "blue";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color =  OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}

init();


function handleOffline(){
    console.log("Bye Bye");
}
function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);

//추가 컴퓨터에 연결되어있는 wifi 꺼지고 켜지고를 인식하는 이벤트도있음
//참조: HTML JavaScript DOM event MDN

