import Phaser, { Scene } from "phaser";
import gameSetting from "./GameSetting.js";

//størrelse på skjermen/spillet og bascially alt config
let config = {
	type: Phaser.WEBGL,
	width: 1920,
	height: 1080,
	parent: "game",
	backgroundColor: "#2d2d2d",
	input: {
		gamepad: true
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	// fps: {
	// 	limit: 30
	// },
	type: Phaser.CANVAS,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [gameSetting]
};


// kjøerer koden:
let game = new Phaser.Game(config);
