let firstSection = document.querySelector("section");
firstSection.classList.add("featured"); // 1st Test Pass!

let articleLast = document.createElement("article"); //creating the articleLast element

let img = document.createElement("img"); //creating the img element
img.setAttribute("src","./images/paul-gilmore-unsplash.jpg");//creating the src for the img element
img.setAttribute("alt","Image of a mountain in front of a lake.");//creating the alt for the img element
articleLast.prepend(img); //adding img to articleLast before any other elements

let hThree = document.createElement("h3"); //creating h3 element;
hThree.textContent = "Stop Planning"; //adding text to h3
articleLast.append(hThree); //adding the h3 element to articleLast

let p = document.createElement("p"); //creating the 1st paragraph element
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
articleLast.append(p); //adding the 1st paragraph element to articleLast

let aside = document.createElement("aside"); //creating the aside element

let p2 = document.createElement("p"); //creating the 2nd paragraph element

let span = document.createElement("span"); //creating the span element
let strong = document.createElement("strong"); //creating the strong element

strong.textContent = "Read Time:" //adding text to strong element
span.textContent = " 4 Minutes" //adding text to span element
span.prepend(strong); //adding strong element to span element


let a = document.createElement("a"); //creating a element
a.setAttribute("href", "#"); //creating the href attribute for a element
a.textContent = "Read more..."; //adding text to a element

p2.append(span) //adding span to 2nd paragraph
p2.append(a) //adding a to 2nd paragraph

aside.append(p2); //adding 2nd paragraph (and all its child elements) to aside element

articleLast.append(aside) //adding the aside element to articleLast

let dahMain = document.querySelector("main") //setting the main element within the HTML file as the variable dahMain

dahMain.append(articleLast) //adding the articleLast element with all it's nested elements inside the main element of the HTML file


let article1 = document.querySelector(".posts article")
let postsSection = document.querySelector(".posts")

console.log(article1);


postsSection.append(article1)
