<?php  
$pdo = new PDO('mysql:host=localhost;port=4406;dbname=flashcards','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
?>