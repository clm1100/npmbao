var iconv = require('iconv-lite');
var superagent = require('superagent')
var fs = require('fs');
var http = require('http');
var options = {
    hostname: 'www.biqugew.com',
    post: 80,
    path: '/book/15'
}

let req = http.request(options, (res) => {
    var arrBuf = [];
    var bufLength = 0;
    let info=""
    res.on('data', (chunk) => {
        info+=chunk
        arrBuf.push(chunk);
        bufLength += chunk.length;
    });
    res.on('end', () => {
        // console.log(info);
        // str = iconv.decode(info, 'GB2312');
        var chunkAll = Buffer.concat(arrBuf, bufLength);
        var strJson = iconv.decode(chunkAll, 'gb2312'); // 汉字不乱码
        // var strJson  = iconv.decode(info,'GB2312')
        console.log(strJson)
        var strBuffer = iconv.encode(strJson,'utf8')
        fs.writeFile('./app.html', strBuffer, (err) => {
            if (!err) {
                console.log("ok")
            }
        })
    })
})
req.end()

