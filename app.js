document.addEventListener("DOMContentLoaded", function () { 
  var acc = document.getElementsByClassName("accordion");
  var acc1 = document.getElementsByClassName("accordion1");
  var i;
  var j;
  var panel;
  var panel1;
  // const axios = require('axios');

  // var slideIndex = 1;
  // showSlides(slideIndex);




  var slideIndex = 0;
  showSlides();
  animationAcc();


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }




  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // function showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active2", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active2";
  // }
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
    setTimeout(showSlides, 3000); 
  }

  function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";   
  }

  function animationAcc(){
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        document.getElementsByClassName("panel")[0].style.padding="8px 0px 8px 32px";
        panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.padding="0px";
          document.getElementsByClassName("panel")[0].style.paddingleft="32x";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          
        }
      });
    }
    
    for (j = 0; j < acc1.length; j++) {
      acc1[j].addEventListener("click", function() {
        this.classList.toggle("active1");
        
        document.getElementsByClassName("panel1")[0].style.padding="8px 0px 8px 32px";
        panel1 = this.nextElementSibling;
        if (panel1.style.maxHeight) {
          panel1.style.maxHeight = null;
          document.getElementsByClassName("panel1")[0].style.paddingleft="32x";
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          panel1.style.maxHeight = panel1.scrollHeight + "px";
          panel.style.maxHeight = panel1.scrollHeight + "200px";
          
        }
      });
    }
    
  }

});
