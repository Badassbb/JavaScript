<?php
// Récupère les données du formulaire GET
$nom   = "estranger"; //Comme on ne le connait pas il a le nom "estranger" par défaut
$score = $_GET['score']; // le client envoie son score
$dat   = date("d/m/Y H:i:s");
//echo "$nom;$score;$dat\n";

$fic = 'high_score_casino.csv';
// Obtient le contenu intégral du fichier CSV
$str = file_get_contents($fic);

// Ajoute une nouvelle entrée au fichier CSV
$str.= "$nom;$score;$dat\n";

// Écriture sur le disque. Si le fichier n'existe pas il est créé
file_put_contents($fic, $str);

// le serveur envoie au client la table des scores
echo $str;
?>