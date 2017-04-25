/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownToggle() {
    "use strict";
	document.getElementById("dropDownItems").classList.toggle("show");
	document.getElementById("dropDownItems").classList.add("fadeIn");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	"use strict";
	if (!event.target.matches('.dropBtn')) {

		var dropdowns = document.getElementsByClassName("dropDownContent");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
			if (openDropdown.classList.contains('fadeIn')) {
				openDropdown.classList.remove('fadeIn');
			}
		}
	}
};
