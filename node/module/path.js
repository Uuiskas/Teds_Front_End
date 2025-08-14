const path = require('path');

//basename
console.log(path.basename(__filename)); // Exibe o nome do arquivo atual

//diretorio atual
console.log(path.dirname(__filename)); // Exibe o diretório do arquivo atual

//extensão do arquivo
console.log(path.extname(__filename)); // Exibe a extensão do arquivo atual

//cria um objeto path
console.log(path.parse(__filename)); // Exibe um objeto com informações sobre o caminho do arquivo

//junta caminhos
console.log(path.join(__dirname, 'test', 'test.html')); // Junta o diretório atual com 'test' e 'test.html'