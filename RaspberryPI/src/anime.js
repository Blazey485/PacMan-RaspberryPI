export const loadAnimations = (scene) => {
	//! ANIMATIONS
	scene.anims.create({
		key: "rings_anime",
		frames: scene.anims.generateFrameNames("rings", {
			prefix: "frame",
			start: 0,
			end: 7,
			zeroPad: 0
		}),
		frameRate: 15,
		repeat: -1
	});

	scene.anims.create({
		key: "eggman_anime",
		frames: scene.anims.generateFrameNames("eggmanNPC", {
			prefix: "frame1",
			start: 1,
			end: 6,
			zeroPad: 2
		}),
		frameRate: 12,
		repeat: -1
	});

	scene.anims.create({
		key: "sonic_Player",
		frames: scene.anims.generateFrameNames("sonicPlayer", {
			prefix: "frame",
			start: 0,
			end: 7,
			zeroPad: 0
		}),
		frameRate: 24,
		repeat: -1
	});
};
