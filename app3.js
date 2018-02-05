// const http = require('http');
// let options = {
//     host:'www.baidu.com',
//     port:80
// };
// let req = http.request(options,(res)=>{
//     let info = '';
//     res.on('data',(chunk)=>{
//         info+=chunk;
//     })
//     res.on('end',()=>{
//         console.log(info);
//     })
// })
// req.end();


// const http = require('http');
// let options = {
//     host:'www.biqugew.com',
//     port:80,
//     path:'/book/15/'
// };
// let req = http.request(options,(res)=>{
//     let info = '';
//     res.on('data',(chunk)=>{
//         console.log(chunk)
//         // info+=chunk;
//     })
//     res.on('end',()=>{
//         console.log(info);
//     })
// })
// req.end();


// var buf1= Buffer.from('哈哈哈')
// var buf2= Buffer.from('嘿嘿嘿')
// console.log(buf1)  //打印出来的是个buffer
// console.log(buf2)  //打印出来的是个buffer
// var str =  buf1+buf2;   //打印出了一个字符串
// //两个buffer拼接打印出来的却是一个字符串
// // 这里两个buffer拼接得到的不是一个buffer而是一个字符串，
// // 为什么会这样呢，原来buffer通过“+”相连会被隐式转换为字符串，
// // 并且是utf8编码格式的
// console.log(str,213233123321)


// 现在回过头来看刚才请求的代码，通过data事件获得的chunk是buffer,通过+相连将buffer转换为了字符串，所以出现乱码，
// 所以我们不能用+对buffer进行拼接，因为+会对buffer进行隐式转换。



// var buf1= Buffer.from('哈哈哈')
// var buf2= Buffer.from('嘿嘿嘿')
// var buf3 = [buf1,buf2]
// let chunkbuffer = Buffer.concat(buf3);
// console.log(chunkbuffer.toString())

const http = require('http');
const iconv = require('iconv-lite');
const fs = require('fs');
let options = {
    host:'www.biqugew.com',
    port:80,
    path:'/book/15/'
};
let req = http.request(options,(res)=>{
    let arr = [];
    res.on('data',(chunk)=>{
        arr.push(chunk)
    })
    res.on('end',()=>{
       let chunkall = Buffer.concat(arr);
       let strall=iconv.decode(chunkall,'gbk')
    })
})
req.end();