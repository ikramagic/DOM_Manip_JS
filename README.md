## Reponses aux questions 

### Question 1

Combien y a-t-il d'éléments `<p>` présents dans la page HTML ?

#### Reponse

<details>
Nombre d'élements : 21
<br>
Comment l'obtenir : <br>
- `document.getElementsByTagName("p")`
</details>

### Question 2

Quel est le contenu texte de l'élément portant l'id coucou ?

#### Reponse

<details>
Element trouvé : 2. Historique et contexte (h2)
<br>
Comment l'obtenir : <br>
- `document.getElementById('coucou')`
</details>

### Question 3

Quelle est l'URL vers laquelle pointe le 3ème élément `<a>` de la page HTML ?

#### Reponse

<details>
URL trouvée : https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501871-decouvrez-le-dom
<br>
Comment l'obtenir : <br>
- `document.getElementsByTagName('a')[2]`
</details>

### Question 4

Combien d'éléments portent la classe compte-moi ? 

#### Reponse

<details>
Nombre d'éléments : 10
<br>
Comment l'obtenir : <br>
- `document.getElementsByClassName('compte-moi')`
</details>

### Question 5

Combien d'éléments `<li>` portent la classe compte-moi ?

#### Reponse

<details>
Nombre d'éléments : 6
<br>
Comment l'obtenir : <br>
- `document.querySelectorAll("li.compte-moi")`
</details>

### Question 6

Combien d'éléments `<li>` et situés dans une liste ordonnée portent la classe compte-moi ?

#### Reponse

<details>
Nombre d'éléments : 1

Comment l'obtenir : <br>
- `document.querySelectorAll("ol li.compte-moi")`
</details>

### Question 7

La page contient un seul élément `<div>`. Celui-ci contient 2 éléments "unordered list" ou `<ul>`. Dans le second `<ul>`, le premier élément de la liste (tag `<li>`) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. 

#### Reponse

<details>
Comment l'obtenir : <br>
- `document.querySelector("div ul:nth-child(2) li").textContent`
</details>

<hr>
Dans notre script, on peut aussi ajouter un .length pour obtenir le nombre d'élément dans la console, et .href pour obtenir un affichage direct du lien dans la console.

<br>
J'ai préféré ne pas l'ajouter pour une meilleure vue d'ensemble.


## Aperçu de l'exo 2 (1-5)

<div align="center">
<img src="WEBsite_domerde.png"alt="website-preview">
</div>

<hr>
<div align="center">
  <h1>Enjoy!</h1>
  <img src="https://iili.io/JnnsA8b.png" alt="dog-wink">
</div>