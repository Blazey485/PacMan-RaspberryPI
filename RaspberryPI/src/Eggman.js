import Phaser from "phaser";

export default class Eggman
	extends Phaser.Physics.Arcade.Sprite
{
	constructor(scene, x, y, target) {
		super(scene, x, y, "eggmanNPC");

		scene.add.existing(this);
		this.setScale(0.97);
		scene.physics.add.existing(this);
		this.target = target;
		this.speed = 175;
	}

	preload() {
		this.load.sprite;
	}

	update(time, delta) {
		if (!this.target) return;

		const distance = Phaser.Math.Distance.Between(
			this.x,
			this.y,
			this.target.x,
			this.target.y
		);

		if (distance > 50) {
			this.scene.physics.moveToObject(
				this,
				this.target,
				this.speed
			);
			this.setFlipX(this.target.x < this.x);
			this.anims.play("eggman_anime", true);
		} else {
			this.body.setVelocity(0, 0);
		}
	}
}
