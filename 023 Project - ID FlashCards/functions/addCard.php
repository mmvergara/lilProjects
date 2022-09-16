<?php 
/** @var $pdo \PDO */
require_once '../server/ConnectDatabase.php';
$cardsID = $_POST['cardsID'];
$heads = $_POST['heads'];
$tails = $_POST['tails'];

if($heads === '' && $tails === ''){
  header('Location: ../AddRemCards.php?cardsID='.$cardsID);
  exit;
} else {  
  
  $statement = $pdo->prepare("INSERT INTO cards (cardID,head,tails) 
  VALUES ( :cardID, :heads, :tails)");
  $statement->bindValue(':cardID',$cardsID);
  $statement->bindValue(':heads',$heads);
  $statement->bindValue(':tails',$tails);
  $statement->execute();
  header('Location: ../AddRemCards.php?cardsID='.$cardsID);

}




?>