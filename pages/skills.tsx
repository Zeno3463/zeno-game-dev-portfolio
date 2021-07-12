import React from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import template from "../styles/Templates.module.css";
import style from "../styles/Skills.module.css"

export default function skills() {
	const data = {
		data: {
			programming: 0.98,
			art2d: 0.8,
			art3d: 0.1,
			music: 0.6,
			design2d: 0.9,
			design3d: 0.1,	
		},
		meta: { color: '#267373' }
	}

	const captions = {
		// columns
		design2d: '2D Game Design',
		programming: 'Programming',
		music: 'Music',
		art2d: '2D Art',
		art3d: '3D Art',
		design3d: '3D Game Design'
	};

	return (
		<div>
			<div className={template.header}>
				<h1 className={template.title}>
					MY SKILLS
				</h1>
				<p className={template.description} style={{width: "20rem"}}>
					I am best at programming and 2d game design. 
					I have some experience with pixel art. 
					I can do sfx but I am not very confident with making 
					soundtracks. I have little to no experience with 3d 
					art and 3d game design.
				</p>
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

