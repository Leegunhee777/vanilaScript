const weather = document.querySelector(".js-weather");

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = 'coords';

//fetch라는걸 사용해서 데이터를 얻어올수있음
function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .then(function(response){ //response는 네트워트정보를 담고있음 response.json()을해야 원하는 데이터를 볼수있음
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    console.log('Cant access geo location')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); //첫번째인자는 좌표를가져오는데 성공했을때, 두번째인자는 실패했을때
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        askForCoords();
    }
    else{
        //getWeather
        const parseCoords = JSON.parse(loadedCords); //JSON 문자열의 구문을 분석하고, 그결과에서 javascript 값이나 객체생성
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();