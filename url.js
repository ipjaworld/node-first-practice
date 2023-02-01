const url = requeire( 'url' );

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList');

console.log('new URL();', myURL);
console.log('url.format();', url.format( myURL ));