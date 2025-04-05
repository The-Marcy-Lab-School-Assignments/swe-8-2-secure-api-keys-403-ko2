//////////////////////////
// Imports
//////////////////////////
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

const trendingGifs = async (req, res, next) => {
	const url = `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`;
	console.log('URL:', url);
	console.log('API KEY:', process.env.API_KEY);

	try {
		const response = await fetch(url);
		const data = await response.json();

		res.send(data);
	} catch (error) {
		console.error('Error fetching trending gifs:', error);
		res.status(503).send(error);
	}
};

app.get('/api/gifs', trendingGifs);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
