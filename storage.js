class Newstorage{
constructor(){
this.defaultCity='Tehran';
this.city;
}

getLocationStorage(){
if(localStorage.getItem('city')===null){
this.city=this.defaultCity;
}else{
this.city=localStorage.getItem('city')
}

return{
city:this.city
}
}

setLocation(city){
localStorage.setItem('city',city);
}
}

