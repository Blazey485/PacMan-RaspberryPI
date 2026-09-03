
import Phaser, { Scene } from "phaser";
// import background from "./utils/background.png";
// import eggman from "./utils/EggmanSpriteSheet.png";
// import eggmanJSON from "./utils/EggmanSpriteSheet.json";

let gameScene = new Phaser.Scene("Game");

gameScene.preload = function () {
	// this.load.image("background", background);
	// this.load.atlas("eggmanNPC", eggman, eggmanJSON);
};

gameScene.create = function () {
	//- den value som er på 2. er for hvor stor selve map-pen er. og 64x64 er hvor store bokser det er inni, så alltid ha den 1216x640 og 64x64 i samma gange tabell.
	const grid = this.add.grid(
		608,
		320, // x og y senterkoordinatene av gridden på skjermen
		1216,
		640, // w og h av hele gridden
		38,
		32, // cell w og h
		0x000000,
		1, // fill farge, fill transparency
		0x0000ff,
		1 // outline farge, på de strekene
	);

	// this.add
	// 	.sprite(0, 0, "background")
	// 	.setOrigin(-0.3, -0.2)

	// 	.setScale(0.2);

	let player = this.add.sprite(
		608,
		320,
		"eggmanNPC",
		"eggman"
	);
};

//størrelse på skjermen/spillet og bascially alt config
let config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	backgroundColor: "#2d2d2d",

	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	scene: gameScene
};

// kjøerer koden:
let game = new Phaser.Game(config);
