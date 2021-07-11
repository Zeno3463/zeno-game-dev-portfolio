import React, { useState } from 'react'
import template from "../styles/Templates.module.css";
import style from "../styles/Portfolio.module.css";
import Image from "next/image";
import test from "../public/ZenoDev.png"

export default function portfolio() {

	const games = [
		{
			url: "https://zenogamedev.itch.io/geojam",
			img: "https://img.itch.zone/aW1hZ2UvOTYzODM5LzU1MDkwNDEucG5n/250x600/p0c6Wd.png",
		},
		{
			img: "https://img.itch.zone/aW1nLzYxOTg5NjEucG5n/original/OPPXmU.png",
			url: "https://zenogamedev.itch.io/gmtk-game-jam",
		},
		{
			img: "https://img.itch.zone/aW1hZ2UvODk2NDA0LzUwNzExMzAucG5n/original/RESe3N.png",
			url: "https://zenogamedev.itch.io/zomby",
		},
		{
			img: "https://img.itch.zone/aW1hZ2UvODMwNTAwLzQ2NjE4MDgucG5n/250x600/WbwvpS.png",
			url: "https://zenogamedev.itch.io/polymers",
		},
		{
			img: "https://img.itch.zone/aW1nLzQ3NjkxODkucG5n/315x250%23c/4zDb%2Fw.png",
			url: "https://zenogamedev.itch.io/dont-play-this-game",
		},
		{
			img: "https://img.itch.zone/aW1nLzU4MTM5ODIucG5n/315x250%23c/%2F2Xe%2BT.png",
			url: "https://zenogamedev.itch.io/never-fear-the-dark",
		},
	];

	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					MY PORTFOLIO
				</h1>
				<p className={template.description}>
					A small gallery of recent projects chosen by me. 
					Interested to see some more? Visit my
					<a href="https://zenogamedev.itch.io/" target="_blank" rel="noreferrer"> itch.io</a> page.
				</p>
			</div>
			<div className={style.gameList}>
				{games.map((e, i) => 
					<a href={e.url} target="_blank" rel="noreferrer" key={e.url}>
						<Image src={test} alt="f" />
					</a>
				)}
			</div>
		</div>
	)
}


