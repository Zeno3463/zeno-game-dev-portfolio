import React, { useState } from 'react'
import template from "../styles/Templates.module.css";
import style from "../styles/Portfolio.module.css";
import Link from "next/link";
import PortfolioProjectTemplate from '../components/PortfolioProjectTemplate';
import Particles from 'react-tsparticles';

export default function portfolio() {
	
	return (
		<div className={style.container}>
			<Particles
				className={template.particles}
				options={{
					fpsLimit: 60,
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: "grab"
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
					MY PORTFOLIO
				</h1>
				<p className={template.description}>
					A small gallery of recent projects chosen by me. 
					Interested to see some more? Visit my
					<a className={template.link} href="https://github.com/Zeno3463/" target="_blank" rel="noreferrer"> github</a> page.
				</p>
			</div>
			<h2>My Game Projects</h2>
			<div className={style.portfolioContainer}>
				<iframe src="https://itch.io/embed/1163343?linkback=true&amp;bg_color=094a50&amp;fg_color=e3e3e3&amp;link_color=fa5c5c&amp;border_color=307177" width="208" height="167"><a href="https://zenogamedev.itch.io/generation-142">Generation 142 by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/1128924?linkback=true&amp;bg_color=101010&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=3f3f3f" width="208" height="167"><a href="https://zenogamedev.itch.io/light">Light by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/1279879?linkback=true&amp;bg_color=6B322B&amp;fg_color=ffffff&amp;link_color=fa5c5c&amp;border_color=4d4240" width="208" height="167"><a href="https://zenogamedev.itch.io/the-ocean-was-once-clean">The Ocean Was Once Clean by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/963839?linkback=true&amp;bg_color=e3dfbf&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=b6b292" width="208" height="167"><a href="https://zenogamedev.itch.io/geojam">Neon by Zeno, tlucero</a></iframe>
				<iframe src="https://itch.io/embed/764764?linkback=true&amp;bg_color=000000&amp;fg_color=858585&amp;link_color=fa5c5c" width="208" height="167"><a href="https://zenogamedev.itch.io/asteroids-meets-fruit-ninja">Asteroids Meets Fruit Ninja by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/1016607?linkback=true&amp;bg_color=1d0818&amp;fg_color=b7b642&amp;link_color=fa5c5c&amp;border_color=4c3747" width="208" height="167"><a href="https://zenogamedev.itch.io/never-fear-the-dark">Never Fear The Dark by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/830500?linkback=true&amp;bg_color=000000&amp;fg_color=e0e0e0&amp;link_color=fa5c5c&amp;border_color=333333" width="208" height="167"><a href="https://zenogamedev.itch.io/polymers">Polymers by Zeno</a></iframe>
				<iframe src="https://itch.io/embed/1078150?linkback=true&amp;bg_color=4f377c&amp;fg_color=9b9cc6&amp;link_color=fa5c5c&amp;border_color=646098" width="208" height="167"><a href="https://zenogamedev.itch.io/gmtk-game-jam">Torchure by Zeno, Yzee, malek elsady</a></iframe>
				<iframe src="https://itch.io/embed/896404?linkback=true&amp;bg_color=fee7b8&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=cfb889" width="208" height="167"><a href="https://zenogamedev.itch.io/zomby">Zomby by Zeno</a></iframe>
			</div>
			<h2>My Blockchain/Web 3.0 Projects</h2>
			<div className={style.portfolioContainer}>
				<PortfolioProjectTemplate title="Web 3.0 Twitter Clone" description="A twitter clone built using next.js, moralis.io, and tailwindcss." url="https://web3-0-twitter-clone.vercel.app/" githubRepo="https://github.com/Zeno3463/web3.0-twitter-clone" />
				<PortfolioProjectTemplate title="Blockchain To Do List" description="A basic to do list website built using hardhat, next.js, and tailwindcss." githubRepo="https://github.com/Zeno3463/blockchain-to-do-list" />
			</div>
			<h2>My Web Projects</h2>
			<div className={style.portfolioContainer}>
				<PortfolioProjectTemplate title="Wordle With A Twist" description="wordle clone with a twist in game play" githubRepo="https://github.com/Zeno3463/wordle-with-a-twist" url="https://wordle-with-a-twist.netlify.app/" />
				<PortfolioProjectTemplate title="Zeno Blog" description="a personal blog website built using next.js, mongodb, and tailwindcss" githubRepo="https://github.com/Zeno3463/zeno-blog" url="https://zeno-blog.vercel.app/" />
				<PortfolioProjectTemplate title="Whiteboard.fi Clone" description="a multi-user whiteboard sharing platform built using next.js, express.js, and socket.io" githubRepo="https://github.com/Zeno3463/whiteboard.fi-clone" />
				<PortfolioProjectTemplate title="I Can Do It" description="a website/API that generates random motivational content" githubRepo="https://github.com/Zeno3463/i-can-do-it" url="https://i-can-do-it.vercel.app/" />
			</div>
			<h2>My Other Projects</h2>
			<div className={style.portfolioContainer}>
				<PortfolioProjectTemplate title="20 Second Rule Monitor" description="a chrome extension to prevent procrastination using the 20 second rule" githubRepo="https://github.com/Zeno3463/20-second-rule-monitor" />
				<PortfolioProjectTemplate title="Virtual Mouse" description="a tool that helps you control your mouse by tracking your hand movements. Built using python with opencv." githubRepo="https://github.com/Zeno3463/virtual-mouse" />
			</div>
			<h2>My Blogs</h2>
			<div className={style.portfolioContainer}>
				<PortfolioProjectTemplate title="How To Learn Blockchain As A Beginner" url="https://zeno-blog.vercel.app/7a3bd4f1-e43c-467c-91e4-97cb69cd5669" />
				<PortfolioProjectTemplate title="Why Web 3.0?" url="https://zeno-blog.vercel.app/109883f7-d1bb-450b-b7c4-7f4701ebb303" />
			</div>
			<div className={style.buttonContainer}>
				<div className={template.button}>
					<Link href="/end">Contact Me</Link>
				</div>
			</div>
		</div>
	)
}


