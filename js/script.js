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


const hello = document.querySelector('.hello');
//Listens to navBrand, when mouse over look at addbounce function.
hello.addEventListener('mouseenter', addFont);
//Listens to navBrand, when mouse leaves look at addbounce function.
hello.addEventListener('animationend', removeFont);

//e = events
function addFont(e){
//add animated bounce to navbar-brand class
  this.classList.add('animated', 'fontalicious');
}

//e = events
function removeFont(e){
//remove animated bounce from navbar-brand class
this.classList.remove('animated', 'fontalicious');
}
