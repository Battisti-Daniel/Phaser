import FirstScene from "./scenes/FirstScene.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics:{
			default: "arcade",
			arcade: {
				gravity: {y : 0},
				debug : true
			}
		},
	});

	game.scene.add("Boot", Boot, true);
	game.scene.add("FirstScene", FirstScene);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
		
	}

	create() {
		this.scene.start("FirstScene");
	}
}