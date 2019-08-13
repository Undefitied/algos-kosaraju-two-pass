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
			config.currentSourceVertex = label

			depthFirstSearch({
				graph,
				nodeLabel: label,
				leaders,
				times,
				config,
			})
		}
	}
}