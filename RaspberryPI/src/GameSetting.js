import Phaser, { Scene } from "phaser";
import eggman from "./utils/EggmanSpriteSheet.png";
import eggmanJSON from "./utils/EggmanSpriteSheet.json";
import sonicJSON from "./utils/Sonic.json";
import sonic from "./utils/sonic.png";

export default class GameSetting extends Phaser.Scene{
   constructor(){
      super("Game");
   }


preload() {
	// this.load.image("background", background);
	this.load.atlas("eggmanNPC", eggman, eggmanJSON);
	this.load.atlas("sonicPlayer", sonic, sonicJSON);
}

create() {
	//- den value som er på 2. er for hvor stor selve map-pen er. og 64x64 er hvor store bokser det er inni, så alltid ha den 1216x640 og 64x64 i samma gange tabell.
	const grid = this.add.grid(
		960,
		540, // x og y senterkoordinatene av gridden på skjermen
		1880,
		1040, // w og h av hele gridden
		40,
		40, // cell w og h
		0xff00000,
		1, // fill farge, fill transparency
		0x000000,
		1 // outline farge, på de strekene
	);

	// this.add
	// 	.sprite(0, 0, "background")
	// 	.setOrigin(-0.3, -0.2)

	// 	.setScale(0.2);

	let ghost = this.add.sprite(
		960,
		700,
		"eggmanNPC",
		"eggman"
	);
	let player = this.add.sprite(
		970,
		540,
		"sonicPlayer",
		"sonic"
	)
}

}

