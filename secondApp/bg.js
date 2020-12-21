const body = document.querySelector("body");

const IMG_NUMBER = 3; //사진의 갯수

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage"); //image에 bgImage라는 className을 추가
                                    //css에서 z-index: -1 로하면 배경으로 깔수있게됨
    body.appendChild(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER); //0 1 2 셋중하나가 반환됨
    return number;                                         //Math.floor(3.9) //뒤에 소수점 그냥 다 버림
                                                           //Math.ceil(3.2) //뒤에 소수점 무조건 올림
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();
