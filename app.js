var iconv = require('iconv-lite');
var superagent = require('superagent')
var fs = require('fs');
var request = require('request');

// request.get('http://www.biqugew.com/book/15/',(err,data,buffer)=>{
//     console.log(data)
// })


// request('http://www.biqugew.com/book/15/').pipe(fs.createWriteStream('app.html'))

// request.get('http://www.biqugew.com',(err,data,buffer)=>{
//     console.log(buffer)
// })

request({
    method: 'GET',
    uri: 'http://www.biqugew.com',
    encoding:null

}, function (error, response, body) {
    console.log(response.body)
    // let gbkstr = iconv.decode(response.body,'gb2312');
    let utf8str = iconv.decode(response.body,'utf8')
    console.log(utf8str)
    //   console.log('the decoded data is: ' + body)
      
})





// superagent.get('http://www.biqugew.com/book/15/',{encoding: null}).end((err, res) => {
//         // console.log(res.text);
//          console.log(res.body)
//          fs.writeFile('./app.html',res.text,(err)=>{
//              if(!err){
//                let gbkstr = iconv.decode(res.text,'gbk');
//                 console.log(gbkstr)
//              }
//          })
//     }

// )