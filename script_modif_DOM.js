function changeTitles() {
    document.querySelector('.jumbotron-heading').innerHTML = "Ce que j'ai appris à THP";
    document.querySelector('.lead.text-muted').innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

changeTitles();

function changeCallToActions() {
    document.querySelector('.btn-primary').innerHTML = "OK je veux tester !";
    document.querySelector('.btn-primary').href = 'http://www.thehackingproject.org';
    document.querySelector('.btn-secondary').innerHTML = "Non, merci ça ira";
    document.querySelector('.btn-secondary').href = 'http://www.pole-emploi.fr/accueil';
}

changeCallToActions();

function changeLogoName() {
    const logoTitle = document.querySelector('.navbar-brand');
    logoTitle.textContent = "The THP Experience";

    logoTitle.style.fontSize = "2em";
}

changeLogoName();

function populateImages() {
    const cardImages = document.querySelectorAll('.card img');

    const imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://rubyonrails.org/assets/images/opengraph.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

    cardImages.forEach(function (image, index) {
        image.src = imagesArray[index];
    });
}

populateImages();

function deleteLastCards() {

    const cards = document.querySelectorAll('.card');

    for (let i = 1; i <= 3 && cards.length >= 3; i++) {
        let lastCard = cards[cards.length - i];
        lastCard.parentNode.removeChild(lastCard);
    }
}

deleteLastCards();

function changeCardsText() {
    const newCardTexts = [
        "L'HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
        "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
        "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    ];

    const cards = document.querySelectorAll('.card');

    if (cards.length >= 3) {
        for (let i = 0; i < 3; i++) {
            cards[i].querySelector('.card-text').innerHTML = newCardTexts[i];
        }
    }
}

changeCardsText();

function changeViewButtons() {
    let viewButtons = document.querySelectorAll('.btn-group > .btn-outline-secondary:nth-child(1)');

    viewButtons.forEach(function(button) {
        button.classList.add('btn-success');
        
        button.classList.remove('btn-outline-secondary');
    });
}

changeViewButtons();

////////BONUS

function updateBelowCardsText() {

    const belowCardTexts = [
        "Ruby est un langage de programmation interprété, orienté objet et généraliste. Il est souvent utilisé pour le développement web et est apprécié pour sa syntaxe élégante et sa simplicité.",
        "Bootstrap est un framework CSS développé par Twitter. Il facilite la création de pages web responsives et attrayantes avec des composants préconçus et des styles prêts à l'emploi.",
        "Le chat est un animal domestique populaire, souvent apprécié pour sa compagnie et ses comportements indépendants. Les chats sont également connus pour leur agilité et leur grâce."
    ];

    const belowCards = document.querySelectorAll('.card');

    if (belowCards.length >= 3) {
        for (let i = 3; i < 6; i++) {
            belowCards[i].querySelector('.card-text').innerHTML = belowCardTexts[i - 3];
        }
    }
}

updateBelowCardsText();