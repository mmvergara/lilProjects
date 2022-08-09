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
                <form action="opt-cards.php" method="post" class="individual-form" enctype="multipart/form-data">
                <div class="form-control form-group">
                <input name="que'.$x.'"id="question" placeholder="question" type="text" class="form-control">
                <input name="ans'.$x.'"id="answer" placeholder="answer" type="text" class="form-control">
                <button name="Submit'.$x.'" type="submit" class="btn btn-l btn-info card-setting">Submit to Card Set '.$x.'</button>
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
    $q1 = $_POST ['que1'];
    $a1 = $_POST ['ans1'];
    $query = "INSERT INTO `cards1`(`question`,`answer`)
                VALUES ('$q1','$a1')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit2'])){
    $q2 = $_POST ['que2'];
    $a2 = $_POST ['ans2'];
    $query = "INSERT INTO `cards2`(`question`,`answer`)
                VALUES ('$q2','$a2')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit3'])){
    $q3 = $_POST ['que3'];
    $a3 = $_POST ['ans3'];
    $query = "INSERT INTO `cards3`(`question`,`answer`)
                VALUES ('$q3','$a3')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit4'])){
    $q4 = $_POST ['que4'];
    $a4 = $_POST ['ans4'];
    $query = "INSERT INTO `cards4`(`question`,`answer`)
                VALUES ('$q4','$a4')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit5'])){
    $q5 = $_POST ['que5'];
    $a5 = $_POST ['ans5'];
    $query = "INSERT INTO `cards5`(`question`,`answer`)
                VALUES ('$q5','$a5')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit6'])){
    $q6 = $_POST ['que6'];
    $a6 = $_POST ['ans6'];
    $query = "INSERT INTO `cards6`(`question`,`answer`)
                VALUES ('$q6','$a6')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit7'])){
    $q7 = $_POST ['que7'];
    $a7 = $_POST ['ans7'];
    $query = "INSERT INTO `cards7`(`question`,`answer`)
                VALUES ('$q7','$a7')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit8'])){
    $q8 = $_POST ['que8'];
    $a8 = $_POST ['ans8'];
    $query = "INSERT INTO `cards8`(`question`,`answer`)
                VALUES ('$q8','$a8')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit9'])){
    $q9 = $_POST ['que9'];
    $a9 = $_POST ['ans9'];
    $query = "INSERT INTO `cards9`(`question`,`answer`)
                VALUES ('$q9','$a9')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit10'])){
    $q10 = $_POST ['que10'];
    $a10 = $_POST ['ans10'];
    $query = "INSERT INTO `cards10`(`question`,`answer`)
                VALUES ('$q10','$a10')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit11'])){
    $q11 = $_POST ['que11'];
    $a11 = $_POST ['ans11'];
    $query = "INSERT INTO `cards11`(`question`,`answer`)
                VALUES ('$q11','$a11')";
    $query_run = mysqli_query($conn, $query);
}
if(isset($_POST['Submit12'])){
    $q12 = $_POST ['que12'];
    $a12 = $_POST ['ans12'];
    $query = "INSERT INTO `cards12`(`question`,`answer`)
                VALUES ('$q12','$a12')";
    $query_run = mysqli_query($conn, $query);
}




?>




    <script src="script.js"></script>
</body>
</html>