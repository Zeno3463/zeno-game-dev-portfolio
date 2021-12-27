import ParallaxTriangles from '../components/ParallaxTriangles';
import { ParallaxBackground } from '../components/ParallaxBackground';
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
				<h1 className={styles.title}>
          <span>Z</span>
          <span>E</span>
          <span>N</span>
          <span>O</span>
        </h1>
				<p className={styles.description}>Game Developer, Web Developer, Student</p>
        <Link href="/about">LEARN MORE</Link>
			</div>
      <ParallaxTriangles />
      <ParallaxBackground />
    </div>
  )
}
