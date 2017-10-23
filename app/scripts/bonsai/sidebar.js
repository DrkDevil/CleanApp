/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function sidebarCollapse() {
  'use strict';
  document.getElementById('sidebarSubmenu').classList.toggle('show');
  //console.log('clicked');
  document.getElementById('sidebarCollapse').classList.add('active');
}
