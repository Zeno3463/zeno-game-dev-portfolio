import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<Link href="/"><h1>Home</h1></Link>
			<Link href="/about"><h1>About</h1></Link>
			<Link href="/portfolio"><h1>Portfolio</h1></Link>
			<Link href="/skills"><h1>Skills</h1></Link>
			<Link href="/technologies"><h1>Technologies</h1></Link>
		</nav>
	)
}
