<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Cards1</title>

        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <style>
            .form-control{
                background-color:#002634;
                color:white;
            }
            .form-control:hover{
                background-color:#002634;
                color:white;
            }
            .form-control:focus{
                background-color:#002634;
                color:white;
            }
        </style>
        <script src="https://kit.fontawesome.com/d6a8902b29.js" crossorigin="anonymous"></script>
    <!-- Bootstrap Jquery-->
</head>
<body>

        <header id="main--header">
            <ul class="ul--tag">
                <li class="li--tag"><a href="index.php">Play!</a></li>
                <li class="li--tag"><a href="opt-cards.php">Add</a></li>
                <li class="li--tag"><a href="delete-cards.php">Delete</a></li>
            </ul>
        </header>
    
    <div class="form-big-pp-container">




        <?php 
        for ($x = 1; $x <= 12; $x++){
            echo '
                <form action="delete-cards.php" method="post" class="individual-form" enctype="multipart/form-data">
                <div class="form-control form-group">
                <button name="Submit'.$x.'" type="submit" class="btn btn-l btn-info card-setting">Delete Card Set #'.$x.'</button>
            </div>
        </form>';

        }
        
        ?>
    </div>



<?php

$servername = "localhost";
$username = "id19028478_xcrownie";
$password = "u3U%vVekun=x9S!Q";
$conn = mysqli_connect($servername, $username, $password);
$dbconnect = mysqli_select_db ($conn, 'id19028478_fcdatabase');



if(isset($_POST['Submit1'])){
    $query = "DELETE FROM cards1";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";

}
if(isset($_POST['Submit2'])){
    $query = "DELETE FROM cards2";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";

}
if(isset($_POST['Submit3'])){
    $query = "DELETE FROM cards3";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";

}
if(isset($_POST['Submit4'])){
    $query = "DELETE FROM cards4";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";

}
if(isset($_POST['Submit5'])){
    $query = "DELETE FROM cards5";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";

}
if(isset($_POST['Submit6'])){
    $query = "DELETE FROM cards6";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";
}
if(isset($_POST['Submit7'])){
    $query = "DELETE FROM cards7";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";
}
if(isset($_POST['Submit8'])){
    $query = "DELETE FROM cards8";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";
}
if(isset($_POST['Submit9'])){
    $query = "DELETE FROM cards9";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";    
}
if(isset($_POST['Submit10'])){
    $query = "DELETE FROM cards10";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";
}
if(isset($_POST['Submit11'])){
    $query = "DELETE FROM cards11";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";
}
if(isset($_POST['Submit12'])){
    $query = "DELETE FROM cards12";
    $query_run = mysqli_query($conn, $query);
    echo "<script> alert('Deleted')</script>";
}




?>




    <script src="script.js"></script>
</body>
</html>