import "./style.css";
import Phaser, { Scene } from "phaser";
import background from "./utils/background.png";

let gameScene = new Phaser.Scene("Game");

gameScene.preload = function () {
	this.load.image("background", background);
};
gameScene.create = function () {
	this.add
		.sprite(0, 0, "background")
		.setOrigin(-0.3, -0.2)

		.setScale(0.2);
};

//størrelse på skjermen/spillet
let config = {
	type: Phaser.AUTO,
	width: 1240,
	height: 680,
	backgroundColor: "2d2d2d",

	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: gameScene
};

let game = new Phaser.Game(config);
