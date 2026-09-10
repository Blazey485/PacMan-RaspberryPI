import Phaser, { Scene } from "phaser";
import eggman from "./utils/EggmanSpriteSheet.png";
import eggmanJSON from "./utils/EggmanSpriteSheet.json";
import sonicJSON from "./utils/Sonic.json";
import sonicPNG from "./utils/Sonic.png";
import ringsJSON from "./utils/Ring.json";
import rings from "./utils/Ring.png";

import Eggman from "./Eggman.js";
import Sonic from "./Sonic.js";
import Rings from "./rings.js";
import { loadAnimations } from "./anime.js";

export default class GameSetting extends Phaser.Scene {
	constructor() {
		super("Game");
		this.player = null;
		this.eggman = null;
		this.points = 0;
		this.textScore;
	}

	preload() {
		// this.load.image("background", background);

		//hvor vi initiater sprites
		this.load.atlas("eggmanNPC", eggman, eggmanJSON);
		this.load.atlas("sonicPlayer", sonicPNG, sonicJSON);
		this.load.atlas("rings", rings, ringsJSON);
	}

	create() {
		loadAnimations(this);

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

		//- rings config
		this.rings = new Rings(this, 385, 290);
		this.rings.setScale(0.6);
		//- SONIC CONFIGS
		this.player = new Sonic(this, 985, 540);
		console.log(
			this.textures.get("sonicPlayer").getFrameNames()
		);

		//- EGGMAN CONFIGS
		this.eggman = new Eggman(this, 1900, 692, this.player);

		// Overlap detection
		this.physics.add.overlap(this.player,this.rings,this.targetHit, null, this)

		this.textScore = this.add.text(120, 10, "Score:0", {
			font: "25px Arial",
			fill: "#ffff"
		});
	}

	update(time, delta) {
		if (this.player) {
			this.player.update(time, delta);
		}

		if (this.eggman) {
			this.eggman.update(time, delta);
		}

		if (this.rings) {
			this.rings.update(time, delta);
		}
	}

	targetHit(player, ring) {
		ring.disableBody(true, true); 
		this.points++;
		this.textScore.setText(`Score: ${this.points}`)

	}
}
