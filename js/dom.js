// console.log('hello from another universe');
// console.log(document.getElementsByTagName('h1'))
const licollection = document.getElementsByTagName('li')
// console.log(licollection)

for (let li of licollection){
    // console.log(li.innerHTML)
}

const allheadings = document.getElementsByTagName('h1')
for (let h1 of allheadings){
    // console.log(h1.innerText)
}


const firstID = document.getElementById("dom-title");
// console.log(firstID.innerText = 'moshiur list')

const firstClass = document.getElementsByClassName('first-class')
for (let first of firstClass){
    // console.log(first.innerText)
}


const queryID = document.querySelectorAll('.dom_class li')
// console.log(queryID)

for (const iD of queryID){
    // console.log(iD.innerText)
}

const queryClass = document.querySelector('.dom_class li');
// console.log(queryClass);


const styleID = document.getElementById('dom-title').style.textAlign='center'



const subtitle = document.getElementById("dom-title");
subtitle.setAttribute('title', 'tooltip set by moshiur')