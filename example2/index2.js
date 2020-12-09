//title을 가져와서 title 의 class 이름을 "clicked"로 했다가, "" 공백으로 했다가,(자바스크립트로 HTML을 컨트롤할수있다는말)DOM을 이용한사례임
//와다 갔다하며너 .css에서 .cliked{}를 사용하여 "clicked"를 class 이름으로 가실때 css적용하는 예제

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className; //title 객체의 className을 가져온다.
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }
    else{
        title.className = "";
    }
}


//title의 class이름을 가지고 css효과를줄수있으므로
//자바스크립트로 title의 class이름을 가지고 css를 컨트롤할수있음
function init(){
   
    title.addEventListener("click",handleClick);
}

init();



