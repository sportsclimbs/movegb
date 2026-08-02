console.log('page.js is working');

const main = document.querySelector('main');

const h2 = document.createElement('h2');

let now = new Date();



h2.innerText =  `It's now ${now.getHours()}:${now.getMinutes()}` ;

main.appendChild(h2);

// To do app
const pageNav = document.querySelector('.page-nav');
const form = document.createElement('form');
const input = document.createElement('input');
input.placeholder = 'To do item';

// main.appendChild(form);

main.insertBefore(form, pageNav);

form.appendChild(input);

const ul = document.createElement('ul');
main.appendChild(ul);

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.className = 'btn';
submitBtn.textContent = 'Add';
form.appendChild(submitBtn);

const removeEl = el => { el.remove() };

form.onsubmit = (e) => {
    e.preventDefault();
    console.log('hello there');
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';

    li.onclick = removeEl.bind(null, li);
}
