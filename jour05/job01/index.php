<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <title>Index PHP</title>
        
    </head>

    <?php
        if (!isset($_SESSION['user'])){
            session_start();
            $_SESSION['user'] = "";
        }

        if(isset($_POST['prenom'])){
            $_SESSION['user'] = $_POST['prenom']; 
        }

        if (($_SESSION['user']) == ""){
            ?>
            <a href = "inscription.php">Inscription</a><br />
            <a href = "connexion.php">Connexion</a>
            <?php
        }
        else{
            echo "<p> Bonjour " . $_SESSION['user'] . "</p><br />";
            ?>

            <form action = "index.php" method = "post">
                <input id = "deconnexion" name = "deconnexion" type = "submit" value = "Déconnexion">
            </form>

            <?php
        }

        if (isset($_POST['deconnexion'])){
            unset($_SESSION['user']);
            session_destroy();
        }

        
    ?>


    <body>

    </body>

    <script src= "script.js"></script>

</html>