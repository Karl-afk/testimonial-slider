
let profile = document.querySelectorAll('.wrapper-profile-container');
let counterMax = document.querySelectorAll('.wrapper-profile-container').length - 1;
let counter = 0;
let previousProfile = document.getElementById('prev');
let nextProfile = document.getElementById('next');



 let nextCount = () => {
     counter >= counterMax ? counter = 0 : counter++;       
 }
 let prevCount = () => {
    counter <= 0 ? counter = counterMax : counter--;
 }
 let toggleNextButton = () => { 
    profile.item(counter).classList.remove('active');
    nextCount();
    profile.item(counter).classList.add('active');
 }
 let togglePrevButton = () => {
    profile.item(counter).classList.remove('active');
    prevCount();
    profile.item(counter).classList.add('active');
 }
 previousProfile.addEventListener('click', () => {
     togglePrevButton();
 }, false);
 nextProfile.addEventListener('click', () => {
     toggleNextButton();
}, false);