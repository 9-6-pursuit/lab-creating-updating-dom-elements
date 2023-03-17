//Add a class of "featured" to the first "section" element on the page.
let section = document.querySelector("section");
section.className = "featured"

//Create an "article" element then add at the end of the "section.posts" element.
let article = document.createElement("article");
document.querySelector('section.posts').append(article);

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning"

let paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

let aside = document.createElement("aside");
//ADDS THESE TAGS INSIDE THE ARTICLE TAG
article.append(img, h3, paragraph, aside);
let paragraph2 = document.createElement("p");
//ADDS PARAGRAPH2 INSIDE ASIDE TAG
aside.append(paragraph2); 

let span = document.createElement("span");
span.textContent = "4 Minutes"
//ADDS SPAN INSIDE PARAGRAPH2
paragraph2.append(span);

let strong = document.createElement("strong");
strong.textContent = "Read Time:"
span.before(strong);

let link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Read more..."
//ADDS A LINK INSIDE PARAGRAPH2
paragraph2.append(link);

/*Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article*/
const articleSwap = document.querySelector('section.posts article');
article.before(articleSwap);
