import Phaser from "phaser";

export default class Sonic
	extends Phaser.Physics.Arcade.Sprite
{
	constructor(scene, x, y) {
		super(scene, x, y, "sonicPlayer", "sonicPlayerUp");

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setScale(1.8);
		this.body.setSize(20, 20, true);

		this.setCollideWorldBounds(true);

		this.speed = 200;
		this.scene = scene;

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

		this.deadzone = 0.25;
	}

	preload() {
		this.load.sprite;
	}
	update(time, delta) {

		const pad = this.scene.input.gamepad.pad1;
		let joyLeft = false,
			joyRight = false,
			joyUp = false,
			joyDown = false;

		if (pad) {
			const axisX = pad.axes[0]?.getValue() ?? 0;
			const axisY = pad.axes[1]?.getValue() ?? 0;

			joyLeft = axisX < -this.deadzone;
			joyRight = axisX > this.deadzone;
			joyUp = axisY < -this.deadzone;
			joyDown = axisY > this.deadzone;
		}


		//- left and right
		if (
			this.keys.left.isDown ||
			this.keys.arrowLeft.isDown ||
			joyLeft
		) {
			this.setVelocity(-this.speed, 0);
			this.setFlipX(true);
			this.anims.play("sonic_Player", true);
			// this.setScale(0.3);
			this.setScale(1.8);
			this.setCollideWorldBounds(true);

			this.body.setSize(20, 20, true);

			console.log(navigator.getGamepads());
		} else if (
			this.keys.right.isDown ||
			this.keys.arrowRight.isDown ||
			joyRight
		) {
			this.setVelocity(this.speed, 0);
			this.setFlipX(false);
			this.anims.play("sonic_Player", true);

			this.setScale(1.8);
			this.setCollideWorldBounds(true);

			this.body.setSize(20, 20, true);
		}

		//- DOWN AND UP
		else if (
			this.keys.up.isDown ||
			this.keys.arrowUp.isDown ||
			joyUp
		) {
			this.setVelocity(0, -this.speed);
			this.anims.play("sonic_PlayerUp", true);
			this.setScale(0.5, 0.3);
			this.setCollideWorldBounds(true);

			this.body.setSize(20, 20, true);
		} else if (
			this.keys.down.isDown ||
			this.keys.arrowDown.isDown ||
			joyDown
		) {
			this.setVelocity(0, this.speed);
			this.anims.play("sonic_PlayerDown", true);
			this.setScale(0.5, 0.3);
			this.setCollideWorldBounds(true);

			this.body.setSize(20, 20, true);

			console.log(navigator.getGamepads());
		}
	}
}
