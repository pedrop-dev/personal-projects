document.querySelector('#i-api').addEventListener('click', async () => {
    const pJoke = document.querySelector('#p-joke')
    
    const APIresponse = await fetch("https://icanhazdadjoke.com/",{
        headers: {
            'Accept': "application/json"
        }
    })

    const jokeDj = await APIresponse.json()
    const joke = jokeDj.joke

    pJoke.textContent = `${joke}`
})
