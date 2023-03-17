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


// In JavaScript, the ability to interact with and manipulate the content of HTML elements is a crucial aspect of web development. Two of the most commonly used properties for accessing and modifying content in web pages are `innerText` and `innerHTML`. Although these properties have distinct differences, they share several similarities that make them both useful tools for developers.

// The `innerText` property is used to access or replace the text content of an HTML element, while the `innerHTML` property is used to access or replace the HTML content of an element, including any child elements and their HTML tags.

// While `innerText` and `innerHTML` have different functional purposes, they share several key similarities. Both properties allow developers to access and manipulate the content of HTML elements, and both can be used to retrieve the content of an element for use in other parts of a JavaScript program. Additionally, both `innerText` and `innerHTML` can be used to change the text or HTML content of an element, allowing developers to dynamically update the content of web pages in response to user actions or events.

// One important consideration when using `innerText` and `innerHTML` is that they can have different performance characteristics. Because `innerHTML` returns the entire HTML content of an element, including any child elements, it can be slower to execute than `innerText`, which returns only the text content of an element. However, in certain situations, the ability to access or replace the HTML content of an element may be necessary, making `innerHTML` the better choice.





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