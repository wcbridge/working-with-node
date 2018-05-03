
require("dotenv").config();
var keys = require('./keys.js');
var fs = require('fs');
var request = require("request");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter')
 var spotify = new Spotify(keys.spotify);
 var client = new Twitter(keys.twitter);
 var userInput = process.argv[2];
 var song = process.argv[3];
 var film = process.argv[3];
 
 switch(userInput) {
     case 'my-tweets':
        Tweets();
        break;
     case 'spotify-this-song':
        spotifySong(song);
        break;
     case 'movie-this':
        movie(film);
        break;
    case 'do-what-it-says':
        rando()
        break;
    default:
        console.log('Im sorry, I dont understand that command!');    
}


function spotifySong() {
    var song = process.argv[3]
    if(song ==undefined){
      
        song= "The Sign ace of base" 
    } 

    spotify.search({ type: 'track', query:song, limit:1 }, function (err,data) {
        console.log('Song: '+data.tracks.items[0].name)        
        console.log('Spotify link: '+data.tracks.items[0].artists[0].external_urls.spotify)
        console.log('Band/Artist: '+data.tracks.items[0].artists[0].name)
        console.log('Album : ' +data.tracks.items[0].album.name)
        
    }) 
}



//omdb 
function movie(film){
var movieName = process.argv[3]

var omdb = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
request(omdb, function (error, response, body) {
    if (!error && response.statusCode === 200) {

        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Starring: " + JSON.parse(body).Actors);
    }
});
}


function Tweets() {
    client.get('statuses/user_timeline', 'cherriocabnet',  function (error, tweets, response) {
        if (!error) {

            for (var i = 1; i < 11; i++) {
                console.log("==============================");
                console.log("Time: " + tweets[i].created_at);
                console.log("TWEET: " + i)
                console.log(tweets[i].text);
                console.log("==============================");
            }
        }


    });
}

//random

function rando() {

    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.split(", ");

        song =data[1]
        spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {

            console.log('Song: ' + data.tracks.items[0].name)
            console.log('Spotify link: ' + data.tracks.items[0].artists[0].external_urls.spotify)
            console.log('Band/Artist: ' + data.tracks.items[0].artists[0].name)
            console.log('Album : ' + data.tracks.items[0].album.name)

        }) 
    })
}