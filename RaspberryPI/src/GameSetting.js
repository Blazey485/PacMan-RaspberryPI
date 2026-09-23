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
		this.rings = new Rings(this);
		this.rings.setScale(0);
		//- SONIC CONFIGS
		this.player = new Sonic(this, 985, 540);

		//- EGGMAN CONFIGS
		this.eggman = new Eggman(this, 1700, 692, this.player);

		this.ringsGroup = this.physics.add.group();

		const spawnRing = (x, y) => {
			const ring = new Rings(this, x, y);
			ring.setScale(0.6);
			this.ringsGroup.add(ring);
			return ring;
		};

		//original ring
		// spawnRing(1000, 100000);



	groundLayer.forEachTile((tile) => {
		// Check if the tile exists and is NOT tile 318
		if (tile && tile.index !== 318) {
			const centerX = tile.pixelX + tile.width / 2;
			const centerY = tile.pixelY + tile.height / 2;

			spawnRing(centerX, centerY);
		}
	});
		// Overlap detection
		this.physics.add.overlap(
			this.player,
			this.ringsGroup,
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
		this.physics.add.collider(this.rings, groundLayer);

		this.Rings = this.physics.add.staticGroup();
		this.physics.add.overlap(
			this.player,
			this.Rings,
			(player, rings) => {
				rings.disableBody(true, true);
				score += 1;
				scoreText.setText(`Score: `);
			}
		);

		//! added map temp mainly cus we need to know if those rings spawn in the middle or not
		const grid = this.add.grid(
			960 + -11,
			540 + -14, // x og y senterkoordinatene av gridden på skjermen
			1900,
			1050, // w og h av hele gridden
			50,
			50, // cell w og h
			0x000000,
			0,
			0xffffff,
			1 // outline farge, på de strekene
		);

	}

	update(time, delta) {
		if (this.player) {
			this.player.update(time, delta);
		}

		if (this.eggman) {
			this.eggman.update(time, delta);
		}

	if (this.ringsGroup) {
		this.ringsGroup.getChildren().forEach((ring) => {
			if (ring && ring.active && ring.update) {
				ring.update(time, delta);
			}
		});
	}

		if (this.fpsShow) {
			this.fpsShow.setText(
				`FPS: ${Math.round(this.game.loop.actualFps)}`
			);
		}
	}

	targetHit(player, ring) {
		ring.disableBody(true, true);
		this.points++;
		this.textScore.setText(`Score: ${this.points}`);
	}
}
