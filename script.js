var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // Déclaration des variables :
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle :
    today = new Date();

    // Récupérer l'année :
    annee = today.getFullYear();

    // Récupérer le mois :
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()];

    // Récupérer le numéro du jour du mois :
    jourNumero = today.getDate();

    // Récupérer le jour. Attention la semaine commence un dimanche en Javascript :
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; // getDay donne l'index du jour

    // Afficher les heures, minutes, secondes toujours avec deux chiffres
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures :
    heures = deuxChiffres(today.getHours());

    // Récupérer les minutes :
    minutes = deuxChiffres(today.getMinutes());

    // Récupérer les secondes :
    secondes = deuxChiffres(today.getSeconds());

    //Affichage dans nos DIV du HTML :
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + "," + jourNumero + " " + mois + " " + annee;

    // Lancer la fonction affichage heure toutes les 1000ms, soit toute les secondes :
    setTimeout(affichageHeure, 1000);
}

// Lancer la fonction une fois au début :
affichageHeure();