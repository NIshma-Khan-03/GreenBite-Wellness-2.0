

//--------------------------------
// main.js - common for all pages
//--------------------------------
// this file contains:
// 1. mobile hamburger menu
// 2. rotating quotes for homepage
// 3. daily health tips for homepage
// 4. newsletter signup for homepage


document.addEventListener('DOMContentLoaded' , function(){
    console.log('GreenBite Loaded!!');

    setMobileMenu();
    setRotatingQuotes();
    setDailyHealthTip();
    setNewsletterForm();
    setScrollAnimations();
});



//----------------------------------
// Mobile Hamburger Menu operations
//----------------------------------

function setMobileMenu() {


    //get the hamburger menu~
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');


    //cheks if the element exists
    if (!hamburger || !navMenu) {
        return;
    }


    //when hamburger is clicked, ithe menu opens/closes
    hamburger.addEventListener('click' , function() {
        navMenu.classList.toggle('active');
    });


    // to close the menu when any link is clicked
    var menuLinks = document.querySelectorAll('.nav-menu a');
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
}



// ==================
// - roating quotes -
// ==================

// changing quotes every 4 secs

function setRotatingQuotes() {
    var quotes = [
        "A healthy outside starts from the inside.",
        "Take care of your body. It's the only place you have to live.",
        "Health is not aout the weight you lose, but also the life you gain.",
        "Your body can stand a,most anything. It's your mind you have to covince.",
        "Eat well, mov daily, hydrate often, sleep lots, love your body.",
        "Progress, not perfection.",
        "A healthy lifestyle is a lifelong commitment, not a temporary fix.",
        "Nourish your body, mind, and soul every single day."
    ];

    //getting quotes element
    var quoteElement = document.getElementById('totating-quote');


    // cehching if quote elment exists in homepage only
    if (!quoteElement) {
        return;
    }

    var currentIndex = 0; 

    function xhangeQuote() {
        quoteElement.style.opacity = '0'; //fade out animation

        setTimeout(function() {
            currentIndex = (currentIndex + 1) % quotes.length;  // go to the next quote
            quoteElement.textContent = quotes[currentIndex];
            quoteElement.style.opacity = '1'   // fade in
        }, 500);
    }

    setInterval(changeQuote, 4000);

}