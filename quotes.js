var quotes = ["You keep using that word.  I do not think it means what you think it means.", "Anybody want a peanut?", "As you wish!",
					"Rodents of Unusual Size?  I don't think they exist.", "I can't help that I'm the biggest and the strongest.  I don't even exercise.",
					"You killed my father.  Prepare to die.",  "Inconceivable!", "I'm not a witch, I'm you're wife!", 
					"There's a shortage of perfect breasts in this world. T'would be a pity to damage yours.", "Is this a kissing book?",
					"Turns out he's only mostly dead.", "I'm going to do him left-handed.", "Hand me the gate key."
]
function randomQuote() {
	return  (quotes[Math.floor(Math.random() * quotes.length) ]);
} ;

//setup express
var express = require('express'); 
var app = express();

//send the info
app.get('/', function(req, res) {
	res.send(randomQuote());
});

app.get('/api/quotes', function(req, res) {
	res.send(quotes);
});

//create the server
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});