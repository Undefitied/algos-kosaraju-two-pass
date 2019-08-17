module.exports = leaders => {
	const sccCounters = {}

	Object.values(leaders).forEach(leaderLabel => {
		sccCounters[leaderLabel] = sccCounters[leaderLabel] ? sccCounters[leaderLabel] : 0
		sccCounters[leaderLabel]++
	})

	const largest = Object.values(sccCounters)
		.sort((a, b) => b - a)

	return [0, 0, 0, 0, 0].map((zero, i) => {
		if (largest[i]) {
			return largest[i]
		}

		return zero
	})
}