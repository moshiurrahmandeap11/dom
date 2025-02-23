const moshiurList = document.getElementById("moshiur_list");

const newLi = document.createElement('li')
newLi.innerText = 'hello'
moshiurList.appendChild(newLi)


// where to add

const mainContainer = document.getElementById("main_container");

const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'my ciggrate brand'
section.appendChild(h1)

const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerText = 'star'
ul.appendChild(li)
const li1 = document.createElement('li')
li1.innerText = 'royal'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'lucky sada'
ul.appendChild(li2)

section.appendChild(ul)

mainContainer.appendChild(section)



const sectionDress = document.createElement('section')

sectionDress.innerHTML = `
<h1>My favourite Dress</h1>
<ul>
    <li>trouser</li>
    <li>t-shirt</li>
    <li>slipper</li>
</ul>
`


mainContainer.appendChild(sectionDress)