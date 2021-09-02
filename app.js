let acc = document.getElementsByClassName("accordion");
let acc1 = document.getElementsByClassName("accordion1");
let login = document.getElementsByClassName("login")[0];

let nameuser = document.getElementsByClassName("usuarioname")[0];
let newuser = document.getElementsByClassName("user")[0];

let login1 = document.getElementsByClassName("login1")[0];

let nameuser1 = document.getElementsByClassName("usuarioname1")[0];
let newuser1 = document.getElementsByClassName("user1")[0];
let userm = document.getElementsByClassName("usermovil")[0];

let i;
let j;
let panel;
let panel1;

let slideIndex = 0;

let miCookie = readCookie("name");

showUsers(miCookie);
showSlides();

listGeneros();

function readCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }

  return null;
}

function showUsers(cookie) {
  if (cookie) {
    login.style.display = "none";
    nameuser.innerHTML = "Bienvenido/a " + cookie;
    login1.style.display = "none";
    nameuser1.innerHTML = "Bienvenido/a " + cookie;
    console.log("breit");
  } else {
    newuser.style.display = "none";
    newuser1.style.display = "none";
    userm.style.display = "none";
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active2";
  setTimeout(showSlides, 3000);
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function listGeneros() {
  axios({
    url: "models/generosModel.php",
    method: "get",
    responseType: "json",
  })
    .then((res) => {
      if (res.data) {
        // console.log(item.phone);

        let resp = document.querySelector("#generos");

        resp.innerHTML = "";
        for (let item of res.data) {
          resp.innerHTML += `

          <div>
          
            <div class="dropdown1">
              <button class="dropbtn1">${item.name}
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content1" >

                <a href="#">${item.name}</a>
                  
              </div>
            </div>
            
          
          </div>
            `;
        }
      } else {
        console.log("Tabla Vacia");
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
