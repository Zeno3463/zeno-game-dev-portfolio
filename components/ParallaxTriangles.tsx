import React, { Component } from 'react'
import styles from "../styles/Home.module.css";

export default class ParallaxTriangles extends Component {
	state = {left: 0, top: 0, depth: Math.random()}
	componentDidMount() {
		document.addEventListener("mousemove", (e) => {
			this.setState({left: e.pageX, top: e.pageY});
		})
	}
	render() {
		return (
			<div className={styles.triangles}>
				<div className={styles.triangle1} style={{
					position: "absolute",
					left: 700 + this.state.left * 0.02,
					top: 200 + this.state.top * 0.02,
				}}></div>
				<div className={styles.triangle2} style={{
					position: "absolute",
					left: 850 + this.state.left * 0.03,
					top: 200 + this.state.top * 0.03,
				}}></div>
				<div className={styles.triangle3} style={{
					position: "absolute",
					left: 800 + this.state.left * 0.04,
					top: 200 + this.state.top * 0.04,
				}}></div>
			</div>
		)
	}
}
