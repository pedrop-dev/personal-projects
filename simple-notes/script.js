const addb = document.querySelector('#addbutt')
const container = document.querySelector('.container')
const quesb = document.querySelector('.questionbox')
const errormsg = document.querySelector('#errormsg')
const ititle = document.querySelector('.ititle')
const idescript = document.querySelector('.idescript')

addb.addEventListener('click', () => {
    container.classList.remove('hide')
    quesb.classList.remove('hide')
    errormsg.style.visibility = 'hidden'

    document.querySelector('#createnote').addEventListener('click', () => {
        if (ititle.value.length == 0 || idescript.value.length == 0) {
            errormsg.style.visibility = 'visible'

        } else {
            container.classList.add('hide')
            quesb.classList.add('hide')
            
            const div = document.createElement("div")
            div.classList.add('finalbox')
            document.querySelector('#aside').appendChild(div)

            const h2 = document.createElement("h2")
            h2.classList.add('htitle')
            div.appendChild(h2)

            const p = document.createElement("p")
            p.classList.add('pdescript')
            div.appendChild(p)z

            h2.innerHTML += `${ititle.value}`
            p.innerHTML += `${idescript.value}`

            ititle.value = ''
            idescript.value = ''

            const delb = document.createElement("button")
            delb.textContent = 'Delete'
            delb.classList.add('delete')
            div.appendChild(delb)

            delb.addEventListener('click', () => {
                div.style.display = 'none'
            })
        }
    })

    document.querySelector('#cancel').addEventListener('click', () => {
        container.classList.add('hide')
        quesb.classList.add('hide')
        ititle.value = ''
        idescript.value = ''
        errormsg.style.visibility = 'hidden'
    })
})

o()