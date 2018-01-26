const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/candies-app');

const Schema = mongoose.Schema;

var CandySchema = mongoose.Schema({
    name: String,
    color: String,
    company : String
});

const Candy = mongoose.model('Candy', CandySchema);

const allCandies = [
	{
		name: 'Skittles',
		color: 'rainbow',
		company: 'Mars'
	},
	{
		name: 'Twix',
		color: 'brown',
		company: 'Mars'
	},
	{
		name: 'Animal Souls',
		color: 'pink',
		company: 'union of deities'
	},
	{
		name: 'Rockstar Ragelets',
		color: 'yellow',
		company: 'Axl Rose'
	}];

Candy.remove({}, function(err, candies) {
	Candy.create(allCandies, function(err, candies) {
		console.log("Created " + candies.length + " candies");
		process.exit();
	});
});