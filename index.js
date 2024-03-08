import express from "express";


// create express app
const app = express();

//Define route
app.get('/', (req, res) => {
    // console.log(req.query, req.headers);
    res.send("Over and in")
});

app.get('/ping', (req, res) => {
    // console.log(req.query, req.headers);
    res.send("Ping Pong")
});

app.get('/file', (req, res) => {
    console.log(process.cwd());
    res.sendFile(process.cwd() + '/index.html');
})

// Listen for incoming request
app.listen(4000, () => {
    console.log("Express app is running!")
})
