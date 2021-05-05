const express= require('express')
const socketio= require('socket.io')
const http= require('http')
const router= require('./routes/router')
const cors = require('cors')
const {addUser,removeUser,getUser,getUsersInRoom}= require('./users')

const PORT= process.env.PORT ||5000

const app = express()
const server= http.createServer(app)
const io= socketio(server)
app.use(cors)

io.on('connection',(socket)=>{

    socket.on('join',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room})
        if(error) return callback(error)
        socket.emit('message',{user:'admin',text:`${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined the room`})
        socket.join(user.room)
        io.to(user.room).emit('roomdata',{room:user.room,users:getUsersInRoom(user.room)})
        callback()
    })

    socket.on('sendMessage',(message,callback)=>{
        const user= getUser(socket.id)
        io.to(user.room).emit('message',{user:user.name,text:message})
        callback()
    })

    socket.on('disconnect',()=>{
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left the room`})
            io.to(user.room).emit('roomdata',{room:user.room,users:getUsersInRoom(user.room)})
        }
        socket.disconnect(socket.id)
    })
})

app.use(router)

server.listen(PORT,()=>console.log("listening.."))