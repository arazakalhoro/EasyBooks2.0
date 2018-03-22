
<!doctype html>

<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Easy Book Store</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="app/bower_components/html5-boilerplate/dist/css/normalize.css">
    <link rel="stylesheet" href="app/bower_components/html5-boilerplate/dist/css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.7/angular-material.min.css">
    <link rel="stylesheet" href="app/app.css">
    <link rel='icon' href='app/images/ezy_exe.png' type='image/x-icon'/>
    <link rel="stylesheet" href="app/coverflow/css/style.css">

<body ng-app="myApp">


<div class="jumbotron">
    <div class="container text-center">
        <h1>E A S Y B O O K S™</h1>
        <p><code><small>by Aleks & Darlington</small></code></p>
    </div>
</div>

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#!/mainBooks"><i class="glyphicon glyphicon-home"></i></a></li>
                <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#!/mainBooks">Books</a></li>

                <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#!/about">About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">


                <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#!/cart"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
            </ul>

        </div>
    </div>
</nav>

<div class="main">
    <div class="container">
        <div ng-view></div>

        <div class="footer">
            <div class="container">
                <h2>Available for iOS and Android.</h2>
                <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/app-store.png"
                     width="120px"/>
                <img src="https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/google-play.png"
                     width="110px"/>
            </div>
        </div>
    </div>

    <mini-cart></mini-cart>

    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
</div>

<!-- Angular Material requires Angular.js Libraries -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-aria.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-messages.min.js"></script>
<!-- Angular Material Library -->
<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.7/angular-material.min.js"></script>

<script src="app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script src="app/bower_components/angular-route/angular-route.js"></script>
<script src="app/app.js"></script>
<script src="app/views/mainBooks/mainBooks.js"></script>
<script src="app/views/cart/cart.js"></script>
<script src="app/views/about/about.js"></script>
<script src="app/views/singleBook/singleBook.js"></script>
<script src="app/services/library.js"></script>
<script src="app/services/shoppingCart.js"></script>
<script src="app/directives/miniCart/miniCart.js"></script>
<script src="app/components/version/version.js"></script>
<script src="app/components/version/version-directive.js"></script>
<script src="app/components/version/interpolate-filter.js"></script>

</body>
</html>