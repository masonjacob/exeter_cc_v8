var http = require('http');
var fs = require('fs');
var port = 1337;

function serveStaticFile(response, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            response.writeHead (500, { 'Content-Type': 'text/plain'});

            response.end('500 - internal error');
        } else {
            response.writeHead(responseCode, {
                'Content-Type': contentType
            });

            response.end(data);
        }
    });
}

http.createServer(function(request, response) {
    var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path) {

        case '': 
            serveStaticFile(response, '/public/index.html', 'text/html');
            break;
        
        case '/index':
            serveStaticFile(response, '/public/index.html', 'text/html');
            break;

        case '/home':
            serveStaticFile(response, '/public/index.html', 'text/html');
            break;
        
        case '/header':
            serveStaticFile(response, '/public/header.html', 'text/html');
            break;
        
        case '/footer':
            serveStaticFile(response, '/public/footer.html', 'text/html');
            break;
        
        case '/pricing':
            serveStaticFile(response, '/public/pricing.html', 'text/html');
            break;

        case '/tee-times':
            serveStaticFile(response, '/public/tee-times.html', 'text/html');
            break;

        case '/calendar':
            serveStaticFile(response, '/public/calendar.html', 'text/html');
            break;

        case '/404':
            serveStaticFile(response, '/public/404.html', 'text/html');
            break;

        case '/css/index.css':
            serveStaticFile(response, '/public/css/index.css', 'text/css');
            break;

        case '/images/account-icon.svg':
            serveStaticFile(response, '/public/images/account-icon.svg', 'image/svg+xml');
            break;

        case '/images/bridge.webp':
            serveStaticFile(response, '/public/images/bridge.webp', 'image/webp');
            break;

        case '/images/course-fall.jpg':
            serveStaticFile(response, '/public/images/course-fall.jpg', 'image/jpg');
            break;

        case '/images/course.jpg':
            serveStaticFile(response, '/public/images/course.jpg', 'image/jpg');
            break;

        case '/images/ecc-logo.svg':
            serveStaticFile(response, '/public/images/ecc-logo.svg', 'image/svg+xml');
            break;

        case '/images/golf-bag.jpg':
            serveStaticFile(response, '/public/images/golf-bag.jpg', 'image/jpg');
            break;

        case '/images/shopping-cart-icon.svg':
            serveStaticFile(response, '/public/images/shopping-car-icon.svg', 'image/svg+xml');     
            break;

        case '/images/sign.jpg':
            serveStaticFile(response, '/public/images/sign.jpg', 'image/jpg');
            break;

        case '/images/slideshow/1.jpeg':
            serveStaticFile(response, '/public/images/slideshow/1.jpeg', 'image/jpeg');
            break;

        case '/images/slideshow/2.jpeg':
            serveStaticFile(response, '/public/images/slideshow/2.jpeg', 'image/jpeg');
            break;

        case '/images/slideshow/3.jpeg':
            serveStaticFile(response, '/public/images/slideshow/3.jpeg', 'image/jpeg');
            break;

        case '/images/slideshow/4.jpeg':
            serveStaticFile(response, '/public/images/slideshow/4.jpeg', 'image/jpeg');
            break;

        case '/images/slideshow/5.jpeg':
            serveStaticFile(response, '/public/images/slideshow/5.jpeg', 'image/jpeg');
            break;

        case '/js/index.js':
            serveStaticFile(response, '/public/js/index.js', 'text/javascript'); 

        default:
            serveStaticFile(response, '/public/404.html', 'text/html');
            break;
    }

}).listen(port);

console.log('Listening... go to http://localhost:' + port);