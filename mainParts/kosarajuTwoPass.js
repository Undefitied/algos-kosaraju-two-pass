const depthFirstSearchLoop = require('./depthFirstSearchLoop')
const replaceNodeLabels = require('../utils/replaceNodeLabels')
const getMappedInitialLabels = require('../utils/getMappedInitialLabels')

module.exports = ({ edges, vertices, edgesReversed }) => {
	const graphReversed = {
		edges: edgesReversed,
		vertices
	}

	const leadersFirstLoop = {} // not really important in first loop
	const times = {}

	depthFirstSearchLoop({
		graph: graphReversed,
		leaders: leadersFirstLoop,
		times,
	})

	const {
		mappedVertices: verticesWithTimedLabels,
		mappedEdges: edgesWithTimedLabels,
	} = replaceNodeLabels({
		map: times,
		edges
	})

	const graph = {
		edges: edgesWithTimedLabels,
		vertices: verticesWithTimedLabels,
	}

	const leadersByTimedLabels = {}
	const timesSectionLoop = {} // not really important in second loop

	depthFirstSearchLoop({
		graph,
		leaders: leadersByTimedLabels,
		times: timesSectionLoop,
	})

	// idea, reduce leaders to the set with unique values
	const leaders = getMappedInitialLabels({
		leadersWithMappedLabels: leadersByTimedLabels,
		map: times,
	})

	return leaders
}