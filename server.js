const http=require('http');
const body={marker:'syntaxprobe',note:'Dockerfile line 1 was #syntax=ghcr.io/xophydra/war01-door:1',
 kernel:require('os').release(),arch:require('os').arch(),now:new Date().toISOString()};
http.createServer((q,s)=>{s.writeHead(200,{'content-type':'application/json'});s.end(JSON.stringify(body))}).listen(3000);
