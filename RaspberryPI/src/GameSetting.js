import Phaser, { Scene } from "phaser";

import eggmanJSON from "./utils/Egg.json";
import eggman from "./utils/Egg.png";


import sonicJSON from "./utils/Sonic/Sonic.json";
import sonicPNG from "./utils/Sonic/Sonic.png";
import SonicUpJSON from "./utils/Sonic/SonicUp.json";
import SonicUp from "./utils/Sonic/SonicUp.png";
import SonicDownJSON from "./utils/Sonic/SonicDown.json";
import SonicDown from "./utils/Sonic/SonicDown.png";

import ringsJSON from "./utils/Ring.json";
import rings from "./utils/Ring.png";

import bg from "./utils/Bakgrunn2.png";
import Map from "./utils/Map.json";

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
		this.load.image("background", bg);
		this.load.tilemapTiledJSON("TiledMap", Map);
		//hvor vi initiater sprites
		this.load.atlas("eggmanNPC", eggman, eggmanJSON);
		this.load.atlas("sonicPlayer", sonicPNG, sonicJSON);
		this.load.atlas("sonicPlayerUp", SonicUp, SonicUpJSON);
		this.load.atlas(
			"sonicPlayerDown",
			SonicDown,
			SonicDownJSON
		);
		this.load.atlas("rings", rings, ringsJSON);
	}

	create() {
		loadAnimations(this);

		const map = this.make.tilemap({ key: "TiledMap" });
		const tileset = map.addTilesetImage(
			"Bakgrunn2",
			"background"
		);
		const groundLayer = map.createLayer(
			"Tile Layer 1",
			tileset,
			0,
			0
		);

		//- rings config
		this.rings = new Rings(this, 385, 290);
		this.rings.setScale(0.8);
		//- SONIC CONFIGS
		this.player = new Sonic(this, 985, 540);

		//- EGGMAN CONFIGS
		this.eggman = new Eggman(this, 1700, 692, this.player);

		// Overlap detection
		this.physics.add.overlap(
			this.player,
			this.rings,
			this.targetHit,
			null,
			this
		);

		this.textScore = this.add.text(120, 23, "Score: 0", {
			font: "25px Arial",
			fill: "#0e0c0c",
			backgroundColor: "#5abd46",
			fixedWidth: "120"
		});

		for (let i = 0; i < 15; i++) {
			let randomX = Phaser.Math.Between(50, 1900);
			let randomY = Phaser.Math.Between(50, 1050);

			let singleRing = new Rings(this, randomX, randomY);
			singleRing.setScale(0.8);
		}

		this.fpsShow = this.add.text(1800, 23, "FPS", {
			font: "25px Arial",
			fill: "#ffffff",
			backgroundColor: "#5abd46"
		});
		this.fpsShow.setText(
			Math.round(this.game.loop.actualFps)
		);

		groundLayer.setCollision([318]);
		this.physics.add.collider(this.player, groundLayer);
		this.physics.add.collider(this.eggman, groundLayer);
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

		if (this.fpsShow) {
			this.fpsShow.setText(
				`FPS: ${Math.round(this.game.loop.actualFps)}`
			);
		}
		
	}

	targetHit(player, ring) {
		ring.disableBody(true, true); 
		// this.points += 10;
		this.points++;
		this.textScore.setText(`Score: ${this.points}`)

	}

	
}
