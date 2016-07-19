/*eslint-disable*/

function shallowEqual(a, b) {
	if (a!==b) {
		for (let i in a) if (a[i]!==b[i]) return false;
		for (let i in b) if (!(i in a)) return false;
	}
	return true;
}

export function shouldComponentUpdate(props, state) {
	return !shallowEqual(props, this.props) || !shallowEqual(state, this.state);
}

export default { shouldComponentUpdate };
