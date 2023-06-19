const express = require("express");
const server = express();
const router = require("./users/users-router")

server.use(express.json());

server.get("/",(res,req) => {
    res.send({message :" hello"})
})

server.use("/api" , router)

module.exports = server;