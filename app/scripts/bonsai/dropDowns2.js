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
var buttons = document.getElementsByTagName("button");
function buttonCallBack() {
	"use strict";
	var a = this.getAttribute('data-dropdown');
	var b = document.getElementsByClassName('dropdown-content')[0].id;
	console.log(a);
	console.log(b);
	if (a === b) {
		document.getElementById(b).classList.toggle("show");
	} else {
		alert("not equal");
	}
}
for (var i = 0; i <= buttons.length; i += 1) {
	buttons[i].onclick = buttonCallBack;
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
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
