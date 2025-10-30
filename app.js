// Wait for the DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
            
    const header = document.querySelector(".main-header");
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    // --- 1. STICKY HEADER ---
    // Listen for the scroll event on the window
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // If user has scrolled 50px down
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    // --- 2. MOBILE NAVIGATION ---
    // Listen for a click on the hamburger button
    navToggle.addEventListener("click", () => {
        // Toggle the 'nav-open' class on the nav menu
        mainNav.classList.toggle("nav-open");
        // Also toggle a class on the button itself for the 'X' animation
        navToggle.classList.toggle("nav-open");
    });

    // --- 3. SCROLL ANIMATION (INTERSECTION OBSERVER) ---
    
    // Select all elements with the .animate-on-scroll class
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    // Set up the observer options
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: "0px",
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (i.e., on screen)
            if (entry.isIntersecting) {
                // Add the .is-visible class to trigger the CSS animation
                entry.target.classList.add("is-visible");
                // Stop observing this element so the animation doesn't re-run
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- 4. TESTIMONIAL SLIDER (SWIPER.JS) ---
    // Check if the swiper container exists and initialize Swiper
    if (document.querySelector('.testimonial-slider')) {
        const swiper = new Swiper('.testimonial-slider', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000, // 5 seconds
                disableOnInteraction: false,
            },
            
            // Add pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

});
document.addEventListener("DOMContentLoaded", () => {
            
    const header = document.querySelector(".main-header");
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");
    
    // NEW FORM ELEMENTS
    const contactForm = document.querySelector(".contact-form");
    const formMessage = document.getElementById("form-message");

    // --- 1. STICKY HEADER ---
    // ... (existing scroll listener code) ...
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // If user has scrolled 50px down
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    // --- 2. MOBILE NAVIGATION ---
    // ... (existing nav toggle code) ...
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("nav-open");
        navToggle.classList.toggle("nav-open");
    });

    // --- 3. SCROLL ANIMATION (INTERSECTION OBSERVER) ---
    // ... (existing Intersection Observer code) ...
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- 4. TESTIMONIAL SLIDER (SWIPER.JS) ---
    // ... (existing Swiper initialization code) ...
    if (document.querySelector('.testimonial-slider')) {
        const swiper = new Swiper('.testimonial-slider', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
        });
    }

    // === NEW SECTION: 5. CONTACT FORM SUBMISSION HANDLING ===
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault(); 
            
            // In a real application, you would send this data to a server (via fetch API).
            // For now, we'll just simulate success and show a message.
            
            // Show success message
            formMessage.style.color = 'green';
            formMessage.textContent = 'Thank you! Your message has been sent successfully. We will be in touch soon.';
            
            // Reset the form after a short delay
            setTimeout(() => {
                contactForm.reset();
                formMessage.textContent = '';
            }, 3000); // Message disappears after 3 seconds
        });
    }

});

