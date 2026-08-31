import "./style.css";
import Phaser, { Scene } from "phaser";

let gameScene = new Phaser.Scene("Game");

//størrelse på skjermen/spillet
let config = {
	type: Phaser.AUTO,
	width: 1900,
	height: 950,
	scene: gameScene
};

let game = new Phaser.Game(config);
