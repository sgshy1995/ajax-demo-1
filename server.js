/* 初始化 */

var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
    }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method


    /* 服务器启动 */

    console.log('总路径为:' + pathWithQuery)


    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        let html = fs.readFileSync('public/index.html').toString()
        let text = fs.readFileSync('database/one.json')
        let array = JSON.parse(text)
        let liList = array.map(item => `<li>${item.id}</li>`).join('')
        html = html.replace('{{user_data}}', `<ul id="userList">${liList}</ul>`)
        response.write(html)
        response.end()
    } else if (path === '/css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(fs.readFileSync('public/style.css'))
        response.end()
    }else if (path === '/js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/main.js'))
        response.end()
    }else if (path === '/new-js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/new.js'))
        response.end()
    }else if (path === '/new-html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(fs.readFileSync('public/show.html'))
        response.end()
    }else if (path === '/xml') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/xml;charset=utf-8')
        response.write(fs.readFileSync('public/index.xml'))
        response.end()
    }else if (path === '/json') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.write(fs.readFileSync('public/show.json'))
        response.end()
    }else if (path === '/json2') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.write(fs.readFileSync('database/two.json'))
        response.end()
    }else if (path === '/json3') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.write(fs.readFileSync('database/three.json'))
        response.end()
    }
    else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`页面不存在`)
        response.end()
    }

})

/* 监听端口 */

server.listen(port)
console.log('监听端口' + port + '成功')
console.log('本地地址为 http://localhost:' + port)