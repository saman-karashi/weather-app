class Weather{
constructor(city){
this.api_key='cff601fe537a411681604118210407';
this.city=city;
}

async getWeather(){
const weather=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.api_key}&q=${this.city}&days=1&aqi=no&alerts=no`);
//Getting Data From api
const getData=await weather.json();

return getData;
}

changeLocation(city){
this.city=city;
}
}