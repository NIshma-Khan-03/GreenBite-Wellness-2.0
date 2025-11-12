
console.log('🧪 Testing if main.js loads...');

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
    setupDailyHealthTip();
    setupNewsltterForm();
    setupScrollAnimation();
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
    var quoteElement = document.getElementById('rotating-quote');


    // cehching if quote elment exists in homepage only
    if (!quoteElement) {
        return;
    }

    var currentIndex = 0; 

    function changeQuote() {
        quoteElement.style.opacity = '0'; //fade out animation

        setTimeout(function() {
            currentIndex = (currentIndex + 1) % quotes.length;  // go to the next quote
            quoteElement.textContent = quotes[currentIndex];
            quoteElement.style.opacity = '1'   // fade in
        }, 500);
    }

    setInterval(changeQuote, 4000);

}




// ======================
// - daily health tips -
// ======================

// sjows different tips based on each day

function setupDailyHealthTip() {
    console.log('Starting health tip function. . .');
    
    var tipElement = document.getElementById('daily-health-tip');
    
    console.log('Tip element found:', tipElement);
    
    if (!tipElement) {
        console.log('❌ Could not find health tip element!');
        return;
    }
    
    var healthTips = [
        "Drink at least 8 glasses of water throughout the day to stay hydrated!",
        "Take a 10-minute walk after meals to aid digestion and boost energy.",
        "Fill half your plate with colorful vegetables for maximum nutrition.",
        "Aim for 7-9 hours of quality sleep to help your body recover and recharge.",
        "Practice deep breathing for 5 minutes to reduce stress and anxiety.",
        "Snack on nuts and seeds for healthy fats and sustained energy.",
        "Take regular breaks from screens to rest your eyes and mind.",
        "Eat the rainbow - different colored foods provide different nutrients!",
        "Do 10 push-ups or squats to get your blood flowing during work breaks.",
        "Start your day with gratitude - write down 3 things you're thankful for."
    ];
    
    // Simple random tip (changes every time you refresh)
    var randomIndex = Math.floor(Math.random() * healthTips.length);
    var selectedTip = healthTips[randomIndex];
    
    console.log('Selected tip:', selectedTip);
    
    // Show the tip immediately
    tipElement.textContent = selectedTip;
    
    console.log('✅ Health tip updated!');
}




// ==========================
// - newsletter signup form -
// ==========================

// validating email to save in local storage

function setupNewsltterForm() {
    var form = document.getElementById('newsletter-form');
    var emailInput = document.getElementById('newsletter-email');
    var messageDiv = document.getElementById('newsletter-message');


    //checks if for exists in homepage only
    if (!form) {
        return;
    }


    // when the form is submitted:
    form.addEventListener('submit', function(event) {
        event.preventDefault();   //stopping page from refreshing

        var email = emailInput.ariaValueMax.trim();

        if (isValidEmail(email)) {
            saveEmailToStorage(email);   //saving to the local storage
            showMessage('Thank you for subscribing! Welcome to GreenBIte!!', 'success');
            emailInput.value = '';   //clearing the input field
        } else {
            showMessage('✖ Please enter a valid email address.', 'error');
        }

    });


    // checking if email is valid
    function isValidEmail(email) {
        return email.includes ('@') && email.includes('.');
    }


    //funtion to save email to local storage
    function saveEmailToStorage(email) {
        try {
            
            // getting the existing email from the local storage or an emoty array
            var emails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
            
            // Only add if email doesn't already exist
            if (emails.indexOf(email) === -1) {
                emails.push(email);
                localStorage.setItem('newsletter_emails', JSON.stringify(emails));
            }

        } catch (error) {
            console.log('Coul not save email:', error);
        }

    }


    // function to show error message
    function showMessage(text, type) {
        if (!messageDiv) return;

        messageDiv.textContent = text;
        messageDiv.style.display = 'block';
        messageDivstyle.opacity = '1';

        
        // hide message after 5 secs
        setTimeout(function() {
            messageDiv.style.opacity = '0';
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 300);

        }, 5000);
    
    }

}



// ==================================
// - scroll animation for all pages -
// ==================================

// fade in animation for elements when you scroll up
function setupScrollAnimation() {

    var elements = document.querySelectorAll('.feature-card, .recipe-card, .tip-card, .calculator-form, .workout-form');

    if (elements.length === 0) {
        return;
    }


    // setting an observer to watch when elements comes into view
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                // Element is visible, fade it in
                entries[i].target.style.opacity = '1';
                entries[i].target.style.transform = 'translateY(0)';
            }
        }
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px'
    });



    for (var i = 0; i < elements.length; i++) {
        
        elements[i].style.opacity = '0';
        elements[i].style.transform = 'translateY(30px)';
        elements[i].style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(elements[i]);
    }
}





// =====================
// - helper functions -
// =====================

// showing a notification popup
function showNotification(message, type) {
    var notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText =
        'position: fixed; top: 90px; right: 20px;' +
        'background: ' + (type === 'success' ? '#FF9FAE' : '#FFB3C1') + '; ' +
        'color: white; padding: 15px 20px; border-radius: 15px ' +
        'box-shadow: 0 4px 12px rgba(255, 159, 174, 0.3); ' +
        'z-index: 1001; opacity: 0; transform: translateX(100%); ' +
        'transition: all 0.3s ease;' 
    ;


    document.body.appendChild(notification);


    // slide in animation
    setTimeout(function() {
        notification.style.opacity = '1';
        notification.style.transform = 'translateV(0)';
    }, 100);


    //slideout animetion and removing the message in 3 secs
    setTimeout(function() {
        notification.style.opacity = '0';
        notification.style.tranforma = 'translateV(100%)';
        setTimeout(function() {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
}




// animate a nimber from start to end for calculator
function animateNumber(getElementId, start, end, duration, suffix) {
    suffix = suffix || '';
    var element = document.getElementById(elementID);


    if (!element) return;


    var range = end - start;
    var increment = range / (duration / 16);
    var current = start;

    var timer = setInterval(function() {
        current = current + increment;


        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }

        element.textContent = Math.round(current) + suffix;

    }, 16);

}


console.log ('√ main.js loaded successfully!');