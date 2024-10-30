
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(512, 384, "background");
		background.scaleX = 1.6;
		background.scaleY = 2.15;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		
		this.volume = 0.07
		this.count = 0;

		this.selected_green = this.registry.get('select_green');
		this.selected_white = this.registry.get('select_white');

		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		this.wait = false;

		this.editorCreate();

		this.songController()

		this.mainMenu();
		this.posMenu = 0;
	}

	update(){

		this.handleMenuNavigation();

	}

	changeSelect(current,anim1,anim2,waitTime,foward){

		this.wait = true;
		this.pointer.play(anim1);
		this.time.delayedCall(waitTime,() => {
			this.pointer.play(anim2);
			this.time.delayedCall(waitTime,() => {
				this.wait = false;
				this.pointer.play(current);
			})
			if (foward){
				this.posMenu += 1;
			}else{
				this.posMenu -= 1;
			}
		})
	}

	handleMenuNavigation() {

		this.posMenu > 3 ? 3 : this.posMenu;
		this.posMenu < 0 ? 0 : this.posMenu;

		if (Phaser.Input.Keyboard.JustDown(this.keyS) && this.posMenu < 3 && !this.wait) {
			this.changeOp.play();
			this.changeSelect('pointerIdle','pointer','pointerRecall',640, true)
		}
		if (Phaser.Input.Keyboard.JustDown(this.keyW) && this.posMenu > 0 && !this.wait) {
			this.changeOp.play();
			this.changeSelect('pointerIdle','pointer','pointerRecall',640, false)
		}

		if (Phaser.Input.Keyboard.JustDown(this.keyEnter) && !this.wait){
			this.wait = true;
			this.pointer.play("selectPointer")
			this.pointer.on('animationcomplete', (animation) => {
				if (animation.key == "selectPointer") {
					this.count += 1;
					this.pointer.play("selectPointerReverse");
				} else if (animation.key == "selectPointerReverse") {
					this.pointer.play("selectPointer");
					if (this.count >= 2){
						this.homeMusic1.stop()
						this.homeMusic2.stop()
						switch (this.posMenu){
							case 0:
								break;
							case 1:
								break;
							case 2:
								this.scene.start('OptionsMenu');
							case 3:
								break;
						}
					}
				}
			});	
		}

		this.newGame.setColor(this.posMenu === 0 ? this.selected_green : this.selected_white);
		this.password.setColor(this.posMenu === 1 ? this.selected_green : this.selected_white);
		this.opcoes.setColor(this.posMenu === 2 ? this.selected_green : this.selected_white);
		this.online.setColor(this.posMenu === 3 ? this.selected_green : "red");

		this.pointer.y = this.scale.height / 2 + this.posMenu * 50;

	}

	instanceAnimSprites(){

		this.anims.create({
			key: "pointerIdle",
			frames: this.anims.generateFrameNumbers('pointerIdle', {frames: [0,1,2]}),
			frameRate: 12,
			repeat: -1
		})

		this.anims.create({
			key: 'pointer',
			frames: this.anims.generateFrameNumbers('pointer',{frames: [0,1,2,3,4,5,6,7]}),
			frameRate: 12,
			repeat: -1
		})

		this.anims.create({
			key: 'pointerRecall',
			frames: this.anims.generateFrameNumbers('pointer',{frames: [7,6,5,4,3,2,1,0]}),
			frameRate: 12,
			repeat: -1
		})

		this.anims.create({
			key: 'selectPointer',
			frames: this.anims.generateFrameNumbers('selectPointer',{frames:[0,1,2,3,4,5,6]}),
			frameRate: 7,
			repeat: 0
		})

		this.anims.create({
			key: 'selectPointerReverse',
			frames: this.anims.generateFrameNumbers('selectPointer',{frames:[6,5,4,3,2,1,0]}),
			frameRate: 7,
			repeat: 0
		})

	}

	instanceObjects(){

			this.newGame = this.add.text(this.scale.width / 2 - 90 ,this.scale.height / 2, 'Novo Jogo',{
				font: '26px bm',
				fill: this.selected,
				align: "center"
			})

			this.password = this.add.text(this.scale.width / 2 - 90 ,this.scale.height / 2 + 50, 'Password',{
				font: '26px bm',
				fill: this.defaultColorFont,
				align: "center",			
			})

			this.opcoes =this.add.text(this.scale.width / 2 - 90 ,this.scale.height / 2 + 100, 'Opcoes',{
				font: '26px bm',
				fill: this.defaultColorFont,
				align: "center",
			})
			this.online = this.add.text(this.scale.width / 2 - 90 ,this.scale.height / 2 + 150, 'Online',{
				font: '26px bm',
				fill: 'red',
				align: "center",
			})

			this.pointer = this.add.sprite(16,24,'pointerIdle');
			this.pointer.setScale(2);
			this.pointer.x = this.newGame.x -  this.pointer.width * 2;
			this.pointer.y = this.scale.height / 2 + this.pointer.height / 2;
			this.pointer.play('pointerIdle');
	}

	mainMenu(){

			this.instanceAnimSprites();
			this.instanceObjects();

	}

	songController(){

			this.homeMusic1 = this.sound.add('homeMusic1');
			this.homeMusic2 = this.sound.add('homeMusic2');

			this.changeOp = this.sound.add('changeLabel');
			this.changeOp.on('volume',()=>{});
			this.changeOp.setVolume(this.volume);

			this.homeMusic1.on('volume',()=>{});
			this.homeMusic2.on('volume',()=>{});

			this.homeMusic1.setVolume(this.volume);
			this.homeMusic2.setVolume(this.volume);
			
			this.homeMusic1.play();

			this.homeMusic1.on('complete',() => {
				this.homeMusic2.play();
			})

			this.homeMusic2.on('complete', () => {
				this.homeMusic1.play();
			})
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
