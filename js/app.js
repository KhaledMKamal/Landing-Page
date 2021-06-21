/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Navigation Document Fragment
let navItems = document.createDocumentFragment();
// navigation ul
const navList = document.getElementById('navbar__list');
//Section variable
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// loop around sections to get id and Title
sections.forEach(section => {
        let sectionId = section.id;
        let sectionTitle = section.dataset.nav;
        // Create nav list tag
        let listItem = document.createElement('li');
        // Create nav link tag
        let navLink = document.createElement('a');
        // Append link to list
        listItem.appendChild(navLink);
        // Write nav link text
        navLink.textContent = `${sectionTitle}`;
        // Write the value of link anchor’s href attribute
        navLink.href = `#${sectionId}`;
        // Create Class for nav link
        navLink.className = 'menu__link';
        // Set data nav for links to use later
        navLink.dataset.nav = section.dataset.nav;
        // Append list to document fragment
        navItems.appendChild(listItem);
    });
// add nav content to HTML by appending document fragment to navigation ul
navList.appendChild(navItems);

// Add class 'active' to section when near top of viewport
toggleActiveState = () => {
        const observer = new IntersectionObserver(enteries => {
                enteries.forEach(entry => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('your-active-class');
                        } else {
                                entry.target.classList.remove('your-active-class');
                        }
                });
        }, 
        {
                threshold: 0.51,
        }
        );
        
        sections.forEach(section => {
                observer.observe(section);
        });
}
window.addEventListener('scroll', toggleActiveState); 

// Scroll to anchor ID using scrollTO event
let scrollToSection =  (evt) => {
        if (evt.target.nodeName === 'A') {
                evt.preventDefault();
                let selectedSectionDataNav = evt.target.dataset.nav;
                let selectedSection = document.querySelector(`section[data-nav='${selectedSectionDataNav}']`);
                console.log(selectedSection);
                selectedSection.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
toggleMenu = () => {
        let toggle = document.querySelector('.navbar__menu');
        console.log(toggle);
        if (toggle.className === "navbar__menu") {
          toggle.className += " responsive";
        } else {
          toggle.className = "navbar__menu";
        }
      }
      
// Scroll to section on link click
navList.addEventListener('click', scrollToSection);
// Set sections as active


