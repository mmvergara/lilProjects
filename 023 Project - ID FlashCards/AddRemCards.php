<?php 
/** @var $pdo \PDO */
require_once './server/ConnectDatabase.php';
$cardsID = $_GET['cardsID'];
if($cardsID === ''){ header('Location: index.php');};
$statement = $pdo->prepare('SELECT * FROM cards WHERE cardID LIKE :cardsID');
$statement->bindValue(':cardsID',$cardsID);
$statement->execute(); 
$cards = $statement->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<?php $title='Add or Remove Cards'; include './views/headTags.php' ?>
  <body>
    <?php include './views/navBar.php'?>
    <div class="container form-container">
<!-- Add Single Card -->
        <h5>Add a Card Here!!!</h5>
        <form action="./functions/addCard.php" method="post" class="form-group">
          <input type="hidden" name='cardsID' value="<?php echo $cardsID ?>">
          <input type="text" class="form-control" name='heads' placeholder="Head / Subject">
          <input type="text" class="form-control" name='tails' placeholder="Tails / Definition">
          <button type="submit" class="btn bg-white submit-button">Submit Card</button>
        </form>
<!-- Add Multiple Cards -->
        <h5 style="margin:10px 0em;">Add Multiple Cards at once using '===' and 'newline(\n)' as a seperator. <a target="_blank" href="https://cdn.discordapp.com/attachments/1016487287250501742/1016487369580494918/imgur.png">example here</a></h5>
        <form action="./functions/addMultiple.php" method="post" class="form-group">
            <input type="hidden" name='cardsID' value="<?php echo $cardsID ?>">
            <textarea class="form-control" name="multipleAdd" rows="3"></textarea>
            <button type="submit" class="btn bg-white submit-button">Submit Cards</button>
        </form>
    </div>
<!-- Table -->
    <div class="container  table-container table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="padding-left:1em;">#</th>
            <th scope="col">Head</th>
            <th scope="col">Tails <br></th>
            <th scope="col" style="padding-right:1em;">Actions</th>
          </tr>
        </thead>
        <tbody>
        <?php foreach($cards as $i => $card):?>
          <tr>
            <th scope="row" style="padding-left:1em;"><?php echo $i ?></th>
            <td style="max-width:100px;overflow: hidden;"><?php echo $card['head'] ?></td>
            <td style="max-width:100px;overflow: hidden;"><?php echo $card['tails']  ?></td>
            <td>
              <form style="display:inline-block" action="./functions/delete.php" method="post">
                <input  type="hidden" name='id' value="<?php echo $card['id'] ?>">
                <input  type="hidden" name='cardsID' value="<?php echo $cardsID ?>">
                <button type="submit" class="btn btn-sm bg-white delete-button">Delete</button>
              </form>
            </td>
          </tr>
        <?php endforeach ?>
        </tbody>
      </table>
<!-- Delete All -->
      <form action="./functions/deleteAll.php" method="post">
        <input type="hidden" name='cardsID' value="<?php echo $cardsID ?>">
        <button type="submit" class="btn btn-danger btn-md">Delete All</button>
      </form>
    </div>
  <?php 
    include './views/footer.php';
    include './views/vantajs.php'
   ?>
  </body>
</html>