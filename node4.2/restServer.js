const http = require('http');
const { server } = require('websocket');
const fs = require('fs').promises;

const users = {};

http.createServer(async (req, res) => {
    try{
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' } );
                return res.end(data);
            } else if(req.url === '/about'){
                const data = await fs.readFile('/about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' } );
                return res.end(data);
            } else if(req.url === '/users'){
                res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8' } );
                return res.end(JSON.stringify(users));
            } else if(req.url === '/spotify'){
                const data = await fs.readFile('./spotify.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' } );
                return res.end(data);
            }

            try{
                const data = await fs.readFile('.${req.url}');
                return res.end(data);
            } catch(err){
                // 주소에 해당하는 라우트를 못찾았다는 404 Not Found error 발생
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');

    }catch(error){
        console.error(error);
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(error.message);
    }
})

    .listen(8082, () => {
        console.log('8082번 포트에서 서버 대기 중입니다.');
    });