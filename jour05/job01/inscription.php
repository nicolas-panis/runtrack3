<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <title>Inscription PHP</title>
        
    </head>

    <?php
        $db = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', '');

        $sql = 'SELECT email FROM utilisateurs';
        $request = $db->prepare($sql);
        $request->execute();

        $values = $request->fetchAll(PDO::FETCH_ASSOC);
        $values = json_encode($values);
        file_put_contents('data.json', $values);
        
    ?>

    <body>
        <form action = "connexion.php" method = "post" id = "inscription_form">
            <label for = "inscription_nom">Nom</label> <input id = "inscription_nom" name = "inscription_nom" type = "text"><br/>
            <label for = "inscription_prenom">Prenom</label> <input id = "inscription_prenom" name = "inscription_prenom" type = "text"><br/>
            <label for = "inscription_email">Email</label> <input id = "inscription_email" name = "inscription_email" type = "text"><br />
            <label for = "inscription_mdp">Mot de passe</label> <input id = "inscription_mdp" name = "inscription_mdp" type = "text"><br />
            <label for = "inscription_confirm_mdr">Confirmer mot de passe</label> <input id = "inscription_confirm_mdp" type = "text"><br/>
            <input id = "inscription_button" type = "button" value = "Inscription" name = "inscription_form">
        </form>
    </body>
    <script src= "script.js"></script>

</html>