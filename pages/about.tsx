import React from 'react'
import template from "../styles/Templates.module.css";

export default function about() {
	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					ABOUT ME
				</h1>
				<p className={template.description} style={{width: "20rem"}}>
					<br />
					Hi! You can call me Zeno. I am a hobbyist game developer,
					a hobbyist web developer, and a full time student.
					<br /><br />
					Confident, analytical, ambitious, love to pursue knowledge, 
					logically minded.
					<br /><br />
					Interested in programming, especially back-end web development
					and game development. Love to work on quick, small projects with
					people.
					<br /><br />
					I am active on discord. You can find me there! <a href="https://discord.com/users/715474608152772648/" target="_blank" rel="noreferrer">
					Link to my discord account
					</a> or message me at Zeno#3463
				</p>
			</div>
		</div>
	)
}
