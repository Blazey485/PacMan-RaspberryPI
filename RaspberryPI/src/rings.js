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

// 	const spawnPoint = [
// 	{x: 100, y: 200},
// 	{x: 300, y: 200},
// 	{x: 500, y: 400}
// ];

// spawnPoint.forEach(point => {
// 	this.add.rings(point.x, point.y, 'rings');
// })

// create() {
//     this.rings = this.add.group();

//     for (let i = 0; i < 15; i++) {
//         let randomX = Phaser.Math.Between(50, 750);
//         let randomY = Phaser.Math.Between(50, 550);
        
//         this.rings.create(randomX, randomY, 'rings');
//     }
// }


