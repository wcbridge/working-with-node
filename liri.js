//import { domainToASCII } from "url";

require("dotenv").config();
var keys = require('./keys.js');
var fs = require('fs');
var request = require("request");
var Spotify = require('node-spotify-api');
 var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
 var userInput = process.argv[2];
 var song = process.argv[3];
 switch(userInput) {
     case 'my-tweets':
        displayTweet();
        break;
     case 'spotify-this-song':
        spotifySong(song);
        break;
    case 'do-what-it-says':
        doIt()
        break;
    default:
        console.log('Im sorry, I dont understand that command!');    
}

function spotifySong(song) {
    var static = 'The sign';
    spotify.search({ type: 'track', query:'livin on a prayer', limit:1 }, function (err,data) {
     
        console.log(data.tracks.items[0].name)
        console.log(data.tracks.items[0].artists[0].name)

        
    }) 
}



// //omdb 
// var movieName = process.argv[2]

// var omdb = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// request(omdb, function (error, response, body) {
//     if (!error && response.statusCode === 200) {

//         console.log("Title: " + JSON.parse(body).Title);
//         console.log("Release Year: " + JSON.parse(body).Year);
//         console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
//         console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//         console.log("Country: " + JSON.parse(body).Country);
//         console.log("Language: " + JSON.parse(body).Language);
//         console.log("Plot: " + JSON.parse(body).Plot);
//         console.log("Starring: " + JSON.parse(body).Actors);
//     }
// });
