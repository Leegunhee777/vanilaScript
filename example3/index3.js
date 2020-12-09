//classList를 활용하여 HTML 요소의 class 이름을, 확장시킬수 있다는 것이 매우매우 중요한사실이다!!!
//이를 활용한 사례이다.
// 1. index3.html 의 <h1 id = "title" class="btn"...>
// 2. .btn{ cursor: pointer;} : css에서 bin을 class 이름으로 같는 요소를 cursor: pointer효과를 주었다.
// 처음엔 <h1 ...class="btn" 으로시작>

// 클릭시 title.classList.contains(CLICKED_CLASS); 함수를 통해서  title의 classList에 "clicked" 가있나 확인, true/false반환
// 없다면 classList에 "clicked"값을 추가한다. : console.log(title.classList); === ["btn", "clicked", value: "btn clicked"]
// 실제 HTML도 <h1 id = "title" class = "btn clicked"....이됨(btn 과 clicked 사이는 공백이 존재함)

// 있다면 classList에 "clicked"값을 제거한다. console.log(title.classList); === ["btn", value: "btn"]
// 실제 HTML도 <h1 id = "title" class = "btn" ...이됨

//:결론 index3.css에서 보다시피 .btn 효과는 기본적으로 가져가면서도 추가로 + .clicked 효과를 줬다 안줬다 할수있게됨
//: 자바스크립트에서 DOM을 활용해 실제 class의 이름을 확장하고 제거할수 있다는말
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick(){
   
    const hasClass = title.classList.contains(CLICKED_CLASS);
    //classList의contains 함수는 true/false를 반환함
    //만약 title.classList가 click을 포함하고있으면 true
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
        
    }
    else{
        title.classList.remove(CLICKED_CLASS);
    }
    console.log(title.classList);
    
    /*
    위의 과정과 같은작업을 toggle을 이용하여 간단하게 쓸수있음,자동으로해줌
    title.classList.toggle(CLICKED_CLASS);
    :toggle함수는 클라스가 거기있는지 체크해서 거기없으면, add
    있으면 remove해주는걸말한다.
    */
}


//title의 class이름을 가지고 css효과를줄수있으므로
//자바스크립트로 title의 class이름을 가지고 css를 컨트롤할수있음
function init(){
   
    title.addEventListener("click",handleClick);
}

init();



