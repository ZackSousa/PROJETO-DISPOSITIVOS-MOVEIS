// Importa o módulo HTTP
const http = require('http'); 

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// Define a porta e inicia o servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});