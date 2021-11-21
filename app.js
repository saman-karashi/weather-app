const storage=new Newstorage;

const weatherLocation=storage.getLocationStorage();

//Init weather
const weather=new Weather(weatherLocation.city);
//Init UI
const ui=new UI;

const modal=document.querySelector('.modal'),
      overlay=document.querySelector('.overlay'),
      close_btn=document.querySelector('.close-btn'),
      form=document.getElementById('form');

function closingModal(){
modal.style.top='-50%'
setTimeout(()=>{
overlay.style.display='none'
modal.classList.remove('active')
},500)
}

document.addEventListener('DOMContentLoaded',function(){
overlay.style.display='flex'
setTimeout(()=>{
modal.classList.add('active')
},500)

})

document.addEventListener('DOMContentLoaded',getCurrentWeather)

close_btn.addEventListener('click',()=>{
closingModal();
})

form.addEventListener('submit',(e)=>{
const city=document.getElementById('city');

//Change Location
weather.changeLocation(city.value);

storage.setLocation(city.value);

if(city.value){
city.value=''
}
    
closingModal();

getCurrentWeather();

e.preventDefault();
})


//Getting Current Date
const date=new Date();
function getCurrentWeather(){
weather.getWeather()
.then(data=>{
ui.currentWeather(data,date);
ui.todaysWeather(data.forecast.forecastday[0].hour);
ui.setIcons(data.current.condition.text);
})
  
}
