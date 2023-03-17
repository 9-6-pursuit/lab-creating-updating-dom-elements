document.querySelector("section").classList.add("featured");

let article = document.createElement('article');

function createImage(source, alternate){
    const img = document.createElement('img');

    img.src = source;
    
    img.alt = alternate;
    
    article.append(img);
}

createImage("./images/paul-gilmore-unsplash.jpg",
"Image of a mountain in front of a lake.");

function createHeader(textContent){
    let header = document.createElement('h3');

    header.textContent = textContent;
    
    article.append(header);
}

createHeader('Stop Planning');

function createParagraph(textContent){
    let paragraph = document.createElement('p')

    paragraph.textContent = textContent;
    
    article.append(paragraph);
}

createParagraph(`You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. 
Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`)

function createBulk(strongText, innerSpan, aText, aHref){
    let aside = document.createElement('aside');
    let paragraph2 = document.createElement('p');
    let span = document.createElement('span');
    let strong = document.createElement('strong');
    let a = document.createElement('a');
    
    strong.textContent = strongText;
    span.innerHTML += innerSpan;
    a.textContent = aText;
    a.href = aHref;

    article.append(aside);
    aside.append(paragraph2);
    paragraph2.append(strong);
    paragraph2.append(span);
    paragraph2.append(a);
}

createBulk('Read Time: ', '4 Minutes', 'Read more...', '#');

let postsSection = document.querySelector('.posts')

postsSection.append(article)

let first = document.querySelectorAll('.posts')[0].children[0]

let second = document.querySelectorAll('.posts')[0].children[1]

first.before(second)