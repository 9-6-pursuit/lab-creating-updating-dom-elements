let sec = document.querySelector("section")
sec.classList.add("featured")

let article = document.createElement("article")
let image = document.createElement("img")
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."
article.append(image)

let  title = document.createElement("h3")
title.textContent = "Stop Planning"

let paragraph1 = document.createElement("p")
paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

let aside = document.createElement("aside")
let asidePara = document.createElement("p")
let span = document.createElement("span")
let strong = document.createElement("strong")
strong.textContent = "Read Time:"
asidePara.textContent = "4 Minutes"
let hyperLink = document.createElement("a")
hyperLink.href = "#"
hyperLink.textContent = "Read more..."

span.append(strong)
asidePara.append(span, hyperLink )
aside.append(asidePara)
article.append(title, paragraph1, aside)


let postsSection  = document.querySelector(".posts")
postsSection.append(article)

let firstPost = document.querySelector(".posts article")
article.before(firstPost)
