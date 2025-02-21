console.log('hello from another universe');
console.log(document.getElementsByTagName('h1'))
const licollection = document.getElementsByTagName('li')
// console.log(licollection)

for (let li of licollection){
    console.log(li.innerHTML)
}

const allheadings = document.getElementsByTagName('h1')
for (let h1 of allheadings){
    console.log(h1.innerText)
}


const firstID = document.getElementById("dom-title");
console.log(firstID.innerText = 'moshiur list')

const firstClass = document.getElementsByClassName('first-class')
for (let first of firstClass){
    console.log(first.innerText)
}