<!DOCTYPE html>
<html lang="en">
<?php $title='ID Flash Cards'; include './views/headTags.php' ?>
<body class="indexBody">
  <span class="header1-container">
    <div class="header1" id="IDHeader">ID Flash Cards</div><br>
    <div class="header1" id="flashCardHeader"></div>
  </span>
  <div id="asd" class="card-id-form-container">
    <h3>Enter Card Set ID</h3>
    <p>if a set of cards is associated with that ID you can access them, otherwise it will create a new set of cards associated with that id</p>
    <form action="takeQuiz.php" method="get">
      <input name="cardsID" type="text" class="form-control">
      <button type="submit" class="btn bg-white submit-button">Submit ID</button>
    </form>
  </div>
  <?php 
  include './views/footer.php';
  include './views/vantajs.php'
   ?>
</body>


</html>