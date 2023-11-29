// create a server using NodeJS

// 1. Import http library/Module
const http = require("http");

// 2. Create Server.
const server = http.createServer((req, res) => {
  // here comes the request
  res.end("Welcome to Node JS Server");
});

// 3. Specify a port to listen to client's requests.
server.listen(3000,()=>{
    console.log("server is listening on port");
});
