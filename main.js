let firstSection = document.querySelector("section")
firstSection.setAttribute("class", "featured")


let sectionPost = document.querySelector("section.posts")
let newPostHtml =
    '<img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />' +
    '<h3>Stop Planning</h3>' +
    ' <p>' +
    "You -- yes you! You're an over-planner, I can tell. It's time to stop" +
    ' planning so much and instead focusing on relaxing. Taking a break at all' +
    ' is so stressful these days; why add to the stress by overworking yourself?' +
    ' </p>' +
    ' <aside>' +
    '<p>' +
    ' <span><strong>Read Time:</strong> 4 Minutes</span' +
    '  ><a href="#">Read more...</a>' +
    ' </p>' +
    ' </aside>';
let newPost = document.createElement("article")
newPost.innerHTML = newPostHtml
sectionPost.appendChild(newPost)


let sectionPostArticle1 = sectionPost.children[0];
let sectionPostArticle2 = sectionPost.children[1];
sectionPost.insertBefore(sectionPostArticle2,sectionPostArticle1);