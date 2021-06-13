"use strict";
const api_key = prompt("Enter the API key: (from http://api.weatherstack.com)");
function doAJAXCall(url, method = "GET") {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4 && ajax.status === 200) {
                resolve(JSON.parse(ajax.responseText));
            } else if (ajax.readyState === 4 && ajax.status === 404) {
                reject('404');
            }
        }
        ajax.open(method, url);
        ajax.send();
    });
}

async function init() {
    res.innerHTML ='';
    const weather = await doAJAXCall(`http://api.weatherstack.com/current?access_key=${api_key}&query=${citySelect.value}`);
    console.log(weather.current, weather.current.temperature, weather.current.weather_descriptions[0], weather.current.weather_icons[0], weather.current.humidity);

    res.innerHTML = `
    Weather:${weather.current.weather_descriptions[0]} <br>
    Temperature: ${weather.current.temperature}<br>
    Humidity: ${ weather.current.humidity}<br>
    <img src='${weather.current.weather_icons[0]}'></img><br>
    `;
}
init();



