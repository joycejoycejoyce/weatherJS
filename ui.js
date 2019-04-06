class UI {
    getPaint(d){
        // grab elements 
        const wLoc = document.getElementById('w-location');
        const wDes = document.getElementById('w-desc');
        const wIcon = document.getElementById('w-icon');
        const wHumidity = document.getElementById('w-humidity');
        const wDew = document.getElementById('w-dewpoint');
        const wWind = document.getElementById('w-wind');
        wLoc.innerHTML = `${d.name}, ${d.sys.country}`;
        wDes.innerHTML =`${d.weather[0].description}`;
        wIcon.setAttribute('src',  `http://openweathermap.org/img/w/${d.weather[0].icon}.png`)
        wHumidity.innerHTML = `Relative Humidity: ${d.main.humidity}`;
        wDew.innerHTML = `DewPoint: ${((d.main.temp)*0.1 +32).toFixed(1)} F (${((d.main.temp)*0.1).toFixed(1)} C)`;
        wWind.innerHTML = `Wind degree: ${d.wind.deg}`;
    }
}