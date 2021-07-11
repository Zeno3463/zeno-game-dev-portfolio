import ParallaxLayer from '../components/ParallaxLayer';
import styles from "../styles/Home.module.css";

export const ParallaxBackground = () => {
	return (
		<div className={styles.parallaxLayer}>
			<ParallaxLayer depth={0.01} offSetX={-100} offSetY={-100} size={2} />
			<ParallaxLayer depth={0.02} offSetX={-200} offSetY={-500} size={4} />
			<ParallaxLayer depth={0.03} offSetX={-900} offSetY={-300} size={3} />
			<ParallaxLayer depth={0.02} offSetX={-700} offSetY={-200} size={2} />
			<ParallaxLayer depth={0.01} offSetX={-900} offSetY={-90} size={1} />
			<ParallaxLayer depth={0.04} offSetX={-1000} offSetY={-120} size={5} />
			<ParallaxLayer depth={0.01} offSetX={-1100} offSetY={-500} size={6} />
			<ParallaxLayer depth={0.02} offSetX={-1200} offSetY={-550} size={3} />
			<ParallaxLayer depth={0.01} offSetX={-1200} offSetY={-350} size={4} />
			<ParallaxLayer depth={0.05} offSetX={-330} offSetY={-450} size={7} />
			<ParallaxLayer depth={0.04} offSetX={-720} offSetY={-550} size={5} />
			<ParallaxLayer depth={0.03} offSetX={-1020} offSetY={-550} size={9} />
			<ParallaxLayer depth={0.02} offSetX={-520} offSetY={-120} size={4} />
			<ParallaxLayer depth={0.03} offSetX={-420} offSetY={-520} size={3} />
			<ParallaxLayer depth={0.02} offSetX={-20} offSetY={-420} size={8} />
			<ParallaxLayer depth={0.05} offSetX={-20} offSetY={-20} size={1} />
			<ParallaxLayer depth={0.01} offSetX={-50} offSetY={-50} size={2} />
			<ParallaxLayer depth={0.05} offSetX={-150} offSetY={-100} size={5} />
			<ParallaxLayer depth={0.03} offSetX={-300} offSetY={-200} size={7} />
			<ParallaxLayer depth={0.02} offSetX={-100} offSetY={-400} size={5} />
			<ParallaxLayer depth={0.05} offSetX={-200} offSetY={-400} size={4} />
			<ParallaxLayer depth={0.02} offSetX={-500} offSetY={-500} size={5} />
			<ParallaxLayer depth={0.03} offSetX={-400} offSetY={-50} size={6} />
			<ParallaxLayer depth={0.05} offSetX={-800} offSetY={-60} size={5} />
			<ParallaxLayer depth={0.02} offSetX={-650} offSetY={-300} size={5} />
		</div>
	)
}
