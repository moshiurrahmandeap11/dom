const sections = document.querySelectorAll('section')

for (const section of sections){
    section.style.border = '2px solid gold'
    section.style.marginBottom = '5px'
    section.style.borderRadius = '10px'
    section.style.paddingLeft = '10px'
    section.style.backgroundColor = 'black'
}

const sir = document.getElementsByClassName("sir_moshiur");
for (const moshiur of sir){
    // moshiur.style.backgroundColor = 'yellow'
    moshiur.style.fontSize = '50px'
    moshiur.style.border = '2px solid green'
    moshiur.style.borderRadius = '20px'
    moshiur.style.margin = '25px'
}