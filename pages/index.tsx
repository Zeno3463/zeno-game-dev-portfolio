import ParallaxTriangles from '../components/ParallaxTriangles';
import { ParallaxBackground } from '../components/ParallaxBackground';
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
				<h1 className={styles.title}>
          <span>Z</span>
          <span>E</span>
          <span>N</span>
          <span>O</span>
          <span>G</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
          <span>D</span>
          <span>E</span>
          <span>V</span>
        </h1>
				<p className={styles.description}>Game Developer, Programmer, Student</p>
			</div>
      <ParallaxTriangles />
      <ParallaxBackground />
    </div>  
  )
}
