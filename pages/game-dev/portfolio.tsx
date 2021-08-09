import React, { useState } from 'react'
import template from "../../styles/Templates.module.css";
import style from "../../styles/Portfolio.module.css";
import Link from "next/link";

export default function portfolio() {

	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					MY GAME DEV PORTFOLIO
				</h1>
				<p className={template.description}>
					A small gallery of recent projects chosen by me. 
					Interested to see some more? Visit my
					<a className={template.link} href="https://zenogamedev.itch.io/" target="_blank" rel="noreferrer"> itch.io</a> page.
				</p>
			</div>
			<div className={style.gameList}>
				<iframe src="https://itch.io/embed/1128924?linkback=true&amp;bg_color=101010&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=3f3f3f" width="208" height="167"><a href="https://zenogamedev.itch.io/light">Light by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/963839?linkback=true&amp;bg_color=e3dfbf&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=b6b292" width="208" height="167"><a href="https://zenogamedev.itch.io/geojam">Neon by Zeno, tlucero</a></iframe>
				<iframe src="https://itch.io/embed/764764?linkback=true&amp;bg_color=000000&amp;fg_color=858585&amp;link_color=fa5c5c" width="208" height="167"><a href="https://zenogamedev.itch.io/asteroids-meets-fruit-ninja">Asteroids Meets Fruit Ninja by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/1016607?linkback=true&amp;bg_color=1d0818&amp;fg_color=b7b642&amp;link_color=fa5c5c&amp;border_color=4c3747" width="208" height="167"><a href="https://zenogamedev.itch.io/never-fear-the-dark">Never Fear The Dark by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/830500?linkback=true&amp;bg_color=000000&amp;fg_color=e0e0e0&amp;link_color=fa5c5c&amp;border_color=333333" width="208" height="167"><a href="https://zenogamedev.itch.io/polymers">Polymers by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/1078150?linkback=true&amp;bg_color=4f377c&amp;fg_color=9b9cc6&amp;link_color=fa5c5c&amp;border_color=646098" width="208" height="167"><a href="https://zenogamedev.itch.io/gmtk-game-jam">Torchure by Zeno, Yzee, malek elsady</a></iframe>
				<iframe src="https://itch.io/embed/896404?linkback=true&amp;bg_color=fee7b8&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=cfb889" width="208" height="167"><a href="https://zenogamedev.itch.io/zomby">Zomby by Zeno</a></iframe>
			</div>
			<div className={style.buttonContainer}>
				<div className={template.button}>
					<Link href="/game-dev/skills">Next</Link>
				</div>
			</div>
		</div>
	)
}


