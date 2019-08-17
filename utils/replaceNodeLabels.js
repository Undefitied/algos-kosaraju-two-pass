module.exports = ({
	map,
	edges,
}) => {
	const mappedVertices = {}
	const mappedEdges = {}

	Object.entries(map).forEach(([initialLabel, newLabel]) => {
		mappedVertices[newLabel] = {
			explored: false
		}

		if (edges[initialLabel]) {
			mappedEdges[newLabel] = Object.keys(edges[initialLabel])
				.reduce((result, endLabel) => {
					const newEndLabel = map[endLabel]
					result[newEndLabel] = true

					return result
				}, {})
		}
	})

	return {
		mappedVertices,
		mappedEdges
	}
}