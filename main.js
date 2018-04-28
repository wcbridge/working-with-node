// //omdb
// var request = require("request");
// var movieName = process.argv[2]

// var omdb = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// //var omdb = "http://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy";


// request(omdb, function (error, response, body) {

//     // If the request is successful
//     if (!error && response.statusCode === 200) {

//         // Parse the body of the site and recover just the imdbRating
//         // // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
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
//spotify


//Twitter



