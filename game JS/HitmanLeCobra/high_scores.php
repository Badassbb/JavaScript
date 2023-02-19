<?php
// Récupère les données du formulaire GET
/*$nom   = "estranger"; //Comme on ne le connait pas il a le nom "estranger" par défaut
$score = $_GET['score']; // le client envoie son score
$dat   = date("d/m/Y H:i:s");
//echo "$nom;$score;$dat\n";

$fic = 'high_scores.csv';
// Obtient le contenu intégral du fichier CSV
$str = file_get_contents($fic);

// Ajoute une nouvelle entrée au fichier CSV
$str.= "$nom;$score;$dat\n";

// Écriture sur le disque. Si le fichier n'existe pas il est créé
file_put_contents($fic, $str);

// le serveur envoie au client la table des scores
echo $str;*/

//Le client a fini sa partie, il demande le csv des 5 meilleurs joueurs
if(isset($_GET["demander_les_scores"])) echo file_get_contents("high_scores.csv");
//Le client a comparé son score aux meilleurs, s'il a fait un score du top5 il a mis
//à jour le csv des High scores et me l'envoie pour que je l'écrive
else if(isset($_POST['csv'])) file_put_contents("high_scores.csv", $_POST['csv']);
?>