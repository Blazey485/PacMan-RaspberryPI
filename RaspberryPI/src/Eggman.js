import Phaser from "phaser";

export default class Eggman
	extends Phaser.GameObjects.Sprite
{
	constructor(scene, x, y) {
		super(scene, x, y, "eggmanNPC");

		scene.add.existing(this);
		this.setScale(0.97);
	}
}
