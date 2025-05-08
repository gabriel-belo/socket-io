const { createServer }= require('http')
const { Server }= require('socket.io')

const httpServer = createServer()
const socket= new Server(httpServer, {
    cors:{
        origin: 'http://localhost:3000'
    }
})

socket.on("connection", (socket)=>{
  console.log(socket)  
})



httpServer.listen(3000, ()=>{
    console.log("Server listening on port 3000...")
})