module.exports = ({ leadersWithMappedLabels, map }) => {
	const leadersWithInitialLabels = {}

	const reversedMap = Object.entries(map)
		.reduce((result, [initialLabel, newLabel]) => {
			result[newLabel] = initialLabel

			return result
		}, {})

	Object.entries(leadersWithMappedLabels)
		.forEach(([nodeMappedLabel, leaderMappedLabel]) => {
			const initialLabel = reversedMap[nodeMappedLabel]
			const initialLeaderLabel = reversedMap[leaderMappedLabel]

			leadersWithInitialLabels[initialLabel] = initialLeaderLabel
		})

	return leadersWithInitialLabels
}