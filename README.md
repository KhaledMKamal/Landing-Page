# Landing Page Project

## Table of Contents

 * Description.
 * Navigation menu
 * Scroll to section
 * Section in view


## Description
a Landing page with a starting 4 sections where a navigation menu is dynamically created by calculating the sections in the page and the navigation menu has a toggle collapsable bars that appears at narrow screen windows to allow for better compatability with different devices, the scrolling to sections is made to be smooth and the section that comes sinto view are put in active class that distinguishes it from other sections.

## Navigation menu
navigation menu is dynamically created  based on the sections in the page.
The process of making it is as following :
* Selecting all the sections via document.querySelectorAll('section');
* Creating a Document Fragment via document.createDocumentFragment(); to append created nav items to it for the sake of performance.
* Looping on the sections list using a forEach loop and creating <li> elements with each iteration via document.createElement('li'); and append anchor <a> element as a child to  it.  Use the value of each section’s data-nav attribute to create the text inside each anchor <a> tag, and the value of each section id attribute to create the value of          anchor’s  href attribute in addition to symbol #.
* Appending each nav item to the previously created Document Fragment via docFargment.appendChild('listItem'); . And after closing the loop append the filled Document Fragment    to the unordered list <ul> element via list.appendChild('docFargment');
* The navigation menu is made responsive to change shape at narrow screen windows using CSS media query and inside it put the code for converting the nav menu from the            horizontal one to the vertical one. by the help of this tutorial https://www.w3schools.com/howto/howto_js_topnav_responsive.asp 
  


## Scroll to section
The scrolling to sections is made to be smooth.
The process of making it so is as following :
* create scrollToSection function: inside it I Prevented default action of the clicking on a link (which is jumping right to the section) via event.preventDefault(); then        detected the selected section by it's connected data-nav using query selector to choose the section then call scrollIntoView() method on the selected section above like this:    selectedSection.scrollIntoView({behavior: “smooth”, block: “center”); 
* lastly I Used a click event listener on the nav menu links navLink.addEventListener(‘click’, scrollToSection); 
  
## Section in view
The section that comes into view are put in active class that distinguishes it from other sections.
The process of making it so is as following :
* Using a scroll event listener window.addEventListener(‘scroll’, toggleActiveState); 
* Inside toggleActiveState function use intersection observer to detect the section inside the viewport (on screen) while scrolling. by the help of this tutorial https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/
* using the observer we loop around all section and apply the toggleActiveState function to add the class 'your-active-class' to the intersecting section and removing it from the none intersecting ones. 

  
  
  




