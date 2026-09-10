import Phaser, { Scene } from "phaser";
import gameSetting from "./GameSetting.js";
// import MergedInput from "phaser3-merged-input";
//størrelse på skjermen/spillet og bascially alt config
let config = {
	type: Phaser.AUTO,
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

	// plugin: {
	// 	scene: [
	// 		{
	// 			key: "mergedInput",
	// 			plugin: MergedInput,
	// 			mapping: "mergedInput"
	// 		}
	// 	]
	// },

	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
			debug: false
		}
	},
	scene: [gameSetting]
};

// kjøerer koden:
let game = new Phaser.Game(config);
