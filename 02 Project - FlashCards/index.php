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
    
        
<form action="index.php" method="post" enctype="multipart/form-data"> 
    <div class="cards-set-number">
        <button name="submitcardnumber" type="submit" value="1" class="btn btn-sm btn-info card-setting">Card Set# 1</button>
        <button name="submitcardnumber" type="submit" value="2" class="btn btn-sm btn-info card-setting">Card Set# 2</button>
        <button name="submitcardnumber" type="submit" value="3" class="btn btn-sm btn-info card-setting">Card Set# 3</button>
        <button name="submitcardnumber" type="submit" value="4" class="btn btn-sm btn-info card-setting">Card Set# 4</button>
        <button name="submitcardnumber" type="submit" value="5" class="btn btn-sm btn-info card-setting">Card Set# 5</button>
        <button name="submitcardnumber" type="submit" value="6" class="btn btn-sm btn-info card-setting">Card Set# 6</button>
        <button name="submitcardnumber" type="submit" value="7" class="btn btn-sm btn-info card-setting">Card Set# 7</button>
        <button name="submitcardnumber" type="submit" value="8" class="btn btn-sm btn-info card-setting">Card Set# 8</button>
        <button name="submitcardnumber" type="submit" value="9" class="btn btn-sm btn-info card-setting">Card Set# 9</button>
        <button name="submitcardnumber" type="submit" value="10" class="btn btn-sm btn-info card-setting">Card Set# 10</button>
        <button name="submitcardnumber" type="submit" value="11" class="btn btn-sm btn-info card-setting">Card Set# 11</button>
        <button name="submitcardnumber" type="submit" value="12" class="btn btn-sm btn-info card-setting">Card Set# 12</button>
    </div>
</form>
    

<?php

if (isset($_POST["submitcardnumber"])){
    $inputcardnumber = $_POST["submitcardnumber"];

    if ($inputcardnumber > 0){
        echo "<script> let anpIndex = 1;</script>";
    }
};

?>

    <div class="form-group main-form-container">
        <div class="input-group">
            <input type="number" class="form-control" id="nexttimer" placeholder="" max="60" value="5">
                <div class="input-group-prepend">
                    <button class="btn btn-info settime">Submit</button>
                </div>
        </div>
    </div>

    <h5 class="Next-Card-in dp-none">Next Card in <span id="time--display--span">5</span>s</h5>

    <div class="bigppcontainer dp-none"> 
        <div class="FC-main-contain">









<?php


$inputcardnumber;
$servername = "localhost";
$username = "id19028478_xcrownie";
$password = "u3U%vVekun=x9S!Q";

$conn = mysqli_connect($servername, $username, $password);
$dbconnect = mysqli_select_db ($conn, 'id19028478_fcdatabase');



$finalindex = "cards" . $inputcardnumber;
$conn = mysqli_connect($servername, $username, $password);
$dbconnect = mysqli_select_db ($conn, 'id19028478_fcdatabase');
$query = "SELECT * FROM `$finalindex`";
$query_run = mysqli_query($conn, $query);

while ($row = mysqli_fetch_array($query_run)){
    ?>
                <div class="FC-sub-contain dp-none">
                    <a href="#/" class="card-question">
                        <div><?php echo $row ['question']?></div>
                    </a>
                    <a href="#/" class="card-answer dp-none">
                        <div><?php echo $row ['answer']?></div>
                    </a>
                </div>
<?php
}
?>





        </div> <!-- FC Main -->
            <div class="button-container">
                <button type="button" class="btn btn-info button--back" href="index.php">Reset</button>
                <button type="button" class="btn btn-info button--next">Click here to start <3 </button>
            </div>
            <h4 class="h4finish dp-none"> You finished all cards <span id="you-finished-all"></span> <a href="#/" id="shuffle-button">Click to shuffle them</a></h4>
            
    </div>
    


    <script>
    
    if (anpIndex == 1){
    $('.cards-set-number').addClass('dp-none')
    };
    </script> 


    <script src="script.js"></script>








</body>
</html>