let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

let article = document.createElement("article")

let postSection = document.querySelector(".posts")
postSection.append(article)

let image = document.createElement("img")
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."

article.append(image)

let header = document.createElement("h3")
header.textContent = "Stop Planning"
article.append(header)

let paragraph = document.createElement("p")
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days  why add to the stress by overworking yourself ? "
article.append(paragraph)

let aside = document.createElement("aside")
article.append(aside)

let strongParagraph = document.createElement("p")
aside.append(strongParagraph)



let strong = document.createElement("strong")
strong.textContent = "Read Time: "
strongParagraph.append(strong)


let span = document.createElement("span")
strongParagraph.append(span)
span.textContent += "4 Minutes"

let link = document.createElement("a")
link.href = "#"
link.textContent = " Read more..."
strongParagraph.append(link)


let firstPost = document.querySelector(".posts article")
article.before(firstPost)





