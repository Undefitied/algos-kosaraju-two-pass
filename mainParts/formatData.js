module.exports = dataString => {
	const rows = dataString.split('\n')

	let vertices = {}
	let edges = {}

	rows.forEach((rowString) => {
		const row = rowString.split(' ')
		const label = row[0]
		const endLabel = row[1]

		edges[label] = edges[label] ? edges[label] : {}
		edges[label][endLabel] = true

		if (!vertices[label]) {
			vertices[label] = {
				explored: false
			}
		}
	})

	return {
		edges,
		vertices,
	}
}