import React, { useState } from 'react'
import template from "../../styles/Templates.module.css";
import style from "../../styles/Portfolio.module.css";
import Link from "next/link";

export default function portfolio() {
	const websites = [
		{
			name: "Stream QnA",
			url: "https://live-qna-651a7.web.app/",
		},
		{
			name: "Instagram clone",
			url: "https://instagram-clone-df56e.web.app/",
		},
		{
			name: "Noted app",
			url: "https://noted-app-0.web.app/",
		},
		{
			name: "Whiteboard.fi clone",
			url: "https://github.com/Zeno3463/whiteboard.fi-clone",
		},
		{
			name: "Url Shortener",
			url: "https://github.com/Zeno3463/url-shorterner",
		},
	]
	
	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					MY WEB DEV PORTFOLIO
				</h1>
				<p className={template.description}>
					A small gallery of recent projects chosen by me. 
					Interested to see some more? Visit my
					<a className={template.link} href="https://github.com/Zeno3463/" target="_blank" rel="noreferrer"> github</a> page.
				</p>
			</div>
			<div className={style.gameList}>
				{websites.map((e, i) => <a href={e.url} target="_blank" rel="noreferrer" key={e.url}><div
				style={{animationDuration: `${i - 1 * 0.5}s`}}>
					<h1>{e.name}</h1>
				</div></a>) }
			</div>
			<div className={style.buttonContainer}>
				<div className={template.button}>
					<Link href="/web-dev/skills">Next</Link>
				</div>
			</div>
		</div>
	)
}


