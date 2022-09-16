
<?php 
  /** @var $pdo \PDO */
  require_once './server/ConnectDatabase.php';
  $cardsID = $_GET['cardsID'];
  if($cardsID === ''){ header('Location: index.php');};
  $statement = $pdo->prepare('SELECT * FROM cards WHERE cardID LIKE :cardsID ORDER BY RAND()' );
  $statement->bindValue(':cardsID',$cardsID);
  $statement->execute();
  $cards = $statement->fetchAll(PDO::FETCH_ASSOC);


?>

<!DOCTYPE html>
<html lang="en">
<?php $title='Take Quiz'; include './views/headTags.php' ?>
  <body>
    <?php include './views/navBar.php'?>
    <div class="main-big-container">

      <?php foreach($cards as $i => $card):?> 
        <div class="flipCard">
          <div class="flipCard--inner">
            <div class="flipCard--front">
              <p style="animation-delay: <?php echo $i/8 ?>s;animation-name:<?php if($i%2==0){echo 'fadeRight';}else{echo 'fadeLeft';} ?>;" class="para"><?php echo $card['head'];?></p>
            </div>
            <div class="flipCard--back">
              <p style="animation-delay: <?php echo $i/8 ?>s;animation-name:<?php if($i%2==0){echo 'fadeRight';}else{echo 'fadeLeft';} ?>;" class="para"><?php echo $card['tails'];?></p>
            </div>
          </div>
        </div>
      <?php endforeach?>
      
    </div>

    <script src="script.js"></script>
    <script src="https://kit.fontawesome.com/d6a8902b29.js" crossorigin="anonymous"></script>
    <?php include './views/vantajs.php'?>
    <script>
      VANTA.BIRDS({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffeee1,
        color1: 0x933f13,
        color2: 0x411304,
        wingSpan: 18.00,
        speedLimit: 1.00,
        quantity: 1.50
      })
  </script>
</body>
</html>
