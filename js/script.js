// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {}

var myPlayList = [

	{
		"title": "Runner's High",
		"artist": "3racha",
		"yt_url": "https://www.youtube.com/watch?v=SnP0Nqp455I",
		"image_url": "https://i1.sndcdn.com/artworks-000219771617-rnlimi-t500x500.jpg",
		"songLength": "4 minutes"
	},

	{
		"title": "What's New, Scooby-Doo",
		"artist": "Simple Plan",
		"yt_url": "https://www.youtube.com/watch?v=8FQiAj5mdHY",
		"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Whats_new.png/250px-Whats_new.png",
		"songLength": "2 minutes"
	},
	{
		"title": "Sir Duke",
		"artist": "Stevie Wonder",
		"yt_url": "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
		"songLength": "--- minutes"
	},
	{
		"title": "Sorry",
		"artist": "Justin Bieber",
		"yt_url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image_url": "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
		"songLength": "--- minutes"
	}

]



// DOCUMENT READY FUNCTION
$(document).ready(function() {
	for (var i = 0; i < myPlayList.length; i = i + 1) {
		$(".songs").append("<p><h3>" + myPlayList[i].title + "</h3></p>");
		$(".songs").append("<p>" + myPlayList[i].artist + "</p>");
		$(".songs").append("<p><img src='" + myPlayList[i].image_url + "'></p>");
		$(".songs").append("<p><a href='" + myPlayList[i].yt_url + "'>Play Song</a></p>");
	}
});

function displayList() {



}

function clearList() {



}

function addSong() {



}
