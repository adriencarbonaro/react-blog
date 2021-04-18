import { Component }         from 'react';

export default class ComponentScrollTop extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
}