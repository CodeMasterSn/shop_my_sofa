<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php 
        require('config.php');
        if(isset($_REQUEST['username'], $_REQUEST['email'], $_REQUEST['password'])){
            // récupérer le nom d'utilisateur et supprimer les antislahes ajoutés par le formulaire
            $username = stripslashes($_REQUEST['username']);
            $username = mysqli_real_escape_string($connexion, $username);

            //récupérer l'email et supprimer les antislahes ajoutés par le formulaire
            $email = stripslashes($_REQUEST['email']);
            $email = mysqli_real_escape_string($connexion, $email);

            //récupérer le mot de passe et supprimer les antislashes ajoutés par le formulaire
            $password = stripslashes($_REQUEST['password']);
            $password = mysqli_real_escape_string($connexion, $password);

            //requête SQL + mot de passe crypté
            $query = "INSERT into `users` (username, email, password) VALUES ('$username', '$email', '".hash('sha256', $password)."')";

            //Exécurer la requête sur la base de données
            $res = mysqli_query($connexion, $query);
            if($res){
                echo "
                    <div class='sucess'>
                        <h3> Vous êtes inscrit avec succès. </h3>
                        <p>Cliquez ici pour vous <a href='login.php'>Connecter</a></p>
                    </div>
                "; }
            } else{
                ?>
                    <form class="box" action="" method="post">
                        <h1 class="box-logo box-title">
                            <a href="https://waytolearn.com">WayToLearnX.com</a>
                        </h1>
                        <h1 class="box-title">S'inscire</h1>
                        <input type="text" class="box-input" name="username" placeholder="Nom d'utilisateur" required>
                        <input type="email" class="box-input" name="email" placeholder="Email" required>
                        <input type="password" class="box-input" name="password" placeholder="Mot de passe" required>
                        <input type="submit" class="box-button" name="submit" value="S'inscrire">
                        <p class="box-register">
                            Déjà inscrit ? 
                            <a href="login.php">Connectez-vous ici</a>
                        </p>
                    </form>
                <?php } ?>
            }
        }
    ?>
</body>
</html>