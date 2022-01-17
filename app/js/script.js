// const btnHambugger = document.querySelector('#btnHambugger')
// const header = document.querySelector('.header')
// const overlay = document.querySelector('.overlay')
// const fadeElems = document.querySelectorAll('.has-fade')
// const body = document.querySelector('body')



// btnHambugger.addEventListener(
// 'click', () => {
//     if(header.classList.contains('open')){

//         body.classList.remove('noscroll');
//         header.classList.remove('open')
//         fadeElems.forEach(element => {
//             element.classList.remove('fade-in')
//             element.classList.add('fade-out')
//         })
//     }

//     else{
//         body.classList.add('noscroll');
//         header.classList.add('open')
//         fadeElems.forEach(element => {
//             element.classList.add('fade-in')
//             element.classList.remove('fade-out')
//         }  )

//     }
// }

// )



const hambugger = document.querySelector('.hambugger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const fadeElems = document.querySelectorAll('.has-fade')
const mobilemenu = document.querySelector('.mobilemenu')




hambugger.addEventListener('click', () => {

    if(header.classList.contains('open')){
        header.classList.remove('open')
        body.classList.remove('noscroll')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
        mobilemenu.classList.remove('mobile-fadeIn')
        mobilemenu.classList.add('mobile-fadeOut')


        // fadeElems.forEach(element => {
        //     element.classList.remove('fade-in')
        //     element.classList.add('fade-out')
        // })

    }
    else{
        body.classList.add('noscroll')
        header.classList.add('open')  
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        mobilemenu.classList.add('mobile-fadeIn')
        mobilemenu.classList.remove('mobile-fadeOut')
        

        // fadeElems.forEach(element => {
        //     element.classList.add('fade-in')
        //     element.classList.remove('fade-out') 
        // })
    }
})