//Makes 'Emma Stolly' on navbar bounce when hovered over
//Variable that looks for anything in html with the class .navbar-brand
const navBrand = document.querySelector('.navbar-brand');
//Listens to navBrand, when mouse over look at addbounce function.
navBrand.addEventListener('mouseenter', addBounce);
//Listens to navBrand, when mouse leaves look at addbounce function.
navBrand.addEventListener('animationend', removeBounce);

//e = events
function addBounce(e){
//add animated bounce to navbar-brand class
  this.classList.add('animated', 'bounce');
}

//e = events
function removeBounce(e){
//remove animated bounce from navbar-brand class
this.classList.remove('animated', 'bounce');
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
