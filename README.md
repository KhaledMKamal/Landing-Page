# Landing Page Project

## Table of Contents

* Description
* Navigation menu
* Scroll to section
* Section in view


## Description
a Landing page with a starting 4 sections where a navigation menu is dynamically created by calculating the sections in the page and the navigation menu has a toggle collapsable bars that appears at narrow screen windows to allow for better compatability with different devices, the scrolling to sections is made to be smooth and the sections that come into view are put in active class that distinguish it from other sections.

## Navigation menu
navigation menu is dynamically created  based on the sections in the page.
The process of making it is as following :
- Selecting all the sections via document.querySelectorAll('section');
- Creating a Document Fragment via document.createDocumentFragment(); to append created nav items to it for the sake of performance.
- Looping on the sections list using a forEach loop and creating <li> elements with each iteration via document.createElement('li'); and append anchor <a> element as a child to it.  Use the value of each section’s data-nav attribute to create the text inside each anchor <a> tag, and the value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #.
- Appending each nav item to the previously created Document Fragment via docFargment.appendChild('listItem'); . And after closing the loop append the filled Document Fragment to the unordered list <ul> element via list.appendChild('docFargment');
  

  




