<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AdminLTE 3 | Dashboard 3</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <!-- IonIcons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<!--
`body` tag options:

  Apply one or more of the following classes to to the body tag
  to get the desired effect

  * sidebar-collapse
  * sidebar-mini
-->

<body class="hold-transition sidebar-mini">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="index.php" class="nav-link">Home</a>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index.php"><span class="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                    <span class="brand-text font-weight-light">ADMINISTRADOR</span>
                </span></a>

            <!-- Sidebar -->
            <div class="sidebar">

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                        <li class="nav-item menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    CONFIGURACIONES
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="maindashboard.php" class="nav-link">
                                        <i class="nav-icon fas  fa-child"></i>
                                        <p>Usuarios</p>
                                    </a>
                                </li>

                            </ul>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="generos.php" class="nav-link">
                                        <i class="nav-icon fas fa-users "></i>
                                        <p>Generos Prendas</p>
                                    </a>
                                </li>

                            </ul>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="categorias.php" class="nav-link">
                                        <i class="nav-icon fas fa-bookmark"></i>
                                        <p>Categorias</p>
                                    </a>
                                </li>

                            </ul>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="generotoCategories.php" class="nav-link">
                                        <i class="nav-icon fas fa-object-ungroup"></i>
                                        <p>Genero_Categorias</p>
                                    </a>
                                </li>
                            </ul>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="productos.php" class="nav-link">
                                        <i class="nav-icon fas fa-bullhorn"></i>
                                        <p>Productos</p>
                                    </a>
                                </li>

                            </ul>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="pedidosdash.php" class="nav-link">
                                        <i class="nav-icon fas fa-paper-plane"></i>
                                        <p>Pedidos</p>
                                    </a>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <div class="content-header">

            </div>

            <div class="content">

                <div class="container-fluid">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <form id="registrarproducto" class="mb-3">
                                <div class="form-group">
                                    <label for="nameprenda">Nombre</label>
                                    <input type="text" class="form-control" id="nameprenda" aria-describedby="namehelp" autocomplete="name" name="name" required>
                                    <small id="namehelp" class="form-text text-muted">Debe escribir un nombre del producto</small>
                                </div>

                                <div class="form-group">
                                    <label for="precio">Precio</label>
                                    <input type="number" class="form-control" id="precio" aria-describedby="preciohelp" autocomplete="number" name="precio" required>
                                    <small id="preciohelp" class="form-text text-muted">Debe escribir un precio para el producto</small>
                                </div>

                                <div class="form-group">
                                    <label for="talla">Talla</label>
                                    <input type="text" class="form-control" id="talla" aria-describedby="tallahelp" autocomplete="name" name="talla" required>
                                    <small id="tallahelp" class="form-text text-muted">Debe escribir una talla para el producto</small>
                                </div>

                                <div class="form-group">
                                    <label for="cantidad">Cantidad</label>
                                    <input type="number" class="form-control" id="cantidad" aria-describedby="cantidadhelp" autocomplete="number" name="cantidad" required>
                                    <small id="cantidadhelp" class="form-text text-muted">Debe escribir una cantidad para el producto</small>
                                </div>

                                <div class="form-group">

                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" name="imagen">
                                        <label class="custom-file-label" for="customFile" id="text">Elige una imagen para tu producto</label>
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label for="selectgeneros">Categoria</label>
                                    <select class="custom-select" id="seleccategoria" aria-describedby="categoriahelp">

                                    </select>
                                    <small id="categoriahelp" class="form-text text-muted">Indique la categoria a la que pertenece su producto</small>

                                </div>

                                <button type="submit" class="btn btn-dark">Registrar</button>
                                <a type="submit" class="btn btn-danger ml-3" href="productos.php">Regresar</a>
                            </form>
                        </div>
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.1.0
            </div>
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE -->
    <script src="dist/js/adminlte.js"></script>

    <!-- OPTIONAL SCRIPTS -->
    <script src="plugins/chart.js/Chart.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="dist/js/demo.js"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="dist/js/pages/productos.js"></script>
    <script src="dist/js/pages/editproducto.js"></script>

</body>

</html>