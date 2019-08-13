const fs = require('fs')
const formatData = require('../mainParts/formatData')
const depthFirstSearch = require('../mainParts/depthFirstSearch')

it('depthFirstSearch, case #1', done => {
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

		const randomVertexLabel = Object.keys(vertices)[0]
		const leaders = {}
		const times = {}

		const currentSourceVertex = randomVertexLabel // doesn't really matter for this test case
		const config = {
			timesCount: 0,
			currentSourceVertex,
		}

		depthFirstSearch({
			graph,
			nodeLabel: randomVertexLabel,
			leaders,
			times,
			config,
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
			1: 3,
			2: 2,
			3: 1,
		})

		expect(leaders).toEqual({
			1: currentSourceVertex,
			2: currentSourceVertex,
			3: currentSourceVertex,
		})

		done()
	});
})

it('depthFirstSearch, case #2', done => {
	fs.readFile('./tests/testCases/2.txt', 'utf8', (err, data) => {
		if (err) throw err;

		const {
			vertices,
			edges,
		} = formatData(data)

		const graph = {
			vertices,
			edges
		}

		const randomVertexLabel = Object.keys(vertices)[0]
		const leaders = {}
		const times = {}

		const currentSourceVertex = randomVertexLabel // doesn't really matter for this test case
		const config = {
			timesCount: 0,
			currentSourceVertex,
		}

		depthFirstSearch({
			graph,
			nodeLabel: randomVertexLabel,
			leaders,
			times,
			config,
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

		expect(times).toEqual({
			4: 1,
			3: 2,
			5: 3,
			2: 4,
			8: 5,
			6: 6,
			9: 7,
			7: 8,
			1: 9,
		})

		expect(leaders).toEqual({
			1: currentSourceVertex,
			2: currentSourceVertex,
			3: currentSourceVertex,
			4: currentSourceVertex,
			5: currentSourceVertex,
			6: currentSourceVertex,
			7: currentSourceVertex,
			8: currentSourceVertex,
			9: currentSourceVertex,
		})

		done()
	});
})

