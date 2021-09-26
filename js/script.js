let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let linksbtn =  document.querySelector('.linksbtn');
let linksbtn2 =  document.querySelector('.linksbtn2');
let linksbtn3 =  document.querySelector('.linksbtn3');
let linksbtn4 =  document.querySelector('.linksbtn4');




hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');

});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');

});

linksbtn.addEventListener('click', function(){
    mobileNav.classList.remove('open');

});

linksbtn2.addEventListener('click', function(){
    mobileNav.classList.remove('open');

});

linksbtn3.addEventListener('click', function(){
    mobileNav.classList.remove('open');

});

linksbtn4.addEventListener('click', function(){
    mobileNav.classList.remove('open');

});




