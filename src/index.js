console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 


function fetchImage() {
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    }).then(function(json) {
        renderImage(json)
    })

}

function renderImage(images) {
    const main = document.querySelector('#dog-image-container')
    //debugger
    images["message"].forEach(image => {
        const img = document.createElement('ul');
       img.innerHTML = "<li> <img src ="+ image + "> </li>"
       main.append(img)
    })
}



function fetchBreed() {
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    }).then(function(json) {
        renderBreed(json)
    })

}

function renderBreed(breedList) {
    const main2 = document.querySelector('#dog-breeds')
    for (const key in breedList["message"]) {
        const breeds = document.createElement('li');
        breeds.innerHTML = key
       main2.append(breeds)
    }
}

function colorChanger(){
    const main2 = document.querySelector('#dog-breeds').onclick = changeColor;
    function changeColor() {
        document.body.style.color = "purple";
        return false;
    } 
}


document.addEventListener('DOMContentLoaded', function() {
    fetchBreed()
    fetchImage()
    colorChanger()
})