import React from 'react'
import template from "../styles/Templates.module.css";
import style from "../styles/About.module.css";
import Image from "next/image";
import profileIcon from "../public/ZenoDev.png";
import Link from "next/link";

export default function about() {
	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					ABOUT ME
				</h1>
				<p className={template.description} style={{width: "30%"}}>
					<br />
					Hi! You can call me Zeno. I am a hobbyist game developer,
					a hobbyist web developer, and a full time student.
					<br /><br />
					Interested in programming, especially back-end web development
					and game development. Love to work on quick, small projects with
					people.
					<br /><br />
					I am active on discord. You can find me there! <a className={template.link} href="https://discord.com/users/715474608152772648/" target="_blank" rel="noreferrer">
					Link to my discord account
					</a> or message me at Zeno#3463
				</p>
				<div className={template.button}>
					<Link href="/portfolio">GO TO MY PORTFOLIO</Link>
				</div>
			</div>
			<div className={style.img} >
				<Image src={profileIcon} />
			</div>
		</div>
	)
}
