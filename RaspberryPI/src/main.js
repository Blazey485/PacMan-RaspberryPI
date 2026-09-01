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

const grid = this.add.grid (
    385, 258.5, // x og y senterkoordinatene av gridden på skjermen 
    770, 517, // w og h av hele gridden 
    32, 32, // cell w og h 
    0x000000, 1, // fill farge, fill transparency
    0xffffff, 0.5 // outline farge, outline transparency tror jeg 
);
