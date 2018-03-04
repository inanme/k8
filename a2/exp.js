const express = require("express");
const os = require("os")
const app = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get("/status", (req, res) => {
	const r = getRandomInt(10)
	if(getRandomInt(10) ==0 ){
		throw new Error("No, no");
	} else {
		res.send(`OK--(${r})`);
	}
});

app.get("/health", (req, res) => {
	const r = getRandomInt(10)
	if(getRandomInt(10) ==0 ){
		throw new Error("No, no");
	} else {
		res.send(`OK--(${r})`);
	}
});

app.get("/", (req, res) => {
  console.log("Received request from " + req.connection.remoteAddress);
  res.writeHead(200);
  res.end("You've hit " + os.hostname() + "\n");
})

const port = process.argv[2] || 8080;
app.listen(port, () => {
 console.log("Listening on " + port);
});
