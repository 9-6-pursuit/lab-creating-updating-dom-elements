document.querySelector("section").classList.add("featured")

let article = document.createElement('article')
const img = document.createElement('img')
img.src = "./images/paul-gilmore-unsplash.jpg"
img.alt = "Image of a mountain in front of a lake."
article.append(img)
let header = document.createElement('h3')
header.textContent = 'Stop Planning'
article.append(header)
let paragraph = document.createElement('p')
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph)

let aside = document.createElement('aside')
let paragraph2 = document.createElement('p')
let span = document.createElement('span')
let strong = document.createElement('strong')
let a = document.createElement('a')
strong.textContent = 'Read Time:'
span.append(strong)
span.innerHTML +=  ' 4 Minutes'
paragraph2.append(span)
a.textContent = 'Read more...'
a.href = '#'
paragraph2.append(a)

aside.append(paragraph2)
article.append(aside)
let postsSection = document.querySelector('.posts')
postsSection.append(article)

console.log(document.querySelectorAll('.posts')[0].children[0])

let first = document.querySelectorAll('.posts')[0].children[0]
let second = document.querySelectorAll('.posts')[0].children[1]

first.before(second)