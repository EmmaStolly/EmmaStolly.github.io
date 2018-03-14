window.onload = function() {
  currentYear();
};


function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};


//Making bounce animations on the nav bar

//Variable that looks for anything in html with the class .navbar-brand
const navBrand = document.querySelector('.navbar-brand');
//Listens to navBrand, when mouse over look at addbounce function.
navBrand.addEventListener('mouseenter', addBounce);
//Listens to navBrand, when mouse leaves look at addbounce function.
navBrand.addEventListener('animationend', removeBounce);

//Variable looks for all navigation bar links
//const navLinks = document.querySelectorAll('.nav-link');
//Seperates the links so they don't all animate at the same time
//navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addBounce));
//navLinks.forEach(navLink => navLink.addEventListener('animationend', removeBounce));


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
