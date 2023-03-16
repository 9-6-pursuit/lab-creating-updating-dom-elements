let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

let article = document.createElement("article")

let postsSection = document.querySelector("section.posts")
postsSection.append(article)

let image = document.createElement("img")
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."

article.append(image)

let h3 = document.createElement("h3")
h3.innerText = "Stop Planning"
article.append(h3)

let p = document.createElement("p")
p.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

article.append(p)

let aside = document.createElement("aside")
aside.innerHTML =  
`<p>
<span><strong>Read Time:</strong> 4 Minutes</span
><a href="#">Read more...</a>
</p>
</aside>`

article.append(aside)

let before = document.querySelector("section.posts")
before.append(article)

let after = document.querySelectorAll("section.posts article")[1]
before.prepend(after)