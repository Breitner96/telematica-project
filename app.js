let acc = document.getElementsByClassName("accordion");
let acc1 = document.getElementsByClassName("accordion1");
let login=document.getElementsByClassName("login")[0];

let nameuser=document.getElementsByClassName("usuarioname")[0];
let newuser=document.getElementsByClassName("user")[0];

let login1=document.getElementsByClassName("login1")[0];

let nameuser1=document.getElementsByClassName("usuarioname1")[0];
let newuser1=document.getElementsByClassName("user1")[0];
let userm=document.getElementsByClassName("usermovil")[0];

let i;
let j;
let panel;
let panel1;

let slideIndex = 0;


let miCookie = readCookie( "name" );

showUsers(miCookie);
showSlides();
animationAcc();



function readCookie(name) {

  let nameEQ = name + "="; 
  let ca = document.cookie.split(';');

  for(let i=0;i < ca.length;i++) {

    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent( c.substring(nameEQ.length,c.length) );
    }

  }

  return null;

}

function showUsers(cookie){

  if (cookie) {

    login.style.display="none";
    nameuser.innerHTML="Bienvenido/a "+cookie;
    login1.style.display="none";
    nameuser1.innerHTML="Bienvenido/a "+cookie;
    console.log("breit");

  }

  else{

    newuser.style.display="none";
    newuser1.style.display="none";
    userm.style.display="none";
  }


  
}

function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
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
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
