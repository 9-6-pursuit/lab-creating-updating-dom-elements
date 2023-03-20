let firstSection = document.querySelector("section");

firstSection.classList.add('featured');

let postSection =  document.querySelector(".posts")

let article = document.createElement("article");

postSection.append(article)

let image = document.createElement('img');
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";

article.prepend(image);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

image.after(h3);

let newParagraph = document.createElement('p');

newParagraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

h3.after(newParagraph);

let aside = document.createElement('aside');

newParagraph.after(aside);

let newParagraph2 = document.createElement("p");

aside.prepend(newParagraph2)

let span = document.createElement('span');

span.innerHTML = "<strong>Read Time:</strong> 4 Minutes"

newParagraph2.prepend(span);

let link = document.createElement('a')
link.href ="#"
link.textContent = "Read more...";

newParagraph2.append(link);

let allArticles = document.querySelectorAll("article");

console.log(allArticles[2]);

allArticles[1].before(allArticles[2]);

