window.onload = () => {
  let firstSection = document.querySelector('section');
  firstSection.setAttribute('class', 'featured');
  let article = document.createElement('article');
  
  let postSection = document.querySelector('main > .posts');
  
  let newImage = document.createElement('img')
  newImage.src = "./images/paul-gilmore-unsplash.jpg";
  newImage.alg = "Image of a mountain in front of a lake.";
  
  let articleHeader = document.createElement('h3');
  articleHeader.innerText = "Stop Planning";
  
  let paragraph = document.createElement('p');
  paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
  
  let aside = document.createElement('aside');
  let asideParagraph = document.createElement('p');
  
  let span = document.createElement('span');

  let bold = document.createElement('strong');
  
  bold.innerText = 'Read Time:'
  span.append(bold)
  span.innerHTML += ' 4 Minutes'
  
  let link = document.createElement('a');
  link.setAttribute('href',"#")
  link.innerText ="Read more..."
  asideParagraph.append(span)
  asideParagraph.append(link)

  console.log(asideParagraph)
  aside.append(asideParagraph)
  article.append(newImage, articleHeader, paragraph, aside)
  postSection.append(article)
  
  let firstPostArticle = document.querySelector('.posts > article');
  firstPostArticle.remove;
  postSection.append(firstPostArticle)
}


/*
let planetCard = document.createElement('li');
//planetCard.classList.add("planet-card")
//planetCard.className = 'planet-card'
planetCard.setAttribute('class',"planet-card");
let image = document.createElement('img');
*/