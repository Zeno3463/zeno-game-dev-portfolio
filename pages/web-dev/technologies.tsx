import React, { Component } from 'react'
import template from "../../styles/Templates.module.css";
import style from "../../styles/Technologies.module.css";

export default function technologies() {
	const technologies = [
		{
			name: "FLASK",
			url: "https://flask.palletsprojects.com/en/2.0.x/",
			familiarity: 90,
			performance: 90,
		},
		{
			name: "EXPRESS.JS",
			url: "https://expressjs.com/",
			familiarity: 90,
			performance: 98,
		},
		{
			name: "MONGODB",
			url: "https://www.mongodb.com/",
			familiarity: 80,
			performance: 90,
		},
		{
			name: "SQLITE3 (NPM)",
			url: "https://www.npmjs.com/package/sqlite3",
			familiarity: 80,
			performance: 80,
		},
		{
			name: "NODE.JS",
			url: "https://nodejs.org/en/",
			familiarity: 70,
			performance: 90,
		},
		{
			name: "REACT/NEXT.JS",
			url: "https://reactjs.org/",
			familiarity: 90,
			performance: 98,
		},
		{
			name: "SOCKET.IO",
			url: "https://socket.io/",
			familiarity: 90,
			performance: 95,
		},
		{
			name: "FIREBASE",
			url: "https://firebase.google.com/",
			familiarity: 80,
			performance: 90,
		},
		{
			name: "FIGMA",
			url: "https://www.figma.com/",
			familiarity: 60,
			performance: 90,
		},
	]

	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					TECHNOLOGIES I USE
				</h1>
				<p className={template.description}>
					I am a hobbyist game developer. 
					Here’s a list of technologies I am familiar with.
				</p>
			</div>
			<div className={style.list}>
				{technologies.map((e, i) => <a href={e.url} target="_blank" rel="noreferrer" key={e.url}><div
				className={style.element} style={{animationDuration: `${i - 1 * 0.5}s`}}>
					<h1>{e.name}</h1>
					<p>familiarity</p>
					<div>
						<span style={{width: `${e.familiarity}%`}}></span>
					</div>
					<p>performance</p>
					<div>
						<span style={{width: `${e.performance}%`}}></span>
					</div>
				</div></a>) }
			</div>
		</div>
	)
}

