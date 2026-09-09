import Phaser from "phaser";

export default class Sonic
	extends Phaser.Physics.Arcade.Sprite
{
	constructor(scene, x, y) {
		super(scene, x, y, "sonicPlayer");

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setScale(1.8);

		this.speed = 200;

		let sonic_Player = mergedInput.addPlayer(0);
		mergedInput
			.defineKey(0, "UP", "W")
			.defineKey(0, "DOWN", "S")
			.defineKey(0, "LEFT", "A")
			.defineKey(0, "RIGHT", "D")
			.defineKey(0, "B0", "U")
			.defineKey(0, "B1", "I")
			.defineKey(0, "B2", "O")
			.defineKey(0, "B3", "P");

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
			this.keys.arrowLeft.isDown ||
			sonic_Player.direction.LEFT
		) {
			this.setVelocity(-this.speed, 0);
			this.setFlipX(true);
			this.anims.play("sonic_Player", true);
		} else if (
			this.keys.right.isDown ||
			this.keys.arrowRight.isDown ||
			sonic_Player.direction.RIGHT
		) {
			this.setVelocity(this.speed, 0);
			this.setFlipX(false);
			this.anims.play("sonic_Player", true);
		} else if (
			this.keys.up.isDown ||
			this.keys.arrowUp.isDown ||
			sonic_Player.direction.UP
		) {
			this.setVelocity(0, -this.speed);
			this.anims.play("sonic_Player", true);
		} else if (
			this.keys.down.isDown ||
			this.keys.arrowDown.isDown ||
			sonic_Player.direction.DOWN
		) {
			this.setVelocity(0, this.speed);
			this.anims.play("sonic_Player", true);
		}
	}
}
