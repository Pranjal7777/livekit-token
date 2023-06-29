const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({ origin: "*" }))
// const connect = require("./src/db")
app.use(express.json())
const { AccessToken } = require('livekit-server-sdk');


const port = 7070;

 const LIVEKIT_API_KEY="APIUk6B8Xbh6D46"
 const LIVEKIT_API_SECRET="rqD7JafpzIpowKWB0FZH6ZrL9XvrSX4eHKcf9YtTT19B"

app.get('/getToken', (req, res) => {
    res.send(createToken(req.query));
  });


const createToken = ({username,roomname}) => {
    // if this room doesn't exist, it'll be automatically created when the first
    // client joins
    console.log(username,roomname,"siadaiiij")
    const roomName = roomname;
    // identifier to be used for participant.
    // it's available as LocalParticipant.identity with livekit-client SDK
    const participantName = username;
  
    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: participantName,
    });
    console.log(at)
    at.addGrant({ roomJoin: true, room: roomName });
  
    return at.toJwt();
  }
  

  app.listen(port, async () => {
    // await connect()
    console.log(`listening on port ${port}`)
})