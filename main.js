let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

console.log(firstSection)

let seconedSection = document.querySelector("section.posts")


console.log(seconedSection)

let article = document.createElement("article")

let image = document.createElement("img")
image.src="./images/paul-gilmore-unsplash.jpg"
image.alt="Image of a mountain in front of a lake."

let title = document.createElement("h3")
title.innerText = "Stop Planning"

let mainParagraph = document.createElement("p")
mainParagraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
                            planning so much and instead focusing on relaxing. Taking a break at all
                            is so stressful these days; why add to the stress by overworking yourself?`


let aside = document.createElement("aside")

let asideParagraph = document.createElement("p")

let strong = document.createElement("strong")
strong.innerText = "Read Time: "

let span = document.createElement("span")
span.innerText = "4 Minutes";

let a = document.createElement("a")
a.href = "#"
a.innerText = "Read more..."

span.prepend(strong)

asideParagraph.append(span, a)

aside.append(asideParagraph)


article.append(image, title, mainParagraph, aside)

seconedSection.append(article)
console.log(article.innerHTML)


let firstArticle = document.querySelector("section.posts article")
let seconedArticle = firstArticle.nextElementSibling;
seconedSection.insertBefore(seconedArticle, firstArticle)


