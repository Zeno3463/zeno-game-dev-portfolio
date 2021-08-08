import React, { useState } from 'react'
import template from "../../styles/Templates.module.css";
import style from "../../styles/Portfolio.module.css";
import Link from "next/link";

export default function portfolio() {
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
			</div>
		</div>
	)
}


