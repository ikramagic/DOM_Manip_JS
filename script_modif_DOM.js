function changeTitles() {
    document.querySelector('.jumbotron-heading').innerHTML = "Ce que j'ai appris à THP";
    document.querySelector('.lead.text-muted').innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

changeTitles();

function changeLogoName() {
    document.querySelector('.btn-primary').innerHTML = "OK je veux tester !";
    document.querySelector('.btn-primary').href = 'http://www.thehackingproject.org';
}

changeLogoName();