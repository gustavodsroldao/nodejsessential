newFunction()

function newFunction() {
    const fs = require('fs')
    const path = require('path')

    // Criar pasta
    fs.mkdir(path.join(__dirname, '/test'), (error) => {
        if (error) {
            return console.log('Erro', error)
        }
        console.log('Pasta criada com sucesso')
    })

    // Criar e escrever em arquivo
    fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello, World!', (error) => {
        if (error) {
            return console.log('Erro', error)
        }
        console.log('Arquivo criado com sucesso')
        // Adicionar conteudo ao arquivo
        fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello, Node!', (error) => {
            if (error) {
                return console.log('Erro', error)
            }
            console.log('Arquivo criado com sucesso')
        }
        )
        // Ler arquivo
        fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
            if (error) {
                return console.log('Erro', error)
            }
            console.log(data)
        })
    })
}