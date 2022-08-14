function formatDate (timestamp) {
let date= new Date(timestamp);
let hours=date.getHours();
let minutes=date.getMinutes();
if (hours<10) {
    hours=`0${hours}`;
}
if (minutes<10) {
    minutes=`0${minutes}`;
}
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=days[date.getDay()];
    return `${day}, ${hours}:${minutes}`;

}
function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");
    let weatherCond=response.data.weather[0].icon;
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${weatherCond}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
humidityElement.innerHTML=response.data.main.humidity;
windElement.innerHTML=`${response.data.wind.speed} km/h`;
dateElement.innerHTML= formatDate(response.data.dt*1000);
}

let apiKey="7644cf0e41cb2d8fdabc6b0808cee422";
let city="Sydney";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);