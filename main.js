let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

let article = document.createElement("article")

let image = document.createElement("img")
image.setAttribute("src", "alt")
image.src = "./images/paul-gilmore-unsplash.jpg" 
image.alt = "Image of a mountain in front of a lake."

 let header = document.createElement("h3")
 header.textContent = "Stop Planning"

 let paragraph = document.createElement("p")
 paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
 planning so much and instead focusing on relaxing. Taking a break at all
 is so stressful these days; why add to the stress by overworking yourself?`

let side = document.createElement("aside")
let sideParagraph = document.createElement("p")

let span = document.createElement("span")
span.textContent = "4 Minutes"
let strong = document.createElement("strong")
strong.textContent = "Read Time:"
let aTag = document.createElement("a")
aTag.setAttribute("herf","#")
aTag.textContent = "Read more..."

side.appendChild(sideParagraph)
sideParagraph.appendChild(span)
//span.appendChild(strong)
span.insertAdjacentElement("beforebegin", strong)
sideParagraph.appendChild(aTag)

article.append(image)
article.append(header)
article.append(paragraph)
article.append(side)

let postSection = document.querySelector(".posts")
postSection.append(article)
//postSection.append(image)
// postSection.append(header)

let allPostSection = document.querySelectorAll(".posts article")
//console.log(allPostSection);
for (i=0;i<allPostSection.length;i++){
    allPostSection[0].remove()
    allPostSection[2].remove()
    postSection.append(allPostSection[0])
    postSection.append(allPostSection[2])
    //allPostSection[2].add()
}

