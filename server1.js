const http = require('http');

let whatIsthis = 'recipe';

let todayContents = `<article class="" id="recipe-category-list">
<div class="container">
	<h2><b>전체</b> 레시피 게시판 입니다~</h2>
</div>

<div class="categoryListTitle container">
총 <b>215154</b>개의 레시피가 있습니다.</div>`;

const server = http.createServer(( req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<div class="alpha">Hello World</div>');
    res.write('<h6 class="delta">say World</h6>');
    res.write(todayContents);
    res.end('<div class="beta">Good Bye World</div>');
})  // 이 부분에는 세미콜론을 쓰지 않습니다.

    .listen(8060); // createServer 메서드는 여기서 끝이 납니다.

// 에러를 컨트롤 하는 부분입니다.
server.on('listening', () => {
    console.log('8060 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});