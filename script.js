const active = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

active.addEventListener('click', () =>{  
  search.classList.toggle('active')
  input.focus()
})
