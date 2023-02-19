<?php
// Récupère les données du formulaire GET
$nom = "estranger"; //Comme on ne le connait pas il a le nom "estranger" par défaut
$score = 0;
$salle = $_GET['numeroDeSalle']; // La salle qu'il vient de sélectionner en cliquant sur une carte

// Ajoute une nouvelle entrée au fichier CSV
$fic = 'joueurs_roulette.csv'; // Le nom du fichier est dans cette variable pour ne l'éditer qu'une seule fois sans rechercher/remplacer
$str = file_get_contents($fic); // Récupère le contenu intégral du fichier CSV,
$str.= "$nom;$score;$salle\n"; // Concatène le nouveau joueur et un saut de ligne

// si le fichier n'existe pas il est créé par fopen() fputcsv() fclose()
//$fp = fopen($fic, "a"); // ouvre le fichier CSV en mode Append (traduction: ajout de ligne à la fin)
//fputcsv($fp, $str); // Ces fonctions sont directement issues du langage C
//fclose($fp);

// le serveur envoie au client la liste des joueurs présents actuellement
echo $str;
?>