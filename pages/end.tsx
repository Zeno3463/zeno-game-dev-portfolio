import React from 'react'
import template from "../styles/Templates.module.css";
import Link from "next/link";
import Particles from 'react-tsparticles';

export default function end() {
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
								mode: "repulse",
							}
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
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
					THANK YOU SO MUCH!
				</h1>
				<p className={template.description}>
					<br />
					Thank you so much for your time!
					<br /><br />
					If you want to contact me, you can find me in <a className={template.link} href="https://discord.com/users/715474608152772648/" target="_blank" rel="noreferrer">
					discord
					</a> or <a className={template.link} href="https://twitter.com/zeno3463" target="_blank" rel="noreferrer">
					twitter
					</a>!
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
