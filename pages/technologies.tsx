import React, { Component } from 'react'
import template from "../styles/Templates.module.css";
import style from "../styles/Technologies.module.css";
import Image from "next/image";
import godotIcon from "../public/godot_icon.png";
import lmmsIcon from "../public/LMMS_logo.png";
import githubIcon from "../public/github_icon.png";

export default function technologies() {

	const technologies = [
		{
			name: "GODOT",
			url: "https://godotengine.org/",
			familiarity: 90,
			performance: 95,
		},
		{
			name: "BOSCA CEOIL",
			url: "https://boscaceoil.net/",
			familiarity: 90,
			performance: 50,
		},
		{
			name: "LMMS",
			url: "https://lmms.io/",
			familiarity: 80,
			performance: 60,
		},
		{
			name: "PISKEL",
			url: "https://www.piskelapp.com/",
			familiarity: 90,
			performance: 80,
		},
		{
			name: "GITHUB",
			url: "https://github.com/",
			familiarity: 70,
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

