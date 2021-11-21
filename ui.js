class UI{
constructor(){
this.w_temp=document.getElementById('w-temp');
this.w_city=document.getElementById('w-city');
this.w_icon=document.querySelectorAll('#w-icon');
this.w_img=document.getElementById('w-img');
this.w_condition=document.getElementById('w-condition');
this.w_low_temp=document.querySelectorAll('#w-low-temp');
this.w_high_temp=document.querySelectorAll('#w-high-temp');
this.w_hourly_temp=document.querySelectorAll('#w-hourly-temp');
this.w_wind=document.querySelectorAll('#w-wind');
this.w_humidity=document.querySelectorAll('#w-humidity');
this.w_date=document.getElementById('w-date');
this.date_container=document.querySelector('.date-container')
this.hour=document.querySelectorAll('#hour');
this.weekDays=document.getElementById('day');
this.w_sunrise=document.getElementById('w-sunrise');
this.w_sunset=document.getElementById('w-sunset');
this.day_name=document.querySelectorAll('#day-name')
this.date_of_days=document.querySelectorAll('#date-of-days')
}

//Get current weather
currentWeather(result,date){
this.w_temp.innerText=result.current.temp_c.toFixed() + "°";
this.w_condition.innerText=result.current.condition.text;
this.w_sunrise.innerText=result.forecast.forecastday[0].astro.sunrise.substr(0,5);
this.w_sunset.innerText=result.forecast.forecastday[0].astro.sunset.substr(0,5);
this.w_city.innerText=result.location.country +","+result.location.name;
this.date_container.innerText=date.toDateString();

this.w_low_temp.forEach((low)=>{
low.innerText=result.forecast.forecastday[0].day.maxtemp_c.toFixed() + "°";
})
this.w_high_temp.forEach((high)=>{
high.innerText=result.forecast.forecastday[0].day.mintemp_c.toFixed() + "°";
})

this.w_humidity.forEach((humidity)=>{
    humidity.innerText=result.current.humidity + '%';
})
this.w_wind.forEach((wind)=>{
    wind.innerText=result.current.wind_mph.toFixed() + 'mph';
})

this.date_of_days.forEach((days)=>{
days.innerText=date.toDateString().substr(7,9)
})

this.day_name.forEach((names)=>{
names.innerText=date.toDateString().substr(0,3)
})
}

//Set Weather Based on Hour
todaysWeather(data){
this.w_hourly_temp.forEach((today,idx,arr)=>{
arr[0].innerText=data[1].temp_c.toFixed()+ "°";
arr[1].innerText=data[2].temp_c.toFixed()+ "°";
arr[2].innerText=data[3].temp_c.toFixed()+ "°";
arr[3].innerText=data[4].temp_c.toFixed()+ "°";
arr[4].innerText=data[5].temp_c.toFixed()+ "°";
arr[5].innerText=data[6].temp_c.toFixed()+ "°";
arr[6].innerText=data[7].temp_c.toFixed()+ "°";
})

this.hour.forEach((hour,idx,arr)=>{
arr[0].innerText=data[1].time.substr(10,6);
arr[1].innerText=data[2].time.substr(10,6);
arr[2].innerText=data[3].time.substr(10,6);
arr[3].innerText=data[4].time.substr(10,6);
arr[4].innerText=data[5].time.substr(10,6);
arr[5].innerText=data[6].time.substr(10,6);
arr[6].innerText=data[7].time.substr(10,6);
})
}

//ُSet icons for all types of condition
setIcons(text){
this.w_icon.forEach((icon)=>{
switch (text) {
    case "Sunny":
        icon.setAttribute('src','weather_icons_dovora_interactive/day_clear.svg');
        this.w_img.setAttribute('src','weather_icons_dovora_interactive/day_clear.svg')
        break;
    case "Partly cloudy":
        icon.setAttribute('src','weather_icons_dovora_interactive/day_partial_cloud.svg');
        this.w_img.setAttribute('src','weather_icons_dovora_interactive/day_partial_cloud.svg')
        break;
        case "Cloudy":
        icon.setAttribute('src','weather_icons_dovora_interactive/cloudy.svg');
        this.w_img.setAttribute('src','weather_icons_dovora_interactive/cloudy.svg')
        break;
        case "Overcast":
            icon.setAttribute('src','weather_icons_dovora_interactive/overcast.svg');
            this.w_img.setAttribute('src','weather_icons_dovora_interactive/overcast.svg')
        break;
        case "Fog":
            icon.setAttribute('src','weather_icons_dovora_interactive/fog.svg');
            this.w_img.setAttribute('src','weather_icons_dovora_interactive/fog.svg')
        break;

        case "Mist":
            icon.setAttribute('src','weather_icons_dovora_interactive/mist.svg');
            this.w_img.setAttribute('src','weather_icons_dovora_interactive/mist.svg')
            break;

        case "Light rain":
            icon.setAttribute('src','weather_icons_dovora_interactive/rain.svg');
            this.w_img.setAttribute('src','weather_icons_dovora_interactive/rain.svg')
            break;
            default:
                icon.setAttribute('src','weather_icons_dovora_interactive/day_clear.svg');
                this.w_img.setAttribute('src','weather_icons_dovora_interactive/day_clear.svg')
        break;
}
})
}

}