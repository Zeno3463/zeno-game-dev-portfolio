import React, { useState } from 'react'
import template from "../../styles/Templates.module.css";
import style from "../../styles/Portfolio.module.css";
import Image from "next/image";
import neonIcon from "../../public/neon_icon.png";
import NFTDIcon from "../../public/never_fear_the_dark_icon.png";
import polymersIcon from "../../public/polymers_icon.png";
import torchureIcon from "../../public/torchure_icon.png";
import zombyIcon from "../../public/zomby_icon.png";
import DPTGIcon from "../../public/dont_play_this_game_icon.png";
import Link from "next/link";

export default function portfolio() {

	const websites = [
		{
			img: neonIcon,
			url: "https://zenogamedev.itch.io/geojam",
		},
		{
			img: torchureIcon,
			url: "https://zenogamedev.itch.io/gmtk-game-jam",
		},
		{
			img: zombyIcon,
			url: "https://zenogamedev.itch.io/zomby",
		},
		{
			img: polymersIcon,
			url: "https://zenogamedev.itch.io/polymers",
		},
		{
			img: DPTGIcon,
			url: "https://zenogamedev.itch.io/dont-play-this-game",
		},
		{
			img: NFTDIcon,
			url: "https://zenogamedev.itch.io/never-fear-the-dark",
		},
	];

	return (
		<div>
			<div className={template.header}>
				<Link href="/skills">skills</Link>
				<h1 className={template.title}>
					MY PORTFOLIO
				</h1>
				<p className={template.description}>
					A small gallery of recent projects chosen by me. 
					Interested to see some more? Visit my
					<a className={template.link} href="https://github.com/Zeno3463/" target="_blank" rel="noreferrer"> github</a> page.
				</p>
			</div>
			<div className={style.gameList}>
				{websites.map((e, i) => 
					<a href={e.url} target="_blank" rel="noreferrer" key={e.url} style={{animationDuration: `${i * 0.5+1}s`}}>
						<Image src={e.img} alt="game img" className={style.img} />
					</a>
				)}
			</div>
		</div>
	)
}


