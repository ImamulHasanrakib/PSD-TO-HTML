
const serchBtn = document.querySelector(' i.fa-magnifying-glass');
const cancleBtn = document.querySelector('i.fa-xmark');
const  Form = document.querySelector('.form');

serchBtn.addEventListener('click', () =>{
    Form.classList.add('active');
    serchBtn.classList.add('active');
    cancleBtn.classList.add('active');
})


cancleBtn.addEventListener('click', () =>{
    Form.classList.remove('active');
    serchBtn.classList.remove('active');
    cancleBtn.classList.remove('active');
})