
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OptionsMenu extends Phaser.Scene {

	constructor() {
		super("OptionsMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundOption
		const backgroundOption = this.add.image(512, 384, "backgroundOption");
		backgroundOption.scaleX = 4;
		backgroundOption.scaleY = 3.15;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.menu();
	}

	menu(){

		this.instanceObjects();

	}

	instanceObjects(){

		this.optionsLabel = this.add.text(this.scale.width / 2 - 130, 36, 'OPCOES',{
			font: '52px bm',
			fill: "white",
			align: "center",
		})

		this.anims.create({
			key: "optionsModel",
			frames: this.anims.generateFrameNumbers('optionsModel', {frames: [0,1,2,3]}),
			frameRate: 10,
			repeat: 0
		})

		this.anims.create({
			key: "optionsModelReverse",
			frames: this.anims.generateFrameNumbers('optionsModel', {frames: [3,2,1,0]}),
			frameRate: 10,
			repeat: 0
		})
		


		this.optionsModel = this.add.sprite(31,73,("optionsModel"));
		this.optionsModel.setScale(5);
		this.optionsModel.x = this.scale.width / 2 - (this.scale.width / 4) - this.optionsModel.width;
		this.optionsModel.y = this.scale.height - this.optionsModel.height - this.scale.height / 2;
		
		this.optionsModel.play("optionsModel");

		this.repeatAnim('optionsModel','optionsModelReverse');

				this.skinLabel = this.add.text(this.optionsModel.x + this.optionsModel.width * 3, this.scale.height / 6, "SKIN",{
			font: '52px bm',
			fill: 'white'
		})



	}

	repeatAnim(anim1, anim2) {
		this.optionsModel.on('animationcomplete', (animation) => {
			if (animation.key === anim1) {
				this.optionsModel.play(anim2);
			} else if (animation.key === anim2) {
				this.optionsModel.play(anim1);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
