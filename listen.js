// flapjack written by Preston Cammarata (c) 2016
// an interactive, expandable bot that logs and has commands

// Variables
var logfile  = "flapjack.log";
var server   = "irc.freenode.net";
var channel  = "#jinxirc";
var botname  = "flapjack_bot";

// Require Libraries
var jinxirc  = require ( 'irc' );
var fs       = require ('fs');
var util     = require ( 'util' );

// Functions
var log_file   = fs.createWriteStream ( logfile, {flags : 'w'} );
var log_stdout = process.stdout;

console.log = function ( d ) {
	log_file.write ( util.format ( d ) + '\n' );
  	log_stdout.write ( util.format ( d ) + '\n' );
};

// Client Listening + Error Handling
var client = new jinxirc.Client ( server, botname, {
	channels: [channel],
});

client.addListener ( 'message', function ( from, to, message ) {
	// Log
	console.log ( from + ': ' + message );

	// Custom Commands
	if ( message === "-flapjack" ) {
		client.say ( channel, "good morning everyone" );
		console.log ( botname + ": good morning everyone" );
	}

	if ( message.includes ( "twerk" ) ) {
		client.say ( channel, "im twerking rn" );
		console.log ( "flapjack_bot: im twerking rn" );
	}

    
});

client.addListener ( 'error', function ( message ) {
    console.log ( 'error: ', message );
});
