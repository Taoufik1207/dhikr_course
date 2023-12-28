// import data from './data.json' assert { type: 'json' };
import data from './data.js'
console.log(data)

let button1 = document.querySelector('#button1')
button1.addEventListener('click', function () {
    button2.classList.remove('selected')
    this.classList.add('selected')
})
let button2 = document.querySelector('#button2')
button2.addEventListener('click', function () {
    button1.classList.remove('selected')
    this.classList.add('selected')
})
let issac = document.querySelector('#issac')
issac.addEventListener('click', function (event) {
    event.stopPropagation()
    this.classList.add('border-blue')
})

let body = document.querySelector('body')
body.addEventListener('click', function () {
    issac.classList.remove('border-blue')
})

let contenu = document.querySelector("#contenu")

for (let i=0; i<data.length; i++) {
    let card = document.createElement("div")
    
    let paragrafe1 = document.createElement("p") 
    let paragrafe2 = document.createElement("p")
    let paragrafe3 = document.createElement("p")
    
    card.appendChild(paragrafe1)
    card.appendChild(paragrafe2)
    card.appendChild(paragrafe3)

    paragrafe1.innerText = data[i] ["repeat"]
    paragrafe2.innerText = data[i] ["text"]
    paragrafe3.innerText = data[i] ["source"]

    contenu.appendChild(card)
    card.classList.add("text")
}

let image = document.querySelector('img')
image.addEventListener('click', function() {
    var audio = new Audio('son.mp3');
    audio.play();
})