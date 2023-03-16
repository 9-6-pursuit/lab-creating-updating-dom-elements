// let dCE = document.createElement

//Featured - Should add the 'featured' class to the first `section` element on the page
let firstSection = document.querySelector("section")
firstSection.classList.add("featured")

//New post - Should add a new post with the specified content.
let postermaster = document.querySelector("section.posts")
postermaster.innerHTML += `<article>
<img
  src="./images/paul-gilmore-unsplash.jpg"
  alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
  You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all
  is so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
  <p>
    <span><strong>Read Time:</strong> 4 Minutes</span
    ><a href="#">Read more...</a>
  </p>
</aside>
</article>`

// Swap article positions - should swap the first and second article in `section.posts
let twoToOne = document.querySelectorAll("section.posts article")
twoToOne[1].after(twoToOne[0])





// //create new article
// let article = dCE("article")

// {/* <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." /> */}
// let image = dCE("img")
// image.src = "./images/paul-gilmore-unsplash.jpg"
// image.alt = "Image of a mountain in front of a lake."
// article.append(image)


// let postsSection = document.querySelector(".posts")
// postsSection.append(article)

// // <article>
// //     <img
// //       src="./images/paul-gilmore-unsplash.jpg"
// //       alt="Image of a mountain in front of a lake."
// //     />
// //     <h3>Stop Planning</h3>
// //     <p>
// //       You -- yes you! You're an over-planner, I can tell. It's time to stop
// //       planning so much and instead focusing on relaxing. Taking a break at all
// //       is so stressful these days; why add to the stress by overworking yourself?
// //     </p>
// //     <aside>
// //       <p>
// //         <span>
// //         <strong>Read Time:</strong> 4 Minutes
// //         </span> 
// //         <a href="#">Read more...</a>
// //       </p>
// //     </aside>
// //   </article>