const a = document.querySelector('.main')

a.classList.add('div1')

a.classList.remove('div1')

console.log(a)


function Toggle(){
    a.classList.toggle('div1')
}

const p = document.createElement('p')

p.classList.add('div1')

p.textContent = " added paragraph"

console.log(p)

a.appendChild(p)


const c = document.querySelector('#div2')




