// Get the first section element and add the "featured" class to it
let firstSection = document.querySelector('section');
    firstSection.classList.add('featured');

// Create the new article element
let newArticle = document.createElement('article');

// Create the image element and set its attributes
let image = document.createElement("img")
    image.src = "./images/paul-gilmore-unsplash.jpg"
    image.alt = "Image of a mountain in front of a lake."

// Create the heading element and set its text content
let heading = document.createElement('h3');
    heading.textContent = 'Stop Planning';

// Create the paragraph element and set its text content
let paragraph = document.createElement('p');
    paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

// Create the aside element and its child elements
let aside = document.createElement('aside');
let asideParagraph = document.createElement('p');
    aside.appendChild(asideParagraph);

let readTimeSpan = document.createElement('span');
    readTimeSpan.innerHTML = '<strong>Read Time:</strong> 4 Minutes';
    asideParagraph.appendChild(readTimeSpan);

let readMoreLink             = document.createElement('a');
    readMoreLink.href        = '#';
    readMoreLink.textContent = 'Read more...';
    asideParagraph.appendChild(readMoreLink);


// Append the child elements to the new article element
    newArticle.appendChild(image);
    newArticle.appendChild(heading);
    newArticle.appendChild(paragraph);
    newArticle.appendChild(aside);

// Append the new article element to the section.posts element
let sectionPosts = document.querySelector('section.posts');
    sectionPosts.appendChild(newArticle);



// Move the first article to become the second article
let firstArticle = sectionPosts.querySelector('article');
let secondArticle = firstArticle.nextElementSibling;
    sectionPosts.insertBefore(firstArticle, secondArticle);

// Move the second article to become the first article
    sectionPosts.insertBefore(secondArticle, firstArticle);








//     // Get the first section element and add the "featured" class to it
// const firstSection = document.querySelector('section');
// firstSection.classList.add('featured');

// // Create the new article element
// const newArticle = document.createElement('article');
// newArticle.innerHTML = `
//   <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
//   <h3>Stop Planning</h3>
//   <p>
//     You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?
//   </p>
//   <aside>
//     <p>
//       <span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a>
//     </p>
//   </aside>
// `;

// // Append the new article element to the section.posts element
// const sectionPosts = document.querySelector('section.posts');
// sectionPosts.appendChild(newArticle);

// // Move the first article to become the second article
// const firstArticle = sectionPosts.querySelector('article');
// const secondArticle = firstArticle.nextElementSibling;
// sectionPosts.insertBefore(firstArticle, secondArticle);

// // Move the second article to become the first article
// sectionPosts.insertBefore(secondArticle, firstArticle);
