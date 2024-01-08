const toggleSwitch = document.querySelector('input[type="checkbox"]');
const backgroundColor = document.querySelector('body');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image-1');
const image2 = document.querySelector('#image-2');
const image3 = document.querySelector('#image-3');
const textbox = document.querySelector('#text-box');
const h1Tag = document.querySelectorAll('h1');
const nav = document.querySelector('nav');
const toggleText = document.querySelector('.toggle-text');
const icon = document.querySelector('#my-icon');

function darkMode(){
    backgroundColor.style.backgroundColor = '#0D0C0B';
    h1Tag.forEach(function(h1) {
        h1.style.color = '#FFFFFF'; 
    });
    nav.style.backgroundColor = '#0D0C0B';
    toggleText.innerHTML = "Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    toggleIcon.children[1].style.color = '#FFFFFF';
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image2.src = 'img/undraw_feeling_proud_dark.svg';
    image3.src = 'img/undraw_conceptual_idea_dark.svg';


}
function lightMode(){
    backgroundColor.style.backgroundColor = '#FFFFFF';
    h1Tag.forEach(function(h1) {
        h1.style.color = '#0D0C0B'; 
    });
    nav.style.backgroundColor = '#FFFFFF';
    toggleText.innerHTML = "Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].style.color = '#0D0C0B';
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg';
    image2.src = 'img/undraw_feeling_proud_light.svg';
    image3.src = 'img/undraw_conceptual_idea_light.svg';
    
}
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }
    else{
        lightMode();
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);