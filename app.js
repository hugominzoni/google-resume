
const lupa = document.querySelector('.fa-magnifying-glass').addEventListener('click', search)


// let busca = document.querySelector('#search').value

// document.querySelector('#search').addEventListener('keydown', search)

// function search (busca){
//     if(busca.key === 'Enter'){
//         console.log('Hey')}}

// document.addEventListener('keydown', function(ev) {
//     console.log(ev.key)
//     if(ev.key === 'Enter'){
//         console.log
//         search()
//     }})

function search(){
    let paragraph = document.querySelectorAll('.ppp')
    
    let textToSearch = document.querySelector('#search').value
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
    let pattern = new RegExp(`${textToSearch}`,"gi")
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    console.log(paragraph)
}


// PORTFOLIO 

const imageThumb = document.querySelectorAll('.open-port')
const imageBox = document.querySelector('.port-box')
const closeBox = document.querySelector('.close-port')
const overlay = document.querySelector('.over')
const imgBig = document.querySelectorAll('.imgBig')

for(let i = 0; i < imgBig.length; i++){
    imgBig[i].addEventListener('click', function(){})
}






for(let i = 0; i < imageThumb.length;i++){
    imageThumb[i].addEventListener('click', function(){
        imgBig[i].classList.remove('hidden')
        imageBox.classList.remove('hidden')
        closeBox.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })


    closeBox.addEventListener('click', function(){
        imgBig[i].classList.add('hidden')
        imageBox.classList.add('hidden')
        overlay.classList.add('hidden')
        closeBox.classList.add('hidden')
    })

}