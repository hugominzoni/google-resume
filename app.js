
const lupa = document.querySelector('.fa-magnifying-glass').addEventListener('click', search)
// const exp = document.querySelectorAll('.exp')
const searchBar = document.getElementById('search')


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

// function search(){
//     let paragraph = document.querySelectorAll('.exp-desc')
    
//     let textToSearch = document.querySelector('#search').value
//     textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
//     let pattern = new RegExp(`${textToSearch}`,"gi")
//     paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
//     console.log(paragraph)
// }


// function search(e) {
//     const text = e.target.value.toLowerCase();
//     const expDesc = document.querySelectorAll('.exp-desc')
    
//     expDesc.forEach(item => {
//         const descName = item.firstChild.textContent.toLowerCase();
        
//         if(descName.indexOf(text) !== -1){
//             item.classList.add('higlight')
//         }else {
            
//         }
//     })
// }

// searchBar.addEventListener('input', search)




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


//Object + Experience Function

const exp = [
    {
        link: 'http://www.globalfurnituregroup.com',
        company: 'Global Furniture Group',
        location: 'Toronto/ON',
        title: 'Digital Marketing Specialist',
        year: '2021 - current',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius libero ac consequat convallis. Phasellus aliquam ipsum nec dui mollis, sed euismod urna aliquam. Nulla rhoncus laoreet massa non vulputate. Donec aliquam sapien a lorem euismod tempor. Duis lacus massa, posuere vel interdum nec, tincidunt ut purus. Suspendisse faucibus at sem in elementum. Quisque feugiat ligula et purus interdum tempus. Vestibulum luctus sollicitudin risus at malesuada. Etiam vehicula quis felis in aliquam. Nam consequat urna in lorem varius, ac consectetur tellus fringilla. Nunc dignissim quis felis id ultricies. Aliquam erat volutpat.',
        desc2: 'Nam non tortor diam. Donec dictum, nunc et ultricies volutpat, lacus lectus iaculis augue, in suscipit sem ipsum vel dolor. Suspendisse accumsan lectus nec felis dignissim placerat. Sed sed auctor mauris, at iaculis nibh. Nunc elementum fringilla dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eu interdum arcu, sit amet cursus neque. Ut porttitor varius magna, quis maximus dui blandit non. Phasellus non efficitur diam, nec placerat massa. Suspendisse ex elit, tempor at sagittis a, vestibulum at leo. Donec laoreet erat vitae condimentum egestas. Duis condimentum varius est, id finibus sapien scelerisque dictum. Donec sagittis non erat nec interdum. Quisque porta nunc ac nunc luctus, a hendrerit massa accumsan. Aliquam scelerisque odio quis lorem tincidunt, sit amet gravida nunc posuere.'

    },
    {
        link: 'http://www.ingenico.com.br',
        company: 'Ingenico Brasil',
        location: 'Sao Paulo/Brazil',
        title: 'Digital Marketing Specialist',
        year: '2016 - 2018',
        desc1: 'Nam non tortor diam. Donec dictum, nunc et ultricies volutpat, lacus lectus iaculis augue, in suscipit sem ipsum vel dolor. Suspendisse accumsan lectus nec felis dignissim placerat. Sed sed auctor mauris, at iaculis nibh. Nunc elementum fringilla dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eu interdum arcu, sit amet cursus neque. Ut porttitor varius magna, quis maximus dui blandit non. Phasellus non efficitur diam, nec placerat massa. Suspendisse ex elit, tempor at sagittis a, vestibulum at leo. Donec laoreet erat vitae condimentum egestas. Duis condimentum varius est, id finibus sapien scelerisque dictum. Donec sagittis non erat nec interdum. Quisque porta nunc ac nunc luctus, a hendrerit massa accumsan. Aliquam scelerisque odio quis lorem tincidunt, sit amet gravida nunc posuere.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius libero ac consequat convallis. Phasellus aliquam ipsum nec dui mollis, sed euismod urna aliquam. Nulla rhoncus laoreet massa non vulputate. Donec aliquam sapien a lorem euismod tempor. Duis lacus massa, posuere vel interdum nec, tincidunt ut purus. Suspendisse faucibus at sem in elementum. Quisque feugiat ligula et purus interdum tempus. Vestibulum luctus sollicitudin risus at malesuada. Etiam vehicula quis felis in aliquam. Nam consequat urna in lorem varius, ac consectetur tellus fringilla. Nunc dignissim quis felis id ultricies. Aliquam erat volutpat.'
    },
    {
        link: 'http://www.festo.com.br',
        company: 'Festo Brasil',
        location: 'Sao Paulo/Brazil',
        title: 'Digital Marketing Specialist',
        year: '2014 - 2016',
        desc1: '3333Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius libero ac consequat convallis. Phasellus aliquam ipsum nec dui mollis, sed euismod urna aliquam. Nulla rhoncus laoreet massa non vulputate. Donec aliquam sapien a lorem euismod tempor. Duis lacus massa, posuere vel interdum nec, tincidunt ut purus. Suspendisse faucibus at sem in elementum. Quisque feugiat ligula et purus interdum tempus. Vestibulum luctus sollicitudin risus at malesuada. Etiam vehicula quis felis in aliquam. Nam consequat urna in lorem varius, ac consectetur tellus fringilla. Nunc dignissim quis felis id ultricies. Aliquam erat volutpat.',
        desc2: '3333Nam non tortor diam. Donec dictum, nunc et ultricies volutpat, lacus lectus iaculis augue, in suscipit sem ipsum vel dolor. Suspendisse accumsan lectus nec felis dignissim placerat. Sed sed auctor mauris, at iaculis nibh. Nunc elementum fringilla dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eu interdum arcu, sit amet cursus neque. Ut porttitor varius magna, quis maximus dui blandit non. Phasellus non efficitur diam, nec placerat massa. Suspendisse ex elit, tempor at sagittis a, vestibulum at leo. Donec laoreet erat vitae condimentum egestas. Duis condimentum varius est, id finibus sapien scelerisque dictum. Donec sagittis non erat nec interdum. Quisque porta nunc ac nunc luctus, a hendrerit massa accumsan. Aliquam scelerisque odio quis lorem tincidunt, sit amet gravida nunc posuere.'
    }
]



    const exp1 = document.querySelector('.exp')
    

function createExp(item){
    let h5 = document.createElement('h5')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    exp1.appendChild(h5)
    exp1.appendChild(h1)
    exp1.appendChild(p1)
    exp1.appendChild(p2)

    
    h5.innerText = `Experience - ${exp[item].link}`;
    h1.innerText = `${exp[item].company} | ${exp[item].location} | ${exp[item].title} | ${exp[item].year}`;
    p1.innerText = `${exp[item].desc1}`;
    p2.innerText = `${exp[item].desc2}`;
    p1.className = 'exp1';
    p2.className = 'exp2';
}

createExp(0)
createExp(1)
createExp(2)