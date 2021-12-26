import Image from 'next/image'
import React from 'react'
import style from '../styles/PortfolioProjectTemplate.module.css'

const PortfolioProjectTemplate = ({title, description, url, githubRepo}: any) => {
	return (
		<div className={style.container}>
			<h3>{title}</h3>
			<p>{description}</p>
			<div>
				{url !== undefined ? <a href={url} target="_blank">Visit</a> : null}
				<a href={githubRepo} target="_blank">Github</a>
			</div>
		</div>
	)
}

export default PortfolioProjectTemplate
