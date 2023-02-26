const input = document.querySelector('input')
const btn = document.querySelector('.add')
const remove = document.querySelector('.remove')
const ul = document.querySelector('ul')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const rom = document.querySelector('.big')

function addlist() {
    if (input.value !== '') {
        let List = ` <li>${input.value} <button class="delete">delete</button> </li>`
        input.value = ''
        ul.innerHTML += List
    }
}

btn.addEventListener('click', () => {
    addlist()
})
remove.addEventListener('click', () => {
    ul.innerHTML = ''
})
ul.addEventListener('click', (event,) => {
    if (event.target.classList.contains('del-btn')) {
        event.target.parentNode.remove()
    }
})
input.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'Enter' :
            addlist()
    }
})
btn.addEventListener('click', () => {
    let work = JSON.parse(localStorage.getItem('in')) || []
    const list = {
        id: work.length ? work[work.length - 1].id + 1 : 1,
        title: input.value,
        isDone: false
    }
    work = [...work, list]
    localStorage.setItem('in', JSON.stringify(work))
    json()
})
function json() {
    const task = JSON.parse(localStorage.getItem('in')) || []
    let allList = ""
    task.map(el => {
        allList += ` <ul>${el.title}</li>`
    })

}
json()
btn.addEventListener('click', () => {
    body.style.background = `${randomColor()}`
    body.transform = 'scale(1,2)'

})
function randomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
    }
    return color
}
remove.addEventListener('click', () => {
    localStorage.removeItem('in')
    localStorage.removeItem('task')
    localStorage.removeItem('work')
    ul.innerHTML = ''
})

btn.addEventListener('click', () => {
    addlist()
})