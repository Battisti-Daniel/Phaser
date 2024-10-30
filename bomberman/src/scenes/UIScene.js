
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UIScene extends Phaser.Scene {

	constructor() {
		super({ key: 'UIScene', active: true })

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		this.volumeController = this.registry.get('volume');

		this.settingsText = this.add.text(10, 10, 'Configurações:', {
			font: '16px Arial',
			fill: '#ffffff',
			align: 'left'
		});
		this.volume = this.settingsText.setText([
			'Configurações:',
			`Volume: ${this.volumeController}`,
			'Resolução: 1024x768',
		]);

		this.fpsText = this.add.text(10, 60, 'FPS: 0', {
			font: '16px Arial',
			fill: '#00ff00'
		});
	}

	/* START-USER-CODE */

	// Write your code here

	update() {
		// Atualiza o FPS a cada quadro
		const fps = this.game.loop.actualFps;
		this.fpsText.setText(`FPS: ${fps.toFixed(1)}`);

		const currentVolume = this.registry.get('volume');
		if (this.volumeController != currentVolume) {
			this.volumeController = currentVolume;
			this.volume.setText(['Configurações:',`Volume: ${this.volumeController.toFixed(2)}`,'Resolução: 1024x768'])
		}
	}

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
