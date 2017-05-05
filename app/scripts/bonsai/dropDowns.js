/*
======================================
BonsaiUI: dropDowns.js v1.0.0
======================================
Licensed under MIT
====================================== 

============================================================================================
When the user clicks on the button, toggle between hiding and showing the dropdown content 
============================================================================================
 */

function dropDown() {
    'use strict';
	// Get the Value of data-dropdown 
	var b = document.getElementsByTagName('button')[0].getAttribute('data-dropdown');
	console.log(b);	
	// Get the value of dropdown-content's ID 
	var c = document.querySelector('.dropdown-content');
    console.log(c);	
	
	
	// This is here cause it shows the drop down on the demo
	document.getElementById("myDropDown").classList.toggle("show");		
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  "use strict";
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
     for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};