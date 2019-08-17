module.exports = dataString => {
	const rows = dataString.split('\n')

	let vertices = {}
	let edges = {}
	let edgesReversed = {}

	rows.forEach((rowString) => {
		const row = rowString.split(' ')
		const label = row[0]
		const endLabel = row[1]

		edges[label] = edges[label] ? edges[label] : {}
		edges[label][endLabel] = true

		edgesReversed[endLabel] = edgesReversed[endLabel] ? edgesReversed[endLabel] : {}
		edgesReversed[endLabel][label] = true

		if (!vertices[label]) {
			vertices[label] = {
				explored: false
			}
		}

		if (!vertices[endLabel]) {
			vertices[endLabel] = {
				explored: false
			}
		}
	})

	return {
		edges,
		vertices,
		edgesReversed,
	}
}