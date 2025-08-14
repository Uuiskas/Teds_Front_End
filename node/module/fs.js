const { error } = require('console')
const fs = require('fs')
const path = require('path')

//criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//     return      console.log('Erro', error);
//     }
//     console.log('Pasta criada com sucesso');
// })        
    
// criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), ('hello node'), error => {
    if (error){
        return console.log('Erro', error);
    }
    console.log('Arquivo criado com sucesso');
    // adicionar mais conteudo ao arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello world', error => {
    if (error){
        return console.log('Erro', error);
    }
    console.log('Arquivo alterado com sucesso');
    // ler o arquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
    if (error){
        return console.log('Erro', error);
    }
    console.log(data);
})

})
})





