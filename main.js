const removePost =document.querySelector('li')
removePost.remove()

const aside =document.querySelector('span');
aside.remove();

const lastPost =document.querySelectorAll('article');
lastPost[2].remove();

const titles =document.querySelectorAll('h3')

titles.forEach((title) => {
    title.remove()
})