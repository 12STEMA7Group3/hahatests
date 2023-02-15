// INJECTING IMAGES
const pullImageArray = JSON.parse(localStorage.getItem('imageStorage'));
const artworkContainer = document.getElementsByClassName('artwork-container');
const pictureTag = document.getElementsByTagName('picture');
const slideshowImages = document.getElementsByClassName('slideshow-images');
const removingClass = (event) => {
    event.className = 'images slideshow-images';
}
const imageInjector = () => {
    let i;
    for ( i = 0; i < artworkContainer.length; i++ ) {
        artworkContainer[i].lastElementChild == pictureTag[i] ? i = artworkContainer.length + 1 : artworkContainer[i].innerHTML += pullImageArray[i];
        slideshowImages[i].setAttribute('onload', 'removingClass(this)');
    }
}
// INJECTING IMAGES
// SLIDESHOWS
let slideNumber = 0;
const changeSlide = () => {
    let i;
    let slides = document.getElementsByClassName('slidesContainer');
    let toggles = document.getElementsByClassName('square');
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideNumber++;
    if (slideNumber > slides.length) {
        slideNumber = 1
    }
    for ( i = 0; i < toggles.length; i++) {
        toggles[i].className = toggles[i].className.replace(' activated', '')
    }
    slides[slideNumber-1].style.display = 'block';
    toggles[slideNumber-1].className += ' activated';
    
    setTimeout(changeSlide, 5000);
}
changeSlide();
const toPresentSlide = (value) => {
    let i;
    let slides = document.getElementsByClassName('slidesContainer');
    let toggles = document.getElementsByClassName('square');
    slideNumber = value;
    if (value > slides.length) {
        slideNumber = 1
    }
    if (value < 1) {
        slideNumber = slides.length
    }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for ( i = 0; i < toggles.length; i++) {
        toggles[i].className = toggles[i].className.replace(' activated', '')
    }
    slides[slideNumber-1].style.display = 'block';
    toggles[slideNumber-1].className += ' activated';
}
// SLIDESHOWS
// OPENING SIDE NAVIGATION BAR
const openNav = () => {
    let navBar = document.getElementById('sideNav');
    let firstPart = document.getElementById('firstpartcontainer');
    let burgerIcon = document.getElementById('burger-icon');
    let media = window.matchMedia('(max-width: 600px)');
    if (media.matches) {
        navBar.style.width = '100%';
    } else {
        navBar.style.width = '40%';
        firstPart.style.marginRight = '40%';
    }
    burgerIcon.style.display = 'none';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
const closeNav = () => {
    let navbar = document.getElementById('sideNav');
    let firstPart = document.getElementById('firstpartcontainer');
    let burgerIcon = document.getElementById('burger-icon');
    firstPart.style.marginRight = '0%';
    navbar.style.width = '0';
    burgerIcon.style.display = 'block';
}
// OPENING SIDE NAVIGATION BAR
// ACCORDION
let buttonAccordion = document.getElementsByClassName('accordion');
let i;
for ( i = 0; i < buttonAccordion.length; i++) {
    buttonAccordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight= '200px';
        }
    })
}
// ACCORDION
// TOOLBOX
const buttonSecondPage = document.getElementById('secondpagebutton');
buttonSecondPage.onmousemove = function() {onMouseOver()};
buttonSecondPage.onmouseleave = function() {onMouseLeave()};
const onMouseOver = () => {
    let toolbox = document.getElementById('toolbox');
    if (toolbox.style.display == 'none') {
        toolbox.style.display = 'block';
    }
}
const onMouseLeave = () => {
    let toolbox = document.getElementById('toolbox');
    if (toolbox.style.display = 'block')  {
        toolbox.style.display = 'none';
    }
}
// TOOLBOX
// PLAYING AND PAUSING THE VIDEO
document.body.onkeydown = function(e) {
    if (e.which == 32) {
        e.preventDefault();
        playPauseVideo();
    }
}
let videoButton = document.getElementById('backgroundvideo-control-button');
videoButton.onclick = function() {playPauseVideo()}
const playPauseVideo = () => {
    let video = document.getElementById('back-video');
    let pause = document.getElementById('pause');
    let play = document.getElementById('play');

    if (pause.hasAttribute('hidden', 'true')) {
        video.play();
        pause.removeAttribute('hidden', 'true');
        play.setAttribute('hidden', 'true');
    } else if (play.hasAttribute('hidden', 'true')) {
        video.pause();
        play.removeAttribute('hidden', 'true');
        pause.setAttribute('hidden', 'true');
    }
}
// PLAYING / PAUSING THE VIDEO BACKGROUND