const form = document.querySelector(".js-form");
const input = form.querySelector("input"); //querySelector은 ("input"):태그도 가져올수있고,("#tiele"):id도 가져올수있고, (".title"): class 이름으로도 가져올수있다.
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // form에서의 submit시 새로고침현상을 막을수있다.
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function init(){

    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //localstorage에 user가 없는경우
        askForName();
    }
    else{
        //localstorage에 user가 있는경우
        paintGreeting(currentUser);
    }
}

init();




/*
local storage 
: 정보를 유저컴퓨터에 저장하는 방법
:Local Storage는 URL을 기초로 동작(저장함)한다.
:새로고침해도 정보가 날아가지않음 
확인: F12 -> Application -> Storage -> Local Storage

(저장법)
localStorage.setItem("nico",true); 
//localStorage에 Key, value 형태로 저장됨
//새로고침해도 정보가 날아가지않음 존나 멋지지?

(값을 부르는법)
localStorage.getItem("nico");
//"true" 가 반환됨


//form 에서 Enter를 누르면
제출(submit)한다는걸 의미한다.
별다른 조치를 취하지 않으면
submit이 이루어지면 '새로고침'이 일어난다.

**********************************************************************************************************
css 새로배운지식

 <Base HTML>
 <form class = "js-form form">
            <input type = "text" placeholder="What is your name?"/>
 </form>
 <h4 class = "js-greetings greetings"></h4>



 
 1. class의 fullname을 쓰지 않아도 해당 element를 가져올수있다.
        const form = document.querySelector(".js-form");
        const greeting = document.querySelector(".js-greetings");


 2. css는 HTML의 classname의 마지막 String값이 우선순위가 높게!!! 적용된다.

    예제에서 localStorage에 값이 저장되어있지않으면,
    (form의input창보임, <h4..>안보임):  form 의classname에서 showing을 마지막string으로가지고있다.
    
    input창에서 input을 받아, 입력하면, input창이 사라지며,
    input창에서 입력했던값이, 밑에 <h4>의 요소로 갱신된다.
    (form의input창 안보임, <h4..>보임) :  <h4>의 classname에서 showing을 마지막string으로가지고있다.

    상황(1).(form의input창보임, <h4..>안보임) -> 상황(2). (form의input창 안보임, <h4..>보임)
    : 이사이에 css와 className 적으로 어떤 일이 벌어지는 것이냐...하면

    상황(1)에선 localStorage에 값이 저장되어 있지 않으므로,
    greting.js에 의해서
    <form class = "js-form form showing"...>
    <h2 class = "js-greetings greetings"..> 상태가된다.

    여기서 css가 아래와 같다면
    .form,.greeting {
    display:none;  //안보이게함
    }
    : "js-form form showing" 은 form을 가지고있고,
     "js-greetings greetings" 은 greeting을 가지고 있으므로,
      둘다 안보이게 된다.

    허나!!!!!!css가 아래와같다면
    .form,.greeting {
    display:none;  //안보이게함
    }
    .showing{
        display:block;  //보이게함
    }

    :"js-form form showing"은 form을 가지고있지만 
    classname의 마지막 string이 showing이기 때문에,
    .form{display:none}; 의 우선순위보다.
    .showing{display:black}; 의 우선순위가 높게 잡히기 때문에,
     form 태그는 보이게 된다.,  


     상황(2)에선 똑같은 원리를 활용하여
     showing이라는 classname을 "js-greetings greetings showing"으로 옮겨
     input창을 안보이게 하고 , <h4>를 보이게 하는것임

     ***************************************************************************************************



    


    

*/