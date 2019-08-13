const fs = require('fs')
const formatData = require('./mainParts/formatData')

fs.readFile('./data.txt', 'utf8', (err, data) => {
	if (err) throw err;

	const {
		vertices,
		edges,
	} = formatData(data)

	console.log('vertices', vertices)
	console.log('edges', JSON.stringify(edges))

});

