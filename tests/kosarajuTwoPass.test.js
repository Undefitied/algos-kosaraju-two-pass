const fs = require('fs')
const formatData = require('../mainParts/formatData')
const kosarajuTwoPass = require('../mainParts/kosarajuTwoPass')

it('kosarajuTwoPass, case #3', done => {
	fs.readFile('./tests/testCases/3.txt', 'utf8', (err, data) => {
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

		expect(leaders).toEqual({
				1: '7',
				7: '7',
				4: '7',
				9: '9',
				6: '9',
				3: '9',
				8: '8',
				5: '8',
				2: '8',
			})

		done()
	});
})

