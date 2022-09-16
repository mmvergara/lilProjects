<?php 
/** @var $pdo \PDO */
require_once '../server/ConnectDatabase.php';


$cardsID = $_POST['cardsID'] ?? NULL;
if(!$cardsID){
  header('Location: ../AddRemCards.php?cardsID='.$cardsID);
}

// Subject1 === Definition1 \n Subject2 === Definition2
$data = explode("\n", $_POST['multipleAdd']);
// [Subject1 === Definition1 , Subject2 === Definition2]


function seperate($str) {
  return explode('===',$str);
}
$data = array_map("seperate",$data);
// [ [Subject1 , Definition1], [Subject2,Definition2] ]



foreach($data as $data) {
  if(empty($data)){continue;}

    $statement = $pdo->prepare("INSERT INTO cards (cardID,head,tails) 
    VALUES ( :cardID, :heads, :tails)");
    $statement->bindValue(':cardID',$cardsID);
    $statement->bindValue(':heads',$data[0]);
    $statement->bindValue(':tails',$data[1]);
    $statement->execute();
}

header('Location: ../AddRemCards.php?cardsID='.$cardsID);

?>