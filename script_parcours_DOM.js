const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)

const hello = document.getElementById('coucou');
console.log(hello)

const thirdUrl = document.getElementsByTagName('a')[2];
console.log(thirdUrl)

const countMe = document.getElementsByClassName('compte-moi');
console.log(countMe)

const manyLi = document.querySelectorAll("li.compte-moi");
console.log(manyLi)

const manyOl = document.querySelectorAll("ol li.compte-moi");
console.log(manyOl)

const hiddenEl = document.querySelector("div ul:nth-child(2) li").textContent
console.log(hiddenEl)