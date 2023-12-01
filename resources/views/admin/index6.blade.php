<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Student System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
    <link rel="stylesheet" href="{{ asset('assets/css/admin/style.css') }}">
</head>
<body>
    <!--Login page-->
    <div id="login_page">
        <div id="adminLoginPage"></div>
    </div>
   
 
   <!--HomePage-->
    <div id="home_page" style="display:none">
        <nav class="navbar navbar-expand-md bg-white shadow  fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand text-black fw-bold text-uppercase">Student System</a>
                <button role="button" class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#btn">
                    <i class="fa-solid fa-bars"></i>
                </button>
               <div class="navbar-collapse collapse" id="btn">
                  <ul class="navbar-nav ms-auto">
                     <li class="nav-item">
                        <a href="javascript:void(0)" onclick="btnHome()" class="nav-link text-uppercase text-black fw-bold">Home</a>
                     </li>
                     <li class="nav-item">
                        <a href="javascript:void(0)" onclick="btnStudent()" class="nav-link text-uppercase text-black fw-bold">Student</a>
                     </li>
                     <li class="nav-item">
                        <a href="javascript:void(0)" onclick="btnLogout()" class="nav-link text-uppercase text-black fw-bold">Logout</a>
                     </li>
                  </ul>
               </div>
            </div>
        </nav>
       <!-- Add Student Modal Content -->
 <div class="modal fade" id="modalAddingStudent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog"><div class="modal-content" id="modalContent"></div></div>
 </div>
    <!--Modal End-->

<!-- Update Student Modal Content -->
<div class="modal fade" id="modalUpdateStudent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog"><div class="modal-content" id="modalUpdateContent"></div></div>
 </div>
    <!--Modal End-->

<!-- Remove Student Modal Content -->
<div class="modal fade" id="modalRemoveStudent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog"><div class="modal-content" id="modalRemoveContent"></div></div>
 </div>
<!--Modal End-->

        <!--Section-->
        <div class="py-5">
            <div id="home_section"></div>
            <div id="student_section" style="display: none"></div>
            <div id="firstYear_section" style="display: none"></div>
            <div id="secondYear_section" style="display: none"></div>
            <div id="thirdYear_section" style="display: none"></div>
            <div id="forthYear_section" style="display: none"></div>
        </div>
    <!--End Section-->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script  src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/5c189a1467.js" crossorigin="anonymous"></script>
    <script src="{{ asset('assets/js/admin/dom.js') }}"></script>
    <script src="{{ asset('assets/js/admin/function.js') }}"></script>
</body>
</html>