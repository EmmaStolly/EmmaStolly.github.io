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
