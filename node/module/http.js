const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'content-type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    }
    if (req.url === '/users'){
        const users = [
            {name: 'Bruno', age: 26},
            {name: 'Rebecca', age: 22}
        ];

    res.writeHead(200, {'content-type': 'application/json' });
    res.end(JSON.stringify(users));    
    }
    
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});
