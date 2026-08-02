// Add the new background image..

const coverImage = document.querySelector('.cover-image');
const topImage = document.querySelector('.cover-image :first-child');

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

const btn2 = document.querySelector('#btn-2');

btn2.addEventListener('click', () => {
    topImage.classList.toggle('fade');
    // topImage.style.opacity = '0';
    bird.classList.add('run');
    
    setTimeout(() => {
        bird.classList.remove('run');
    }, 3000);
})