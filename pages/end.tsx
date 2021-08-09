import React from 'react'
import template from "../styles/Templates.module.css";
import Link from "next/link";

export default function end() {
	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					THANK YOU SO MUCH!
				</h1>
				<p className={template.description}>
					<br />
					Thank you so much for your time!
					<br /><br />
					If you want to contact me, you can find me in discord! <a className={template.link} href="https://discord.com/users/715474608152772648/" target="_blank" rel="noreferrer">
					Link to my discord account
					</a> or message me at Zeno#3463
					<br /><br />
					Once again, thank you so much for visiting this website. Have a nice day!
				</p>
				<div className={template.button}>
					<Link href="/">Home</Link>
				</div>
			</div>
		</div>
	)
}
