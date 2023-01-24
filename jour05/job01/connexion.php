<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <title>Connexion PHP</title>
        
    </head>

    <?php
        $db = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', '');

        $sql = 'SELECT * FROM utilisateurs';
        $request = $db->prepare($sql);
        $request->execute();
        
        $values = $request->fetchAll(PDO::FETCH_ASSOC);
        $values = json_encode($values);
        file_put_contents('data.json', $values);
        
        if (isset($_POST['inscription_nom']) && isset($_POST['inscription_prenom']) && isset($_POST['inscription_email']) && isset($_POST['inscription_mdp'])){
            $sql = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)";
            $request = $db->prepare($sql);
            $request->execute(array($_POST['inscription_nom'], $_POST['inscription_prenom'], $_POST['inscription_email'], $_POST['inscription_mdp']));
            unset($_POST);
            header("Refresh:0");
        }
        
    ?>

    <body>
        <form>
            <label>Email</label> <input id = "connexion_email" name = "connexion_email" type = "text">
            <label>Mot de passe</label> <input id = "connexion_mdp" name = "connexion_mdp" type = "text">
            <input id = "connexion_button" name = "connexion_button" type = "button" value = "Connexion">
        </form>

    </body>
    <script src= "script.js"></script>

</html>