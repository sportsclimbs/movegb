// Add the new background image..

const coverImage = document.querySelector('.cover-image');

{{ $img := resources.Get "images/0601-desert.jpg" }}


const addImg = () => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', '{{ $img.RelPermalink }}');
    newImg.setAttribute('alt', 'new image desert background');
    newImg.className = "desert";
    coverImage.appendChild(newImg);
}

addImg();

// run bird

const bird = document.querySelector('[alt="ratite"]');

const ratiteBtn = document.querySelector('#btn-ratite');

ratiteBtn.addEventListener('click', () => {
    bird.classList.add('run');
    
    setTimeout(() => {
        bird.classList.remove('run');
    }, 3000);
})