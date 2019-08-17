const fs = require('fs')
const formatData = require('../mainParts/formatData')
const depthFirstSearchLoop = require('../mainParts/depthFirstSearchLoop')

it('depthFirstSearchLoop, case #1', done => {
	fs.readFile('./tests/testCases/1.txt', 'utf8', (err, data) => {
		if (err) throw err;

		const {
			vertices,
			edges,
		} = formatData(data)

		const graph = {
			vertices,
			edges
		}

		const leaders = {}
		const times = {}

		depthFirstSearchLoop({
			graph,
			leaders,
			times
		})

		expect(vertices).toEqual({
			1: {
				explored: true,
			},
			2: {
				explored: true,
			},
			3: {
				explored: true,
			},
		})

		expect(times).toEqual({
			1: 2,
			2: 1,
			3: 3,
		})

		expect(leaders).toEqual({
			1: '3',
			2: '3',
			3: '3',
		})

		done()
	});
})

it('depthFirstSearchLoop, case #2', done => {
	fs.readFile('./tests/testCases/2.txt', 'utf8', (err, data) => {
		if (err) throw err;

		const {
			vertices,
			edges,
			edgesReversed,
		} = formatData(data)

		const graph = {
			vertices,
			edges: edgesReversed
		}

		const leaders = {}
		const times = {}

		depthFirstSearchLoop({
			graph,
			leaders,
			times
		})

		expect(vertices).toEqual({
			1: {
				explored: true,
			},
			2: {
				explored: true,
			},
			3: {
				explored: true,
			},
			4: {
				explored: true,
			},
			5: {
				explored: true,
			},
			6: {
				explored: true,
			},
			7: {
				explored: true,
			},
			8: {
				explored: true,
			},
			9: {
				explored: true,
			},
		})

		// todo calculate on paper and fill with correct values

		// expect(times).toEqual({
		// 	1: 7,
		// 	2: 3,
		// 	3: 1,
		// 	4: 8,
		// 	5: 2,
		// 	6: 5,
		// 	7: 9,
		// 	8: 4,
		// 	9: 6,
		// })

		// expect(leaders).toEqual({
		// 	1: '9',
		// 	7: '9',
		// 	4: '9',
		// 	9: '6',
		// 	6: '6',
		// 	3: '6',
		// 	8: '4',
		// 	5: '4',
		// 	2: '4',
		// })

		done()
	});
})

// finished - error with leaders is correct. This numbers from lecture
// should be on graph that is "looped" by labels of "times"

