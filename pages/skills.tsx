import React from 'react'
import template from "../styles/Templates.module.css";
import style from "../styles/Skills.module.css"
import Link from 'next/link';
import Particles from 'react-tsparticles';

export default function skills() {
	const skills = [
		{
			name: "Blockchain/Web 3.0 Developer",
			description: "I am fascinated with the concept of smart contracts and decentralized applications.",
			tools: [
				"Solidity",
				"Hardhat",
				"Ethereum",
				"Metamask",
				"Moralis",
			]
		},
		{
			name: "Fullstack Web Developer",
			description: "I am a fullstack web developer with a passion for creating responsive, fast websites.",
			tools: [
				"React/Next.js",
				"Express",
				"Flask",
				"MongoDB",
				"Firebase",
				"SCSS",
				"TailwindCSS",
			]
		},
		{
			name: "Designer",
			description: "What do you think about this portfolio website? I designed it ^_^.",
			tools: [
				"Figma",
			]
		},
		{
			name: "Game Developer",
			description: "Game development is just a cool skill to have.",
			tools: [
				"Godot",
			]
		},
	]

	return (
		<div>
			<Particles
				className={template.particles}
				options={{
					fpsLimit: 60,
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: "bubble",
							}
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.5,
								size: 10,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.2,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 5,
						},
					},
					detectRetina: true,
				}}
			/>
			<div className={template.header}>
				<h1 className={template.title}>
					MY SKILLS
				</h1>
				<div className={style.grid}>
					{skills.map((skill, index) => 
					<div style={{animationDuration: `${index - 1 * 0.5}s`}}>
						<h2>{skill.name}</h2>
						<p>{skill.description}</p>
						<h3>Tools and Technologies</h3>
						<ul>
							{skill.tools.map((tool, index) => <li>
								{tool}
							</li>)}
						</ul>
					</div>)}
				</div>
				<div className={style.buttonContainer}>
					<div className={template.button}>
						<Link href="/portfolio">Next</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

