
const storage = new LocStorage();
const loc = storage.getLocation();
const weather = new Weather(loc.city, loc.country);
const ui = new UI();

// display weather information after 
// load 
document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
    weather.getWeather()
    .then(d=>{
        ui.getPaint(d);
    })
};

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeWeatherLoc(city, country);
    storage.setLocation(city, country);
    getWeather();

    $('#localModal').modal('hide');
})