const fs = require('fs')
const computeLargestSCC = require('../utils/computeLargestSCC')

it('computeLargestSCC, case #3', done => {
	fs.readFile('./tests/testCases/3.txt', 'utf8', (err, data) => {
		if (err) throw err;

		const leaders = {
			1: '7',
			7: '7',
			4: '7',
			9: '9',
			6: '9',
			3: '9',
			8: '8',
			5: '8',
			2: '8',
		}
		const largest = computeLargestSCC(leaders)

		expect(largest).toEqual([
			3,
			3,
			3,
			0,
			0,
		])

		done()
	});
})

