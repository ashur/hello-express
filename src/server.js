const express = require( 'express' );
const app = express();

const host = process.env.HOSTNAME ? process.env.HOSTNAME : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;

app.get( '/', (req, res) =>
{
	res.send( 'Hello, world.' )
});

app.get( '/:name', (req, res) =>
{
	res.send( `Hello, ${req.params.name}.` );
});

app.listen( port, host, () =>
{
	console.log( `Listening at http://${host}:${port}!` )
});
