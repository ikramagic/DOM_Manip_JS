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
    // Sélectionne toutes les balises img à l'intérieur des cards
    const cardImages = document.querySelectorAll('.card img');

    const imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://rubyonrails.org/assets/images/opengraph.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

    cardImages.forEach(function (image, index) {
        image.src = imagesArray[index];
    });
}

populateImages();