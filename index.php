<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra y Apoya</title>
    <!-- https://material.io/resources/icons/?style=baseline -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
    <!-- https://material.io/resources/icons/?style=outline -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined" rel="stylesheet">
    <!-- https://material.io/resources/icons/?style=round -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" rel="stylesheet">
    <!-- https://material.io/resources/icons/?style=sharp -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Sharp" rel="stylesheet">
    <!-- https://material.io/resources/icons/?style=twotone -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone" rel="stylesheet">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap');
    </style>
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <header>

        <div class="logo-header">

            <img src="assets/img/logo.png" alt="Logo Empresa" class="responsive-img">

        </div>


        <nav class="nav-header">

            <div class="movil-only">

                <div id="mySidebar" class="sidebar">
                    <a href="javascript:void(0)" class="closebtn " onclick="closeNav()">×</a>
                    <a href="index.php">Inicio</a>
                    <button class="accordion">Categorias</button>
                    <div class="panel">
                        <button class="accordion1">Hombres</button>
                        <div class="panel1">
                            <a href="#">Zapatos</a>
                            <a href="#">Busos</a>
                            <a href="#">Pantalones</a>
                        </div>

                        <button class="accordion1">Mujeres</button>
                        <div class="panel1">
                            <a href="#">Zapatos</a>
                            <a href="#">Busos</a>
                            <a href="#">Pantalones</a>
                        </div>
                    </div>
                    <a href="#">Mis pedidos</a>
                    <a href="#"><span class="material-icons-outlined">
                            shopping_cart
                        </span></a>
                    <a href="login-register.php">Login/Registro</a>

                </div>


                <div id="main">
                    <button class="openbtn" onclick="openNav()">☰</button>
                </div>

            </div>

            <div class="nomovil">

                <ul>
                    <li><a href="index.php">
                            <p class="animation">Inicio</p>
                        </a></li>
                    <li>
                        <div class="dropdown">
                            <p class="dropbtn">Categorias</p>
                            <div class="dropdown-content">

                                <div class="dropdown1">
                                    <a href="#"><span class="dropbtn1">Mujeres</span></a>
                                    <div class="dropdown-content1">
                                        <a href="#">Camisas</a>
                                        <a href="#">Zapatos</a>
                                        <a href="#">Pantalones</a>
                                    </div>
                                </div>

                                <div class="dropdown2">
                                    <a href=""><span class="dropbtn2">Hombres</span></a>
                                    <div class="dropdown-content2">
                                        <a href="#">Camisas</a>
                                        <a href="#">Zapatos</a>
                                        <a href="#">Pantalones</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">
                            <p class="animation">Mis pedidos</p>
                        </a></li>
                    <li><a href="#">
                            <p class="animation"><span class="material-icons-outlined md-36">
                                    shopping_cart
                                </span></p>
                        </a></li>
                    <li class="login"><a href="login-register.php">
                            <p class="animation">Login/Resgistro</p>
                        </a></li>
                </ul>
            </div>

        </nav>

    </header>

    <main>

        <section class="main-slider">
            <!-- Slideshow container -->
            <div class="slideshow-container">

                <!-- Full-width images with number and caption text -->
                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>

                    <!-- <img src="assets/img/slider/zapatos.jpg" style="width:100%"> -->
                    <picture>

                        <source media="(min-width:1000px)" srcset="assets/img/slider/med/zapatos-med.jpg" class="slide">
                        <img src="assets/img/slider/zapatos.jpg" class="slide" alt="Ropa">


                    </picture>

                    <div class="text">ZAPATOS</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <!-- <img src="assets/img/slider/ropa.jpg" style="width:100%"> -->
                    <picture>

                        <source media="(min-width:1000px)" srcset="assets/img/slider/med/ropa-med.jpg" class="slide">
                        <img src="assets/img/slider/ropa.jpg" class="slide" alt="Ropa">


                    </picture>
                    <div class="text">CAMISAS</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <!-- <img src="assets/img/slider/pantalones.jpg" style="width:100%"> -->
                    <picture>

                        <source media="(min-width:1000px)" srcset="assets/img/slider/med/pantalones-med.jpg" class="slide">
                        <img src="assets/img/slider/pantalones.jpg" class="slide" alt="Ropa">


                    </picture>
                    <div class="text">PANTALONES</div>
                </div>

                <!-- Next and previous buttons -->
                <!-- <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a> -->
            </div>
            <br>

            <!-- The dots/circles -->
            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </section>

        <section class="Quienesomos">

            <div class="info">

                <h2>¿Quiénes somos?</h2>

                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a ratione similique culpa fugiat quia, quisquam at corporis error aliquam ipsum iusto? Placeat provident doloribus cupiditate id quod perferendis magni.
                    Reprehenderit corrupti nisi dolore ullam veritatis amet officia, aperiam repellendus tempore, sit enim molestiae possimus velit error, nam unde atque quod? Exercitationem numquam veritatis ea? Nemo reiciendis ipsam eaque odio.
                </article>

            </div>

            <div class="img-doc">
                <img src="assets/img/somos/quienessomos.jpg" class="img-info" alt="Quines somos">

            </div>




        </section>

        <section class="main-information">

            <div class="card">
                <img class="card-img" src="assets/img/slider/pantalones.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p><button class="vermas">Ver mas</button></p>
                </div>

            </div>

            <div class="card">
                <img class="card-img" src="assets/img/slider/ropa.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p><button class="vermas">Ver mas</button></p>
                </div>

            </div>

            <div class="card">
                <img class="card-img" src="assets/img/slider/zapatos.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p><button class="vermas">Ver mas</button></p>
                </div>

            </div>

            <div class="card">
                <img class="card-img" src="assets/img/slider/pantalones.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p><button class="vermas">Ver mas</button></p>
                </div>

            </div>

            <div class="card">
                <img class="card-img" src="assets/img/slider/ropa.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p><button class="vermas">Ver mas</button></p>
                </div>

            </div>

            <div class="card">
                <img class="card-img" src="assets/img/slider/zapatos.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <p><button class="vermas">Ver mas</button></p>
                </div>

            </div>

        </section>


    </main>

    <footer>

        <section class="footer">
            <div class="information">
                <p>Contactenos</p>
                <ul>
                    <li><span class="material-icons-outlined">
                            whatsapp
                        </span> 3022046328</li>
                    <li><span class="material-icons-outlined">
                            whatsapp
                        </span> 3106503996</li>
                </ul>
            </div>

            <div class="redes-main">
                <p>Redes Sociales</p>

                <div class="redes">
                    <span class="icon-instagram"></span>

                    <span class="icon-facebook"></span>
                </div>

            </div>

            <div class="pagos-main">
                <p>Metodos de pago</p>

                <div class="pagos">
                    <span class="icon-pse"></span>

                    <span class="icon-efectivo"></span>
                </div>

            </div>



        </section>


    </footer>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/app.js"></script>
</body>

</html>