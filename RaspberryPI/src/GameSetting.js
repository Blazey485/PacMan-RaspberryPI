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

		//hvor vi initiater sprites
		this.load.atlas("eggmanNPC", eggman, eggmanJSON);
		this.load.atlas("sonicPlayer", sonicPNG, sonicJSON);
	}

	create() {
		const grid = this.add.grid(
			960,
			540, // x og y senterkoordinatene av gridden på skjermen
			1900,
			1050, // w og h av hele gridden
			50,
			50, // cell w og h
			0x000000,
			1, // fill farge, fill transparency
			0xffffff,
			1 // outline farge, på de strekene
		);

		//- background add when made
		// this.add
		// 	.sprite(0, 0, "background")
		// 	.setOrigin(-0.3, -0.2)

		// 	.setScale(0.2);

		//- SONIC CONFIGS
		this.player = new Sonic(this, 985, 540);
		console.log(
			this.textures.get("sonicPlayer").getFrameNames()
		);

		this.anims.create({
			key: "sonic_Player",
			frames: this.anims.generateFrameNames("sonicPlayer", {
				prefix: "frame",
				start: 1,
				end: 7,
				zeroPad: 0
			}),
			frameRate: 10,
			repeat: -1
		});

		//- EGGMAN CONFIGS
		this.eggman = new Eggman(this, 1900, 692, this.player);

		this.anims.create({
			key: "eggman_anime",
			frames: this.anims.generateFrameNames("eggmanNPC", {
				prefix: "frame1",
				start: 1,
				end: 6,
				zeroPad: 2
			}),
			frameRate: 10,
			repeat: -1
		});
	}

	update(time, delta) {
		if (this.player) {
			this.player.update(time, delta);
		}

		if (this.eggman) {
			this.eggman.update(time, delta);
		}
	}
}

