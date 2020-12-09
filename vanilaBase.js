
/*
모든 웹브라우저에는 자바스크립트를 컴파일할수있는 기능이이 자체적으로있음,
그래서 웹에 대해선 자바스크립트가 독보적인 언어임

<index.html>
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <h1>This works!수정됬지롱</h1>
        <script src = "index.js"></script>  //script는 항상 body제일 밑에 있어야함
    </body>
</html>

<index.js>
alert('I m work');

<index.css>
body{
    background-color: blue;
}

h1{
    color: white;
}

///////////////////////////////////////////////////////////////////////////////////////
function sayHello (name, age){
    console.log("Hello" + name + "you are" + age + "years old");
}

===

function sayHello( name, age){
    console.log(`hello ${name} you are ${age} years old`);
}
(스트링안의 변수를 다룰때 쓰는 간지나는 방법)


<함수의 기능을 객체 안에 구현하기>
const calculator = {
    plus: function(a, b){
        return a+b;
    }
}

const asd = calculator.plus(5,5)

console.log(asd);


------------------------------------------
추가!!!
<index.css>
body{
    background-color: blue;
}

h1{
    color: white;
}

#title{
    ... //css에서 html 의 <h1 id = "title"....>
         //id = title 인 document를 건드리고 싶을떈 #으로 접근
}
---------------------------------------------
<HTML이 자바스크립트와 함께 쓰려면 어찌해야 할까??>

(HTML의 id로 document접근하기)

<index.html>
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <h1 id = "title">This works!수정됬지롱</h1>
        <script src = "index.js"></script>  //script는 항상 body제일 밑에 있어야함
    </body>
</html>

<index.js>
//const title = documenet.querySelector("#title"); //노드의 첫번쨰 자식을 반환한다.,id로 찾을수있음
                                                 //밑에ById와 흡사한기능임
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title); //HTML을 자바스크립트로 가져와 많은것들을 컨트롤할수있음
document.title = "I own you now"  //index.html document를 객체로서 가져와, title태그값을 바꾸는행위임
******************************************************************************
중요!!!
//자바스크립트로 HTML의 document를 가져오면, 모두 객체가 된다.!!!!!
//모든 HTML은 객체가된다는말.

//본 예제에서도 getElementById를 사용해 해당 document를 
//객체화 하여 title로서 가져왔다.

//모든 객체들의 함수는 ex)title.innerHTML ,DOM(Document Object Model)형태로 변경이가능하다.
//객체에 어떤 함수들이 있는지 확인해보자
//console.dir(title)해보면 title객체 안에 많은 것들을 확인해볼수있다.

//HTML을 자바스크립트를통해 DOM객체로 바꿀수있다
//그렇기 때문에
//This works! -> Hi! From JS 로 수정되어 보인다.
//이게 자바스크립트의 힘이다.
***********************************************************************************
///////////////////////////////////////////////////////////////////////////////////////////
이벤트!!!!!!!!!!

<window. 은 조금 다른 이벤트를 가지고있다.>
ex)
<index.js>

function handleResize(){
    console.log("I have been resized")
}

Or

function handleResize(event){
    console.log(event); //resize 이벤트가 일어날때 이를 console.log해볼수있음
}

window.addEventListener("resize", handleResize);


:자바스크립트는 이벤트를 받기를 기다리고있다.
모든걸 다 기다리진 않기 떄문에 , 무엇을 기다릴지 명시를 해줘야한다.
widow...resize가 일어났을떄(브라우저의크기변경시), handleResize함수를 발동시킨다.

***********************************************************************
window.addEventListener("resize", handleResize());
:이런식으로 쓰면 resize가 이벤트일때 handleResize를 호출하는것이아니라,
함수가 즉시 호출됨, resize이벤트가 관련없이!!! 주의해라
************************************************************************

<HTML 요소에 event등록>
<index.js>
const title = documenet.querySelector("#title"); 

function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);

: id= title 을 가진 요소를 객체로 가져와, 클릭이벤트가 생겼을떄,
handleClick함수를 발동시키킨다.

///////////////////////////////////////////////////////////////////////////

*/

