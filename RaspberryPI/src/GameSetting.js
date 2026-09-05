import Phaser, { Scene } from "phaser";
import eggman from "./utils/EggmanSpriteSheet.png";
import eggmanJSON from "./utils/EggmanSpriteSheet.json";
import sonicJSON from "./utils/Sonic.json";
import sonicPNG from "./utils/Sonic.png";

import Eggman from "./Eggman.js";
import Sonic from "./Sonic.js";


export default class GameSetting extends Phaser.Scene {
	constructor() {
		super("Game");
		this.player = null;
		this.eggman = null;
	}

	preload() {
		// this.load.image("background", background);
		this.load.atlas("eggmanNPC", eggman, eggmanJSON);
		this.load.atlas("sonicPlayer", sonicPNG, sonicJSON);
	}

	create() {
		//- den value som er på 2. er for hvor stor selve map-pen er. og 40x40 er hvor store bokser det er inni, så alltid ha den 1216x640 og 64x64 i samma gange tabell.
		const grid = this.add.grid(
			960,
			540, // x og y senterkoordinatene av gridden på skjermen
			1900,
			1050, // w og h av hele gridden
			50,
			50, // cell w og h
			0xff00000,
			1, // fill farge, fill transparency
			0x000000,
			1 // outline farge, på de strekene
		);

		//- background add when made
		// this.add
		// 	.sprite(0, 0, "background")
		// 	.setOrigin(-0.3, -0.2)

		// 	.setScale(0.2);

		//- EGGMAN CONFIGS
		this.eggman = new Eggman(this, 970, 692);

		//- SONIC CONFIGS
		this.player = new Sonic(this, 985, 540);
	}

	update() {
		if (this.player){
			this.player.update()
		}

	}
}

