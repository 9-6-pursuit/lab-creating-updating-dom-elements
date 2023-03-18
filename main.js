let slector = document.querySelector("section");
slector.classList.add("featured");


let image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";

let header = document.createElement("h3");
header.textContent = "Stop Planning";

let paragraph = document.createElement("p");
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

let strong = document.createElement("strong");
strong.textContent = "Read Time:";

let span = document.createElement("span");
span.append(strong, " 4 Minutes");

let aTag = document.createElement("a");
aTag.href = "#";
aTag.textContent = "Read more...";

let pTag = document.createElement("p");
pTag.append(span, aTag);

let aside = document.createElement("aside");
aside.append(pTag);

let article = document.createElement("article");
article.append(image, header, paragraph, aside);

let postSelector = document.querySelector(".posts");
postSelector.append(article);


let allPosts = postSelector.children;
allPosts[0].before(allPosts[1]);