
const gateway = require('fast-gateway')

const PORT = 9001;

const server = gateway({
    routes: [{
        prefix:"/product",
        target: "http://localhost:8081/"
    },{
        prefix:"/cart",
        target: "http://localhost:8082/"
    },{
        prefix:"/user",
        target: "http://localhost:8083/"
    }]
})


server.get("/test",(req, res) => {
    res.send("gateway")
})

server.start(PORT).then(server => {
    console.log("api gateway starts")
})