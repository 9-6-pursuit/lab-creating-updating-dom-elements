let sectionOne = document.querySelector("section")

sectionOne.classList.add("featured")


// let newPosts = () => {}
    let article = document.createElement("article")
    
    
    let image = document.createElement("img")
        image.src="./images/paul-gilmore-unsplash.jpg"
        image.alt="Image of a mountain in front of a lake."   
    
    
    let header = document.createElement("h3")
        header.textContent = "Stop Planning"
    
    let paragraph = document.createElement("p")
        paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
    
    
    let aside = document.createElement("aside")
    
    let p = document.createElement("p")
    let span = document.createElement("span")
    span.textContent = "4 Minutes"
    let strong = document.createElement("strong")
    strong.textContent = "Read Time:"
    let a = document.createElement("a")
    a.setAttribute("href", "#")
    a.textContent = "Read more..."
    
    aside.append(p)
    
    p.append(span, a)
    
    span.append(strong)
    
    
    article.append(image, header, paragraph, aside)
    
    
    let postsSection = document.querySelector(".posts")
    postsSection.append(article)
    let firstArticle = postsSection.querySelector("article")
    let secondArticle = firstArticle.nextElementSibling
    //console.log(articles)
    secondArticle.prepend(firstArticle)
    //let secondArticle = firstArticle.nextElementSibling
    console.log(secondArticle)
   // console.log(secondArticle)
    //postsSection.insertbefore(secondArticle, firstArticle)
