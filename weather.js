class Weather{
    constructor(city, country){
        this.key = `f76c39e38591baa119737aec08dc6ae7`;
        this.city = city;
        this.country = country;
    }

    // fetch weather from api
    async getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=${this.key}&q=${this.city},${this.country}&mode=json`;
        const xhr = await window.fetch(url);
        const json = await xhr.json();
        return json;
    }
    // change weather locaiton 
    changeWeatherLoc(city, country){
        this.city = city;
        this.country = country;
    }
}