module.exports = {
    name:"ping",
    execute(Message) {
        Message.channel.send("pong")
    }
}