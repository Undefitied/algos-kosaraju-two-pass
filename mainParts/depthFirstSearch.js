// in javascript objects are passed to functions are same instances
// and are delivered via links, so changing some object
// inside other function will change the initial object instance
const depthFirstSearch = ({
	graph,
	nodeLabel,
	leaders,
	times,
	config,
}) => {
	const { vertices, edges } = graph
	const { currentSourceVertex } = config

	vertices[nodeLabel].explored = true
	leaders[nodeLabel] = currentSourceVertex

	const connectedVerticesLabels = Object.keys(edges[nodeLabel])
	connectedVerticesLabels.forEach(endLabel => {
		if (vertices[endLabel].explored === false) {
			depthFirstSearch({
				graph,
				nodeLabel: endLabel,
				leaders,
				times,
				config,
			})
		}
	})

	config.timesCount++
	times[nodeLabel] = config.timesCount
}

module.exports = depthFirstSearch
