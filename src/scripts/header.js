"use strict";

const navLink = document.querySelectorAll('.item');
const watchTitle = document.querySelector('.watches__description__title');
const watchModel = document.querySelector('.watches__description__model');
const watchImage = document.querySelector('.nestedNav__watches__preview img');


const watchesInfo = [
    {modelYear: '1939', modelType: 'Military Chronograph'},
    {modelYear: '1947', modelType: 'Dress Watch'},
    {modelYear: '1962', modelType: 'Racing Chronograph'},
    {modelYear: '1963', modelType: 'Pilot Chronograph'},
    {modelYear: '1964', modelType: 'Gran Turismo Chronograph'},
    {modelYear: '1968', modelType: 'Dragster Chrono'},
    {modelYear: '1970', modelType: 'Automatic Diver'},
    {modelYear: '1972', modelType: 'Top Gun Chronograph'}    
]

for (let i = 1; i <= navLink.length; i++) {
    navLink[i].addEventListener("mouseover",()=>{
        watchTitle.innerHTML=watchesInfo[i-1].modelYear;
        watchModel.innerHTML=watchesInfo[i-1].modelType;
        watchImage.setAttribute("src",`./src/assets/img/navigation/watches_models/Dan_Henry_${watchesInfo[i-1].modelYear}.png`);
    });
}

