//1. Add featured class
let firstS = document.querySelector("section")
firstS.classList.add("featured")
// 2. Add another article post to the section

// Creating The  Elements & Inner Text Content
    let article = document.createElement("article")

    let image = document.createElement("img")
        image.setAttribute("src","./images/paul-gilmore-unsplash.jpg")
        image.alt="Image of a mountain in front of a lake."   
    
    let header = document.createElement("h3")
        header.textContent = "Stop Planning"
    
    let paragraph = document.createElement("p")
        paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
    
    let aside = document.createElement("aside")
    
    let p = document.createElement("p") // second paragraph tag

    let span = document.createElement("span")
        span.textContent = " 4 Minutes" //spaces matter

    let strong = document.createElement("strong")
        strong.textContent = "Read Time:"

    let a = document.createElement("a")
        a.setAttribute("href", "#")
        a.textContent = "Read more..."
    
    // Appending To The HTML
    aside.append(p) //

    p.append(strong, span, a)
    
    // strong.append(span)
    span.prepend(strong)

    article.append(image, header, paragraph, aside)
    
    // 3. Switch first and second posts
    let postsSection = document.querySelector(".posts")
    postsSection.append(article)
    let firstArticle = postsSection.querySelector("article")
    let secondArticle = firstArticle.nextElementSibling
    // secondArticle.prepend(firstArticle)
    firstArticle.before(secondArticle)

    
