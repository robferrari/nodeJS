import Category from "./category.model.js";
import http from 'http';

const categories = [
    new Category(1, 'Javascript'),
    new Category(2, 'Node.js'),
    new Category(3, 'Java'),
    new Category(4, 'C#'),
    new Category(5, 'Typescript'),
    new Category(6, 'PHP'),
    new Category(7, 'Angular'),
    new Category(8, 'Ruby'),
    new Category(9, 'Python'),
    new Category(10, 'C++'),
    new Category(11, 'Rust'),
    new Category(12, 'VBA')
];

const server = http.createServer((request, response) => {

    if (request.url === '/categories' && request.method === 'GET') {
        response
            .writeHead(200, {'Content-type': 'application/json'})
            .end(JSON.stringify(categories));
    } else if (request.url.match(/\/categories\/\d+$/) && request.method === 'GET') {
        const idParam = parseInt(request.url.split('/')[2]);
        const categoryFound = categories.find(c => c.id === idParam);
        if (categoryFound) {
            response
                .writeHead(200, {'Content-type': 'application/json'})
                .end(JSON.stringify(categoryFound));
        }
    } else {
        response.writeHead(404).end();
    }
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Serveur HTTP démarré sur http://${hostname}:${port}`);
});
