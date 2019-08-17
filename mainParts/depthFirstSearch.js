const stack = []

const depthFirstSearch = ({
	graph,
	nodeLabel,
	leaders,
	times,
	config,
}) => {
	graph.vertices[nodeLabel].explored = true
	leaders[nodeLabel] = config.currentSourceVertex

	if (graph.edges[nodeLabel]) {
		const connectedVerticesLabels = Object.keys(graph.edges[nodeLabel])

		for (let i = 0; i < connectedVerticesLabels.length; i++) {
			const endLabel = connectedVerticesLabels[i]

			if (graph.vertices[endLabel].explored === false) {
				depthFirstSearch({
					graph,
					nodeLabel: endLabel,
					leaders,
					times,
					config,
				})
			}
		}
	}

	config.timesCount++
	times[nodeLabel] = config.timesCount
}

module.exports = depthFirstSearch
