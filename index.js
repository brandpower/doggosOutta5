var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/landing.html'));
});

app.listen(8080);


// function to perform a get request
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage() {
    // get the json from the server
    var json = httpGet('https://dog.ceo/api/breeds/image/random');
    console.log(json);

    // decode the json into an array
    var array = JSON.parse(json);
    console.log(array);

    // get the image url from the array
    var url = array.message;
    console.log(url);

    // get the image object
    var image = document.getElementById('dogImage');

    // set the src of the image object
    image.src = url;

}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

// app.listen(port, function () {
//     console.log("listen to" + port);
// });