const fs = require('fs')
const formatData = require('../mainParts/formatData')

it('formatData, case #1', done => {
	fs.readFile('./tests/testCases/1.txt', 'utf8', (err, data) => {
		if (err) throw err;

		const {
			vertices,
			edges,
		} = formatData(data)

		expect(vertices).toEqual({
			1: {
				explored: false,
			},
			2: {
				explored: false,
			},
			3: {
				explored: false,
			},
		})

		expect(edges).toEqual({
			1: { 2: true },
			2: { 3: true },
			3: { 1: true },
		})

		done()
	});
})

it('formatData, case #2', done => {
	fs.readFile('./tests/testCases/2.txt', 'utf8', (err, data) => {
		if (err) throw err;

		const {
			vertices,
			edges,
		} = formatData(data)

		expect(vertices).toEqual({
			1: {
				explored: false,
			},
			2: {
				explored: false,
			},
			3: {
				explored: false,
			},
			4: {
				explored: false,
			},
			5: {
				explored: false,
			},
			6: {
				explored: false,
			},
			7: {
				explored: false,
			},
			8: {
				explored: false,
			},
			9: {
				explored: false,
			},
		})

		expect(edges).toEqual({
			1: { 7: true },
			2: { 5: true },
			3: { 9: true },
			4: { 1: true },
			5: { 8: true },
			6: { 8: true, 3: true },
			7: { 9: true, 4: true },
			8: { 2: true },
			9: { 6: true },
		})

		done()
	});
})

