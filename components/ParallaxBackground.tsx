import ParallaxLayer from '../components/ParallaxLayer';
import styles from "../styles/Home.module.css";

export const ParallaxBackground = () => {
	return (
		<div className={styles.parallaxLayer}>
			<ParallaxLayer depth={0.01} offSetX={-10} offSetY={-90} size={2} />
			<ParallaxLayer depth={0.02} offSetX={-20} offSetY={-50} size={4} />
			<ParallaxLayer depth={0.03} offSetX={-90} offSetY={-30} size={3} />
			<ParallaxLayer depth={0.02} offSetX={-70} offSetY={-60} size={2} />
			<ParallaxLayer depth={0.01} offSetX={-90} offSetY={-90} size={1} />
			<ParallaxLayer depth={0.04} offSetX={-10} offSetY={-82} size={5} />
			<ParallaxLayer depth={0.01} offSetX={-11} offSetY={-50} size={6} />
			<ParallaxLayer depth={0.02} offSetX={-12} offSetY={-85} size={3} />
			<ParallaxLayer depth={0.01} offSetX={-12} offSetY={-75} size={4} />
			<ParallaxLayer depth={0.05} offSetX={-33} offSetY={-65} size={7} />
			<ParallaxLayer depth={0.04} offSetX={-72} offSetY={-55} size={5} />
			<ParallaxLayer depth={0.03} offSetX={-10} offSetY={-55} size={9} />
			<ParallaxLayer depth={0.02} offSetX={-52} offSetY={-82} size={4} />
			<ParallaxLayer depth={0.03} offSetX={-42} offSetY={-52} size={3} />
			<ParallaxLayer depth={0.02} offSetX={-2} offSetY={-82} size={8} />
			<ParallaxLayer depth={0.05} offSetX={-2} offSetY={-60} size={1} />
			<ParallaxLayer depth={0.01} offSetX={-5} offSetY={-5} size={2} />
			<ParallaxLayer depth={0.05} offSetX={-15} offSetY={-80} size={5} />
			<ParallaxLayer depth={0.03} offSetX={-30} offSetY={-20} size={7} />
			<ParallaxLayer depth={0.02} offSetX={-10} offSetY={-40} size={5} />
			<ParallaxLayer depth={0.05} offSetX={-20} offSetY={-40} size={4} />
			<ParallaxLayer depth={0.02} offSetX={-50} offSetY={-50} size={5} />
			<ParallaxLayer depth={0.03} offSetX={-40} offSetY={-5} size={6} />
			<ParallaxLayer depth={0.05} offSetX={-80} offSetY={-6} size={5} />
			<ParallaxLayer depth={0.02} offSetX={-65} offSetY={-30} size={5} />
		</div>
	)
}
