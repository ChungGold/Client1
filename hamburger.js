// Signature
console.log('This website was created by Chung Au');
console.log('https://www.linkedin.com/in/chung-au/');

// hamburger
const hamburger = document.getElementById('hamburger-button');
const nav = document.getElementById('drop-down').classList;

hamburger.addEventListener('click', () => {
    if (nav.contains('hide') == true) {
        nav.remove('hide');
        document.getElementsByTagName('main')[0].style.transform = 'translateY(' + (20) + 'rem)';
        setTimeout(autoClose, 4000);
    } else if (nav.contains('hide') == false){
        nav.add('hide');
        document.getElementsByTagName('main')[0].style.transform = 'translateY(' + (0) + 'rem)';
    }
})

//autoclose Hamburger

function autoClose() {
    nav.add('hide');
    document.getElementsByTagName('main')[0].style.transform = 'translateY(' + (0) + 'rem)';
}

//copyright

const copyright = document.getElementById('xobrows');

let year = new Date().getFullYear();

copyright.innerHTML = `© XO Beauty Brows ${year} - All Rights Reserved`;

// Appointments alert

const bookingNav = document.getElementsByClassName('nav-text')[2];

const bookingButton = document.getElementById('button-box');

const bookingForm = document.getElementById('alert');

bookingNav.addEventListener('click', () => {
    bookingForm.style.visibility = 'visible';
})

bookingButton.addEventListener('click', () => {
    bookingForm.style.visibility = 'visible';
})

// Close alert

const formX = document.getElementById('formX');

formX.addEventListener('click', () => {
    bookingForm.style.visibility = 'hidden';
})







