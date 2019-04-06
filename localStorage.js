class LocStorage{
    constructor(){
        this.city;
        this.country;
        this.defaultCity='Miami';
        this.defaltCountry = 'us';
    }
    getLocation(){
        if(window.localStorage.getItem('city')===null){
            this.city = this.defaultCity;
        }
        else{
            this.city = localStorage.getItem('city');
        }
        if(window.localStorage.getItem('country')===null){
            this.country = this.defaltCountry;
        }
        else{
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country,
        }
    }
    setLocation(city, country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}