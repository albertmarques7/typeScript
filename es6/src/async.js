// para escrever promise e fazer tudo ao mesmo tempo
//resolve se der certo e reject se der errado
//quando inalizar eu te prometo no final.
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na iteração')
    }
})


async function execucaoPrincipal() {
    console.log('inicio')
    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('gian@gmail.com', 1232345).then(resultado => {
        console.log(resultado);
    })
    
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }
    console.log('fim')
}

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
})
}

execucaoPrincipal();
