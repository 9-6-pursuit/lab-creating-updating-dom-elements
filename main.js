let firstSection = document.querySelector('section')
firstSection.classList.add('featured')

let article = document.createElement('article')

let image  = document.createElement('img')
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."

article.append(image)

let postsSection = document.querySelector('.posts')
postsSection.append(article)

// let secondArticle = document.createElement('article')
// let secondImage = document.createElement('img')

let header = document.createElement('h3')
header.textContent = 'Stop Planning'
article.append(header)


let paragraph = document.createElement('p')
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph)

let aside = document.createElement('aside')
article.append(aside)


secondParagraph = document.createElement('p')
article.append(secondParagraph)


let span = document.createElement('span')
article.append(span)

let strong = document.createElement('strong')
strong.textContent = 'Read Time: '
span.append(strong)
span.innerHTML += " 4 Minutes "


let link = document.createElement('a')
link.href="#"
link.textContent = 'Read more...'
// article.append(link)

aside.append(secondParagraph)
secondParagraph.append(span)
// span.append(strong)
secondParagraph.append(link)




let firstArticle = document.querySelector("section.posts article")
let seconedArticle = firstArticle.nextElementSibling;
postsSection.insertBefore(seconedArticle, firstArticle)




// document.querySelector('.posts').remove(article)
// document.querySelector('.posts').add(secondArticle)
// document.querySelector('.posts').add(article)