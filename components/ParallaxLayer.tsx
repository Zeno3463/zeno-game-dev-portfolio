import React, { Component } from 'react'
import styles from "../styles/Home.module.css";

export default class ParallaxLayer extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	state = { left: 0, top: 0 };
	componentDidMount() {
		document.addEventListener("mousemove", (e) => {
			this.setState({left: e.pageX, top: e.pageY});
		})
	}
	render() {
		return (
			<div className={styles.stars} style={{
				width: this.props.size,
				height: this.props.size,
				left: `${this.state.left * this.props.depth - this.props.offSetX}%`,
				top: `${this.state.top * this.props.depth - this.props.offSetY}%`,
			}}
			></div>
		)
	}
}

