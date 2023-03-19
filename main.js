let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

// let article = document.createElement("article")
// let postSection = document.querySelector("section.posts")
// postSection.append(article)

console.log(firstSection)

const article = document.createElement('article');
const img = document.createElement('img');
img.src = './images/paul-gilmore-unsplash.jpg';
img.alt = 'Image of a mountain in front of a lake.';
article.appendChild(img);

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
article.appendChild(h3);

const p = document.createElement('p');
p.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.appendChild(p);

const aside = document.createElement('aside');
const asideP = document.createElement('p');
const span = document.createElement('span');
span.innerHTML = '<strong>Read Time:</strong> 4 Minutes';
const link = document.createElement('a');
link.href = '#';
link.textContent = 'Read more...';
asideP.appendChild(span);
asideP.appendChild(link);
aside.appendChild(asideP);
article.appendChild(aside);

const postsSection = document.querySelector('.posts');
postsSection.appendChild(article);


const firstArticle = document.querySelector('.posts article:first-of-type');
const secondArticle = document.querySelector('.posts article:nth-of-type(2)');

postsSection.insertBefore(secondArticle, firstArticle);
