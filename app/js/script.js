const btnHambugger = document.querySelector('#btnHambugger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')



btnHambugger.addEventListener(
'click', () => {
    if(header.classList.contains('open')){

        body.classList.remove('noscroll');
        header.classList.remove('open')
        fadeElems.forEach(element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }

    else{
        body.classList.add('noscroll');
        header.classList.add('open')
        fadeElems.forEach(element => {
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        }  )

    }
}

)