<?php 
/** @var $pdo \PDO */
require_once '../server/ConnectDatabase.php';


$cardsID = $_POST['cardsID'];

if(!$cardsID){
  header('Location: ../AddRemCards.php?cardsID='.$cardsID);
}
$statement = $pdo->prepare('DELETE FROM cards WHERE cardID = :cardsID');
$statement->bindValue(':cardsID',$cardsID);
$statement->execute();
header('Location: ../AddRemCards.php?cardsID='.$cardsID);
?>