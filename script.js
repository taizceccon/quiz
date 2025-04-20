// Récupérer le formulaire et le bloc de résultats
const form = document.getElementById('quiz-form');
const resultat = document.getElementById('resultat');

// calculer les résultats
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Annule l'envoi du formulaire (pas de rechargement de la page)

    // v pour les bonnes réponses
    const bonnesReponses = {
        q1: 'pi',
        q2: 'controlerpoids',
        q3: '30',
        q4: 'jamais'
    };

    // Récupérer les réponses de l'utilisateur
    const reponsesUtilisateur = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value
    };

    // Vérifier les réponses
    let score = 0;
    for (const question in bonnesReponses) {
        if (reponsesUtilisateur[question] === bonnesReponses[question]) {
            score++;
        }
    }

    // Afficher le score
    resultat.textContent = `Votre score : ${score} sur 4`;

    // Ajouter des messages et couleurs en fonction du score
    if (score === 4) {
        resultat.style.backgroundColor = 'green';
        resultat.textContent += " Bravo! 😀 vous avez tout bon! ";
    } else if (score === 3) {
        resultat.style.backgroundColor = 'yellow';
        resultat.textContent += " 😮 Bien joué, mais il y a encore des erreurs. ";
    } else if (score === 2) {
        resultat.style.backgroundColor = 'yellow';
        resultat.textContent += " 😏 Bien joué, mais il y a encore une erreur. ";
    } else if (score === 1) {
        resultat.style.backgroundColor = 'yellow';
        resultat.textContent += " 😏 Bien joué, mais il y a encore une erreur. ";
    } 
    else {
        resultat.style.backgroundColor = 'red';
        resultat.textContent += " - Quel Dommage! 😓 Essayez à nouveau! ";
    }

    // Afficher un bouton pour réessayer
    const ressayeButton = document.createElement('button');
    ressayeButton.textContent = "Réessayer";
    ressayeButton.addEventListener('click', () => {
        form.reset();
        resultat.textContent = '';
        resultat.style.backgroundColor = '';
    });
    resultat.appendChild(ressayeButton);
});