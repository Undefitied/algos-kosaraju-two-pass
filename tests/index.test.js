const fs = require('fs')
const formatData = require('../mainParts/formatData')
const kosarajuTwoPass = require('../mainParts/kosarajuTwoPass')
const computeLargestSCC = require('../utils/computeLargestSCC')

it('index, case #4, case from the internet', done => {
	fs.readFile('./tests/testCases/4.txt', 'utf8', (err, data) => {
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

		expect(largest).toEqual([
			6,3,2,1,0
		])

		done()
	});
});

it('index, case #6, case from the internet', done => {
	fs.readFile('./tests/testCases/6.txt', 'utf8', (err, data) => {
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

		expect(largest).toEqual([
			7,1,0,0,0
		])

		done()
	});
});

it('index, case #7, case from the internet', done => {
	fs.readFile('./tests/testCases/7.txt', 'utf8', (err, data) => {
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

		expect(largest).toEqual([
			3,3,1,1,0
		])

		done()
	});
});