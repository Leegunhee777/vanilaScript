const clockContainer = document.querySelector(".js-clock") //class 이름으로 가져올떈 . 을이용해 가져옴,id=를 이용해 가져올땐 #을 이용
//query selector는 element의 자식을 탐색한다. document의 자식을탐색
const clockTitle = clockContainer.querySelector("h1"); //
//clockContainer의 자식을 탐색한다. <h1..>을 가져옴
//const clockTitle = clockContainer.querySelector(".js-title") //이렇게 써도됨


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours  = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds <10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime(); //이렇게만하면 새로고침을 누르지않는이상 처음에 받아온 값그대로 보여짐,
               //시계는 값이 계속 변해야하기때문에, 조치가필요하다
    setInterval(getTime, 1000);
}

init();





/*
const date = new Date();
console.log(date); // 시간 관련 정보 볼수있음

date.getMonth() //월출력
date.getDay() // 1:은 월요일을 의미
date.getDate() //일수를 의미
date.getHours() //시간을의미
date.getMinutes() // 분을 의미

/////////////////////////////////////////////////////////////////////
setInterval 
:두개의 인자를 받는데, 첫번쨰 인자로 실행할 함수를 받고,
두번째는 실행간격, 시간을 받음 1000은 ms 이므로 1초를 의미
*/