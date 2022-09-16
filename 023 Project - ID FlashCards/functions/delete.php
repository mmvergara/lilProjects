<?php 
/** @var $pdo \PDO */
require_once '../server/ConnectDatabase.php';

$id = $_POST['id'] ?? null;
$cardsID = $_POST['cardsID'] ?? null;

if(!$id){
  header('Location: ../AddRemCards.php?cardsID='.$cardsID);
}
$statement = $pdo->prepare('DELETE FROM cards WHERE id = :id');
$statement->bindValue(':id',$id);
$statement->execute();
header('Location: ../AddRemCards.php?cardsID='.$cardsID);


?>