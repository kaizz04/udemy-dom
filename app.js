// const listItemElements = document.querySelectorAll('li');

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new Title';
h1.style.color='cyan';
h1.style.backgroundColor='black';

const li = document.querySelector('li:last-of-type');
li.textContent=li.textContent + " kaizz";


const listItemElements = document.getElementsByTagName('li');
for(let le of listItemElements){
    console.log(le);

}

