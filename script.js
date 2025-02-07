// document.addEventListener("DOMContentLoaded", function() {
//     const avisContainer = document.querySelector(".Caroussel-Avis");
//     const leftButton = document.querySelector("#Bouton-Gauche-Avis");
//     const rightButton = document.querySelector("#Bouton-Droite-Avis");
//     const avisElements = document.querySelectorAll(".Caroussel-Avis"); // Sélection des avis
//     let currentIndex = 1; // L'avis 2 sera affiché par défaut
//     const totalAvis = avisElements.length;
//     let autoPlayInterval = setInterval(nextAvis, 3000); // Changement automatique toutes les 3s
//     const indicateurs = document.querySelectorAll(".indicateurs");

//     // Fonction pour afficher l'avis avec animation
//     function showAvis(index) {
//         avisElements.forEach((avis, i) => {
//             avis.style.transform = `translateX(${(i - index) * 100}%)`;
//         });
//         updateIndicateurs();
//     }

//     // Fonction pour l'avis suivant (vers la droite)
//     function nextAvis() {
//         currentIndex = (currentIndex + 1) % totalAvis;
//         showAvis(currentIndex);
//     }

//     // Fonction pour l'avis précédent (vers la gauche)
//     function prevAvis() {
//         currentIndex = (currentIndex - 1 + totalAvis) % totalAvis;
//         showAvis(currentIndex);
//     }

//     // Écouteurs d'événements pour les boutons de navigation
//     rightButton.addEventListener("click", function() {
//         clearInterval(autoPlayInterval); // Arrêt du changement automatique lors d'un clic
//         nextAvis();
//         autoPlayInterval = setInterval(nextAvis, 3000); // Reprendre après un clic
//     });


//        // Mettre à jour les indicateurs
//        function updateIndicateurs() {
//         indicateurs.forEach((indicateur, i) => {
//             indicateur.classList.toggle('active', i === currentIndex);
//         });
//     }

//     leftButton.addEventListener("click", function() {
//         clearInterval(autoPlayInterval); // Arrêt du changement automatique lors d'un clic
//         prevAvis();
//         autoPlayInterval = setInterval(nextAvis, 3000); // Reprendre après un clic
//     });

//     // Initialisation de l'affichage
//     showAvis(currentIndex);
// });


document.addEventListener('DOMContentLoaded', function () {
    const notes = document.querySelectorAll('.Note');
    const messages = document.querySelectorAll('.Message-avis');
    const noms = document.querySelectorAll('.Nom-avis');
    const indicateurs = document.querySelectorAll('.indicateur');
    const boutonGauche = document.querySelector('.Bouton-Gauche-Avis');
    const boutonDroite = document.querySelector('.Bouton-Droite-Avis');
    
    let currentIndex = 0;
    const totalAvis = notes.length;  // suppose que le nombre de notes, messages et noms est identique

    // Fonction pour mettre à jour l'affichage des avis
    function afficherAvis(index) {
        notes.forEach((note, i) => {
            note.classList.toggle('active', i === index);
        });
        messages.forEach((message, i) => {
            message.classList.toggle('active', i === index);
        });
        noms.forEach((nom, i) => {
            nom.classList.toggle('active', i === index);
        });
        indicateurs.forEach((indic, i) => {
            indic.classList.toggle('active', i === index);
        });
    }

    // Initialiser l'affichage
    afficherAvis(currentIndex);

    // Gestion des boutons de navigation
    boutonDroite.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalAvis;
        afficherAvis(currentIndex);
    });

    boutonGauche.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalAvis) % totalAvis;
        afficherAvis(currentIndex);
    });

    // Gestion des clics sur les indicateurs
    indicateurs.forEach((indic, i) => {
        indic.addEventListener('click', function () {
            currentIndex = i;
            afficherAvis(currentIndex);
        });
    });
});
