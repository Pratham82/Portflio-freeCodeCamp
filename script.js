function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("navbar").style.width = "0%";
  }


var typed = new Typed('.animate', {
    // Waits 1000ms after typing "First"
    strings: ['Developer', 'Minimalist','Gamer'],
    typeSpeed:70,backSpeed:60,loop:true
});



var mybutton = document.getElementById("go-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}