// MODEL
const imageArray = JSON.parse(localStorage.getItem('everyImageStorage'));
const arrayForImageModalBox = JSON.parse(localStorage.getItem('modalInsertionStorage'));
const modalImageDescriptionArray = JSON.parse(localStorage.getItem('modalImageDescriptionStorage'));
const buttonAccordion = document.getElementsByClassName('accordion');
let i, j, k;
const buttonContainer = document.getElementsByClassName('searchbar-button-container')[0];
const searchBar = document.getElementsByClassName('searchbar')[0];
const searchBarSection = document.getElementsByClassName('searchbar-section')[0];
const searchIcon = document.getElementsByClassName('search-icon-container')[0];
const logoNavSection = document.getElementsByClassName('logonav-section')[0];
const burgerIcon = document.getElementsByClassName('burger-icon-container')[0];
const headerShowOnMobile = document.getElementsByClassName('header-show-on-mobile')[0];
const mobileMediaQuery = window.matchMedia('(max-width: 420px)');
const root = document.getElementById('root');
const containerOfArtworks = document.getElementsByClassName('container-of-artwork');
const modalBox = document.getElementsByClassName('modal-section')[0];
const modalImageContainer = document.getElementById('modalImageContainer');
const modalDescription = document.getElementById('modalDescription');
const modalDescriptionContainer = document.getElementsByClassName('modal-description-container')[0];
const modalImageName = document.getElementById('modalImageName');
const nameArray = document.getElementsByClassName('name-of-image');
let mainContent = document.getElementById('main-content');

// VIEW
// OPENING / CLOSING SIDE NAVIGATION BAR
const openNav = () => {
    let navBar = document.getElementById('sideNav');
    let content = document.getElementById('main-content');
    let burgerIcon = document.getElementById('burger-icon');
    let media = window.matchMedia('(max-width: 600px)');
    if (media.matches) {
        navBar.style.width = '100%';
    } else {
        navBar.style.width = '40%';
        content.style.marginRight = '40%';
    }
    burgerIcon.style.display = 'none';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
const closeNav = () => {
    let navbar = document.getElementById('sideNav');
    let content = document.getElementById('main-content');
    let burgerIcon = document.getElementById('burger-icon');
    content.style.marginRight = '0%';
    navbar.style.width = '0';
    burgerIcon.style.display = 'block';
}
// OPENING / CLOSING SIDE NAVIGATION BAR
// ACCORDION
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
// SEARCHBAR
const showSearchBar = () => {   
        burgerIcon.style.display = 'none';
        logoNavSection.style.display = 'none';
        buttonContainer.style.display = 'none';
        searchBar.style.display = 'block';
        searchIcon.style.display = 'block';
        searchBarSection.style.width = '100%';
        headerShowOnMobile.style.justifyContent = 'center';
        searchBar.className += ' scaleAnimation';
        searchIcon.className += ' appearAnimation';
}
mainContent.addEventListener('click', function () {
    if (mobileMediaQuery.matches) {
        burgerIcon.style.display = '';
        logoNavSection.style.display = '';
        buttonContainer.style.display = '';
        searchBar.style.display = 'none';
        searchIcon.style.display = 'none';
        searchBarSection.style.width = '';
        headerShowOnMobile.style.justifyContent = '';
        searchBar.className = 'searchbar';
        searchIcon.className = 'search-icon-container';
    }
})
// SEARCHBAR
// MODAL BOX
const closeModal = () => { 
    modalBox.style.display = 'none'; 
    document.title = 'Main Gallery'; 
}

const imageClick = (event) => {
    modalImageContainer.innerHTML = ''; 
    modalDescription.innerText = '';
    modalImageName.innerText = ''; 
    modalBox.style.display = 'block'; 
    applyDimensionAndImage(event);
    // INSERTING IMAGES TO MODAL BOX
}
// MODAL BOX
// FULL SCREEN IMAGE
const toggleFullScreen = () => {
    if (document.fullscreenElement === null) {
        modalImageContainer.children[0].requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
// FULL SCREEN IMAGE

// CONTROL
// SEARCHBAR
const searchFunction1 = () => {
    let input1, nameOfImage, imageCard;
    input1 = document.getElementById('searchBar1').value.toUpperCase();
    imageCard = document.getElementsByClassName('card');
    for ( i = 0; i < imageCard.length; i++) {
        nameOfImage = imageCard[i].getElementsByClassName('name-of-image')[0];
            if (nameOfImage.innerText.toUpperCase().includes(input1)) {
                imageCard[i].style.display = '';
            } else {
                imageCard[i].style.display = 'none';
            }
    } 
}
const searchFunction2 = () => {
    let input2, nameOfImage, imageCard;
    input2 = document.getElementById('searchBar2').value.toUpperCase();
    imageCard = document.getElementsByClassName('card');
    for ( i = 0; i < imageCard.length; i++) {
        nameOfImage = imageCard[i].getElementsByClassName('name-of-image')[0];
        if (nameOfImage.innerText.toUpperCase().includes(input2)) {
            imageCard[i].style.display = '';
        } else {
            imageCard[i].style.display = 'none';
        }
    }
}

const applyDimensionAndImage = (event) => {
    let parentElementOfArtworkContainer = event.parentElement.parentElement;
    let classListOfParentElement = parentElementOfArtworkContainer.classList.value;
      // RESETTING VALUES OF MODAL AND HAVING A FIXED ROOT (THE ONE THAT WRAPS THE CONTENT OF THE GALLERY) TO AVOID A SECOND SCROLL
    // FOR LOOP METHOD OF ASSIGNING STYLES TO EACH RESPECTIVE CARD SIZE DEPENDING ON THE SIZE OF A USER'S DEVICE
        /* If-else statement is used after confirming that a media query inside the array matches to see which media query 
        it is that matched (e.g. i == 0 is checking if the media query at the first item is the one that matched, if it is, 
        run this function below it); Execute the function below that respective media query. */
        /* The same applies to the variable j in the for loop of j */
        /* Below its if-else statement is another if-else statement to finally verify if the class of the parent element of the container of the element that
        triggered this function is equals to the value of the cardType that got accepted as true*/
        for ( i = 0; i < arrayForImageModalBox.length; i++) {
            let mediaQueryOfDevice = arrayForImageModalBox[i].mediaQuery;
                if (window.matchMedia(mediaQueryOfDevice).matches) {
                    if ( i == 0 ) {
                        for ( j = 0; j < arrayForImageModalBox[i].typeOfCard.length; j++) {
                            if (classListOfParentElement == String(arrayForImageModalBox[i].typeOfCard[j].cardType)) {
                                if ( j == 0) {
                                    modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                } else if ( j == 1) {
                                    modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                } else if ( j == 2) {
                                    modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                } else if ( j == 3) {
                                    modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                } else {
                                    return;
                                }
                            }
                        }
                    } else if ( i == 1) {
                        for (j = 0; j < arrayForImageModalBox[i].typeOfCard.length; j++) {
                            for ( j = 0; j < arrayForImageModalBox[i].typeOfCard.length; j++) {
                                if (classListOfParentElement == String(arrayForImageModalBox[i].typeOfCard[j].cardType)) {
                                    if ( j == 0) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else if ( j == 1) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else if ( j == 2) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else if ( j == 3) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else {
                                        return;
                                    }
                                }
                            }
                        }
                    } else if ( i == 2) {
                        for (j = 0; j < arrayForImageModalBox[i].typeOfCard.length; j++) {
                            for ( j = 0; j < arrayForImageModalBox[i].typeOfCard.length; j++) {
                                if (classListOfParentElement == String(arrayForImageModalBox[i].typeOfCard[j].cardType)) {
                                    if ( j == 0) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else if ( j == 1) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else if ( j == 2) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else if ( j == 3) {
                                        modalImageContainer.style.gridAutoRows = String(arrayForImageModalBox[i].typeOfCard[j].gridAutoRowValue[i]);
                                    } else {
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
        }
        // INSERTING IMAGES TO MODAL BOX
        for ( i = 0; i < imageArray.length; i++) {
            if (event == containerOfArtworks[i]) {
                modalImageContainer.innerHTML = imageArray[i];
                modalImageName.innerText = nameArray[i].innerText;
                modalDescription.innerHTML = modalImageDescriptionArray[i];
                document.title = 'Main Gallery ' + '| ' + modalImageName.innerText;
            } else if (modalImageContainer.innerHTML == imageArray[i]) {
                return;
            }
        }
        // INSERTING IMAGES TO MODAL BOX
}


