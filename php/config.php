<?php 
    //informations d'identification
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'registration');

    //connexion à la base de données MySQL
    $connexion = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    //Vérifier la connexion
    if($connexion === false){
        die("Erreur: Impossible de se connecter. " .mysqli_connect_error());
    }
?>