
let firstSection = document.querySelector('section')
firstSection.classList.add("featured")

let article = document.createElement("article")

// Add all those other elemnts in to the article

let image = document.createElement("img")
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."

let header = document.createElement("h3")
header.textContent = "Stop Planning"

let paragraph = document.createElement("p")
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

let pTag = document.createElement("p")

let aTag = document.createElement("a")
aTag.href = "#"
aTag.textContent = " Read more..."

let span = document.createElement("span")
span.textContent = " 4 Minutes"

let strong = document.createElement("strong")
strong.textContent = "Read Time: "
strong.append(span)


let aside = document.createElement("aside")
aside.append(pTag, strong, span, aTag)

article.append(image, header, paragraph, aside)

let postsSection = document.querySelector(".posts")
postsSection.append(article)

console.log(firstSection)
