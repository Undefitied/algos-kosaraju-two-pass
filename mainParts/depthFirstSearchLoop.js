const depthFirstSearch = require('./depthFirstSearch')

module.exports = ({
	graph,
	leaders,
	times,
}) => {
	const { vertices } = graph

	const config = {
		timesCount: 0,
		currentSourceVertex: null,
	}

	const verticesLabels = Object.keys(vertices)
	for (let i = verticesLabels.length - 1; i >= 0; i--) {
		let label = verticesLabels[i]

		if (vertices[label].explored === false) {
			console.log('#', verticesLabels.length - i, label, ':', vertices[label].explored)
			config.currentSourceVertex = label

			depthFirstSearch({
				graph,
				nodeLabel: label,
				leaders,
				times,
				config,
				// idea, add recursionCounter for debug
				// finished, reading article with java implementation using some "Stack" type
				// idea, try to run python code
				// Идея: если я запущу операцию #745(ту, где фейл) отдельно, я должен пойти нахуй
			})

			console.log('#', verticesLabels.length - i, label, ':', vertices[label].explored)

		}
	}
}