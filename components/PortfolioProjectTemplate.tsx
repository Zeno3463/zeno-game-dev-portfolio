import Image from 'next/image'
import React from 'react'
import style from '../styles/PortfolioProjectTemplate.module.css'

const PortfolioProjectTemplate = ({title, description, url, githubRepo}: any) => {
	return (
		<div className={style.container}>
			<h3>{title}</h3>
			<p>{description}</p>
			<div>
				{url !== undefined ? <a href={url} target="_blank" rel='noreferrer'>Visit</a> : null}
				{githubRepo !== undefined ? <a href={githubRepo} target="_blank" rel='noreferrer'>Github</a> : null}
			</div>
		</div>
	)
}

export default PortfolioProjectTemplate
