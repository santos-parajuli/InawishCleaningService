// Santosh Parajuli 8826906
// I have used getElementsByClassName in $ since i made most element with class.
// Since, getElementsByClassName returns an array to accrss the class we have to use [0] to get first elements.
var $ = function(className) { return document.getElementsByClassName(className); };
var slideIndex = 1;
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

window.onload = function(){
    $("hamburger")[0].addEventListener("click", toggleHamburger);
    $("logo")[0].addEventListener("click",function(){
            location.href = '/'
        });
    showSlides(slideIndex);
    $("prev")[0].addEventListener("click",() => showSlides(slideIndex -= 1));
    $("next")[0].addEventListener("click",() => showSlides(slideIndex += 1));  
};


// here we are displaying div with slides class name according to the slideIndex value that we are keeping track of.
var showSlides = function(n) {
    let i;
    let slides = $("slides");
    // if slide is at last go to first slide
    if (n > slides.length) {
        slideIndex = 1
    }
    // if slide is at first place show last slide
    if (n < 1) {
        slideIndex = slides.length
    }
    // setting all slides as display none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //setting the only current slide as display block to view it
    slides[slideIndex-1].style.display = "block";
}

// toggle hamburger menu to close icon and vice versa
var toggleHamburger = function(event){
    event.preventDefault();
    var toggle= document.getElementById("toggleMenu");
    var mobileLinks =$("mobileLinks")
    if(toggle.src.includes("/images/Close.png")){
        toggle.src="./images/Hamburger.png";
        mobileLinks[0].style.display="none";
    }else{
        toggle.src="./images/Close.png";
        mobileLinks[0].style.display="flex";
    }
}
// there was a problem when hamburger menu was open and user resize the window the mobileLinks would be showing so in order to remove that we this code.
window.addEventListener('resize',function(){
    if(window.innerWidth >750){
        var mobileLinks =$("mobileLinks")
        var toggle= document.getElementById("toggleMenu");
        mobileLinks[0].style.display="none";
        toggle.src="./images/Hamburger.png";
    }
})
