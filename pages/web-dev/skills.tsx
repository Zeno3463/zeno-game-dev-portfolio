import React from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import template from "../../styles/Templates.module.css";
import style from "../../styles/Skills.module.css"
import Link from 'next/link';

export default function skills() {
	const data = {
		data: {
			socketProgramming: 0.9,
			sqlDatabase: 0.5,
			noSqlDatabase: 0.9,
			serverlessProgramming: 0.9,
			UXorUI: 0.7,
			Styling: 0.7,
		},
		meta: { color: '#267373' }
	}

	const captions = {
		// columns
		socketProgramming: 'socket programming',
		sqlDatabase: 'sql database',
		noSqlDatabase: 'no sql database',
		serverlessProgramming: 'serverless programming',
		UXorUI: 'UX/UI',
		Styling: 'Styling'
	};

	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					MY SKILLS
				</h1>
				<p className={template.description} style={{width: "20rem"}}>
					I am best at back end web development. I am ok at UX/UI design
					and front end web development.
				</p>
				<div className={style.buttonContainer}>
					<div className={template.button}>
						<Link href="/web-dev/technologies">Next</Link>
					</div>
				</div>
			</div>
			<div className={style.chart}>
				<RadarChart 
				captions={captions} 
				data={[data]} 
				size={400} 
				options={{
					scales: 5,
					shapeProps: () => ({ className: style.shape }),
					captionProps: () => ({
						className: style.caption,
						textAnchor: 'middle',
						fontSize: 10,
						fontFamily: 'sans-serif'
					}),
					axisProps: () => ({ className: style.axis }),
					scaleProps: () => ({ className: style.scale, fill: 'none' }),
				}}
				/>
			</div>
		</div>
	)
}

