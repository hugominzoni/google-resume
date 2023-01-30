
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