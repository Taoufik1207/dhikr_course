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