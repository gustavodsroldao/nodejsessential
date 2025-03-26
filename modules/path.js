const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename)); 


// Apenas o nome do diretorio atual
console.log(path.dirname(__filename));

//Extensão do arquivo
console.log(path.extname(__filename));

//Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos
console.log(path.join(__dirname, 'test'));