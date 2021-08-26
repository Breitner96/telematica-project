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
                    <a href="pedidos.php">Mis pedidos</a>
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
                    <li><a href="pedidos.php">
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

        <section class="login-register">

            <div class="loginuser">
                <h2>Inicie Sesion</h2>
                <form id="iniciosesion">

                    <div class="container1">

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Escriba su email" name="email" required autocomplete="email">

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Escriba su password" name="password" required autocomplete="current-password">

                        <button type="submit">Login</button>
                    </div>

                </form>

                <p class="iniciar"></p>
            </div>

            <div class="register">
                <h2>Registre su usuario</h2>
                <form id="registerusers">

                    <div class="container1">


                        <label for="name"><b>Nombre</b></label>
                        <input type="text" placeholder="Escriba su Nombre" name="name" required autocomplete="name">


                        <label for="phone"><b>Telefono</b></label>
                        <input type="number" placeholder="Escriba su Telefono" name="phone" required autocomplete="tel">

                        <label for="location"><b>Direccion</b></label>
                        <input type="text" placeholder="Escriba su Direccion" name="location" required autocomplete="street-address">

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Escriba su email" name="email" required>

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Escriba su password" name="password" required>

                        <button type="submit">Registrar</button>
                    </div>

                </form>

                <p class="error"></p>

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
    <script src="/app.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/login-registerController.js"></script>


</body>

</html>