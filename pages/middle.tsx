import React from 'react'
import template from "../styles/Templates.module.css";
import style from "../styles/Middle.module.css";
import Link from 'next/link';

export default function middle() {
	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>How Should We Continue?</h1>
				<div className={style.wrapper}>
					<div className={style.containerLeft}>
						<h2>
							Continue With My <br /><br />
							<div className={template.button}>
								<Link href="/web-dev/portfolio">Web Dev</Link>
							</div>
							<br />
							Journey
						</h2>
					</div>
					<div className={style.line}></div>
					<div className={style.containerRight}>
						<h2>
							Continue With My <br /><br />
							<div className={template.button}>
								<Link href="/game-dev/portfolio">Game Dev</Link>
							</div>
							<br />
							Journey
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
