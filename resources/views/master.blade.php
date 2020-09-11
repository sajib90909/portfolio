<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{ asset('images/site_image/e-d-logo.png') }}" type="image/icon type">
    <title>Admin panel</title>
    <link rel="stylesheet" href="{{ asset('admin-panel/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('admin-panel/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('admin-panel/css/style.css') }}">
</head>
<body>
<div id="preloader">
    <div id="preloader-status">
        <img src="{{ asset('images/site_image/e-d-logo.png') }}" alt="">
    </div>
</div>
<div class="body-overlay"></div>
<div class="wrapper" id="app">
    <!--        side menu -->
    <div class="side-menu" id="side-menu">
        <h2 class="side-bar-title border-bottom">ERADEVS</h2>
        <ul>
            <li class="side-bar-item active">
                <router-link class="text-decoration-none nav-link" to="/dashboard"><span class="side-bar-item-logo"><i class="fas fa-th-large"></i></span>Dashboard</router-link>
            </li>
            <li class="side-bar-item">
                <a href="" data-target="#about-me" aria-expanded="false" class="side-menu-dropdown text-decoration-none nav-link">
                    <span class="side-bar-item-logo"><i class="fas fa-user"></i></span>
                    About me
                    <span class="side-bar-item-logo-right"><i class="fas fa-angle-down"></i></span>
                </a>
                <ul class="dropdown-data pl-4" id="about-me" style="">
                    <li class="">
                        <router-link to="/basic" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Basic</router-link>
                    </li>
                    <li class="">
                        <router-link to="/skill-area" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Skill Area</router-link>
                    </li>
                    <li class="">
                        <router-link to="/testimonial" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Testimonial</router-link>
                    </li>
                    <li class="">
                        <router-link to="/client" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Clients</router-link>
                    </li>
                </ul>
            </li>
            <li class="side-bar-item">
                <a href="" data-target="#resume" aria-expanded="false" class="side-menu-dropdown text-decoration-none nav-link">
                    <span class="side-bar-item-logo"><i class="fas fa-file-alt"></i></span>
                    Resume
                    <span class="side-bar-item-logo-right"><i class="fas fa-angle-down"></i></span>
                </a>
                <ul class="dropdown-data pl-4" id="resume" style="">
                    <li class="">
                        <router-link to="/education" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Education</router-link>
                    </li>
                    <li>
                        <router-link to="/experience" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Experience</router-link>
                    </li>
                    <li>
                        <router-link to="/certificate" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Certificate</router-link>
                    </li>
                    <li>
                        <router-link to="/codingskills" class="text-decoration-none nav-link"><span class="side-bar-sub-item-logo"><i class="far fa-circle"></i></span>Coding Skills</router-link>
                    </li>

                </ul>
            </li>
            <li class="side-bar-item">
                <router-link class="text-decoration-none nav-link" to="/portfolio"><span class="side-bar-item-logo"><i class="fab fa-blogger-b"></i></span>Portfolio</router-link>
            </li>
            <li class="side-bar-item">
                <router-link class="text-decoration-none nav-link" to="/blog"><span class="side-bar-item-logo"><i class="fab fa-blogger-b"></i></span>Blogs</router-link>
            </li>
            <li class="side-bar-item">
                <router-link class="text-decoration-none nav-link" to="/settings"><span class="side-bar-item-logo"><i class="fas fa-tools"></i></span>Settings</router-link>
            </li>
        </ul>
    </div>
    <!--        end side-menu-->
    <!--        content-->
    <div class="content left-margin" id="content-div">
        <div class="top-bar ml-4 mr-4 mt-2">
            <button class="toggle-button-menu" id="side-menu-toggle"><i class="fas fa-bars"></i></button>
            <button class="toggle-button-menu button-position-absolute" id="side-menu-toggle-close"><i class="fas fa-times"></i></button>
            <img src="{{ asset('images/site_image/update-black.png') }}" alt="">
            <div class="account-div d-inline-block float-right account-div-toggle" data-target="#account-menu">
                <h4 class="d-none d-sm-inline-block">Sajib</h4>
                <div class="d-inline-block"><div class="account-menu-icon"><i class="fas fa-user-cog"></i></div></div>
            </div>
            <div class="account-menu" id="account-menu">
                <a class="account-menu-item text-decoration-none" href="#">Profile</a>
                <a class="account-menu-item text-decoration-none" href="#">Settings</a>
                <a class="account-menu-item text-decoration-none border-top mt-2" href="#">Logout</a>
            </div>
        </div>
        <!--            main content-->
        <div class="main-content p-4">
            <mainapp></mainapp>
        </div>
        <!--            end main content-->

    </div>
    <!--        end content-->
</div>
</body>
<script src="{{ mix('/js/app.js') }}"></script>
<script src="{{ asset('admin-panel/js/jquery.min.js') }}"></script>
<script src="{{ asset('admin-panel/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('admin-panel/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('admin-panel/js/side-menu.js') }}"></script>
<script>
    $(window).on('load', function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(50).fadeOut(100); // will fade out the white DIV that covers the website.
        $('body').delay(50).css({'overflow':'visible'});
    })
</script>
<!--<i class="fas fa-angle-down"></i>-->
<script>

</script>
</html>
