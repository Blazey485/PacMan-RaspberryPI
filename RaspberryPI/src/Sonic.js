import Phaser from "phaser";

export default class Sonic
	extends Phaser.Physics.Arcade.Sprite
{
	constructor(scene, x, y) {
		super(scene, x, y, "sonicPlayer");

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setScale(2.5);

		this.speed = 200;

		this.keys = scene.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			right: Phaser.Input.Keyboard.KeyCodes.D,
			arrowUp: Phaser.Input.Keyboard.KeyCodes.UP,
			arrowDown: Phaser.Input.Keyboard.KeyCodes.DOWN,
			arrowLeft: Phaser.Input.Keyboard.KeyCodes.LEFT,
			arrowRight: Phaser.Input.Keyboard.KeyCodes.RIGHT
		});
	}

	preload() {
		this.load.sprite;
	}
	update(time, delta) {
		if (
			this.keys.left.isDown ||
			this.keys.arrowLeft.isDown
		) {
			this.setVelocity(-this.speed, 0);
			this.setFlipX(true);
			this.anims.play("sonic_Player", true);
		} else if (
			this.keys.right.isDown ||
			this.keys.arrowRight.isDown
		) {
			this.setVelocity(this.speed, 0);
			this.setFlipX(false);
			this.anims.play("sonic_Player", true);
		} else if (
			this.keys.up.isDown ||
			this.keys.arrowUp.isDown
		) {
			this.setVelocity(0, -this.speed);
			this.anims.play("sonic_Player", true);
		} else if (
			this.keys.down.isDown ||
			this.keys.arrowDown.isDown
		) {
			this.setVelocity(0, this.speed);
			this.anims.play("sonic_Player", true);
		}
	}
}
