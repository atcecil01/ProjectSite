
// Create Menu button variable
var menuButton = document.getElementById('menuButton')
var menuOpen = false;
var nav = document.getElementById('nav')
var sWidth = window.screen.width;
console.log("Initial Width: " + sWidth);



// Create button event to toggle navigation menu view
menuButton.addEventListener("click", function() {
  // Test button functionality
  console.log("Button test confirmed ")
  // Toggle menu display
  if (menuOpen === false) {
    // add code to make #nav display viewable
    nav.style.display = 'block';
    menuOpen = true;
  } else {
    // add code to make #nav display dissappear
    // resizing after toggling menu results in no menu showing ////////////
    nav.style.display = 'none';
    menuOpen = false;
  };
})




// Add event listener to check screen width
window.addEventListener("resize", function() {
  sWidth=window.screen.width;
  console.log(sWidth);
  if (sWidth < 1027) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
    menuOpen = false;
    // Create button event to toggle navigation menu view
    menuButton.addEventListener("click", function() {
      // Test button functionality
      console.log("Button test confirmed")
      // Toggle menu display
      if (menuOpen === false) {
        // add code to make #nav display viewable
        nav.style.display = 'block';
        menuOpen = true;
      } else {
        // add code to make #nav display dissappear
        // resizing after toggling menu results in no menu showing ////////////
        nav.style.display = 'none';
        menuOpen = false;
      }
    })
  };
})