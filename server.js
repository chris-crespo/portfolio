const http = require("http");
const fs   = require("fs");

const serveTo = res => (name, type) => {
    res.writeHead(200, { "content-type": type });
    fs.createReadStream(name).pipe(res);
}

const server = http.createServer((req, res) => {
    const serveFile = serveTo(res);

    const routes = {
        "/":          () => serveFile("index.html", "text/html"),
        "/style.css": () => serveFile("style.css", "text/css"),
        "/main.js":   () => serveFile("main.js", "text/javascript")
    };

    routes[req.url]();
});

server.listen(3000);
