import "./style.css";
import Phaser, { Scene } from "phaser";

let gameScene = new Phaser.Scene("Game");

//størrelse på skjermen/spillet
let config = {
	type: Phaser.AUTO,
	width: 1240,
	height: 680,

	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: gameScene
};

let game = new Phaser.Game(config);
