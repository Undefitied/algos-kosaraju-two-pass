// Notes:

// # 1
// in javascript objects are passed to functions are same instances
// and are delivered via links, so changing some object
// inside other function will change the initial object instance

// # 2
// in javascript object sorts keys in descending order (a-b)

const fs = require('fs')
const path = require('path')
const formatData = require('./mainParts/formatData')
const kosarajuTwoPass = require('./mainParts/kosarajuTwoPass')
const computeLargestSCC = require('./utils/computeLargestSCC')

fs.readFile(path.join(__dirname + '/data.txt'), 'utf8', (err, data) => {
	if (err) throw err;

	const {
		vertices,
		edges,
		edgesReversed,
	} = formatData(data)

	const leaders = kosarajuTwoPass({
		edges,
		vertices,
		edgesReversed,
	})

	const largest = computeLargestSCC(leaders)
	console.log('finished', largest)
});

// ideas for improvement
// replace Object with Map in data model
// typization could help as much as tests