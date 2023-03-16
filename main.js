const section = document.querySelector("section")
section.classList.add("featured")

const article = document.createElement("article")

const image = document.createElement("img")
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."
article.append(image)

const header = document.createElement("h3")
header.textContent = "Stop Planning"
article.append(header)

const p = document.createElement("p")
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(p)

const aside = document.createElement("aside")
article.append(aside)

const p2 = document.createElement("p")
aside.append(p2)

const span = document.createElement("span")
span.textContent = " 4 Minutes "
p2.append(span)

const strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.prepend(strong)



const a = document.createElement("a")
a.href = "#"
a.textContent = "Read more..."
p2.append(a)


const postsSection = document.querySelector("section.posts")
postsSection.append(article)
console.log(postsSection)

const articles = document.getElementsByTagName("article")
articles[2].parentNode.insertBefore(articles[1],articles[3])
// console.log(articles)
