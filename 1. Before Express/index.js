import http from 'http';
const PORT = 4000;

const server = http.createServer((req, res) => {
    // Routing
    // console.log(req.url);
    if (req.url === '/')
    {
        res.writeHead(200, 'OK', { 'content-type': 'text/html' });
        res.write("<h1>HOME<h1>");
        res.end("<a href='/contact'>CONTACT</a>");
    } else if (req.url === '/about')
    {
        res.writeHead(200, 'OK', { 'content-type': 'text/html' });
        res.end("<h2>ABOUT</h2>");
    } else if (req.url === '/contact')
    {
        res.writeHead(200, 'OK', { 'content-type': 'text/html' });
        res.end("<h2>CONTACT</h2>");
    }
    else
    {
        res.writeHead(404, 'Page Not Found', { 'content-type': 'text/html' });
        res.end("<h1>404 Page Not Found :(</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running(http://localhost:${PORT})...`);
});