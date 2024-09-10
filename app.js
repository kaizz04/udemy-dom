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
const ul = document.querySelector('ul');
console.log("list content:  "+ul.children[2].textContent);

console.log(ul.nextElementSibling); //this is provide input element

const section = document.querySelector('section');
const btn = document.querySelector('button');
//section.style.backgroundColor='orange';

section.className='red-bg';

btn.addEventListener('click', ()=>{
    // if(section.className==='red-bg visible'){
    //     section.className='red-bg invisible';

    // }else{
    //      section.className = 'red-bg visible';
    // }
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
   
});

const p1 = document.querySelector('p');

const newLi = document.createElement('li');
newLi.textContent = 'Item 4';


// ul.appendChild(newLi);
// ul.append(newLi);
// ul.prepend(newLi);
// ul.lastElementChild.before(newLi);
// ul.firstElementChild.replaceWith(newLi);

const secLi = ul.children[1];
secLi.insertAdjacentElement('afterend',newLi);









