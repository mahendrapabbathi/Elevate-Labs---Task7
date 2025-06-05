const API = 'https://dog.ceo/api/breeds/image/random';
let images = document.querySelector('#image')
let imageButton = document.querySelector('#newImage')
let error = document.querySelector('#error')

async function generateImage(){
    images.textContent = "";
    error.textContent = "";

    try {
        const response = await fetch(API);
        if(!response.ok){
            throw new Error("Fetching failed")
        }

        let imageGenerate = await response.json();

    //    console.log(imageGenerate)

       images.innerHTML = `<img src='${imageGenerate.message}' alt='Dog'>`;
    } 
    
    catch (err) {
        error.textContent = `${err.message}`
    }
}

imageButton.addEventListener('click',function(){
    generateImage();
})