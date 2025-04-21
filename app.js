// importa o framework express e o módulo path
const express = require('express');
const path = require('path');

// inicializa a aplicação express
const app = express();
const PORT = 3000;

// configuração da engine EJS
app.set('view engine', 'ejs'); // define o motor de visualização
app.set('views', path.join(__dirname, 'views')); // define o diretório onde estão os arquivos .ejs

// middleware para servir arquivos estáticos da pasta public (css, js, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// rota para servir os certificados diretamente via /certificados/nome-do-arquivo
app.use('/certificados', express.static(path.join(__dirname, 'public', 'certificados')));

// rota principal da aplicação
app.get('/', (req, res) => {
  res.render('index'); // renderiza o arquivo index.ejs
});

// inicializa o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
