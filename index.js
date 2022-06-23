/*const ul = document.querySelector('.items')

//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'Brad';
ul.children[2].innerHTML = '<h1>Brad</h1>';*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name ');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput === ''){
       msg.classList.add('error');
       msg.innerHTML = 'Please enter all fields'; 
       setTimeout(() => msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear all fields
        nameInput.value = '';
        emailInput.value = '';

    }
}