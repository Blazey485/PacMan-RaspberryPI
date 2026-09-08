import Phaser from "phaser";

export default class Rings
	extends Phaser.Physics.Arcade.Sprite
{
	constructor(scene, x, y) {
		super(scene, x, y, "rings");

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.anims.play("rings_anime", true);
	}

	update(time, delta) {}
}
