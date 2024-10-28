
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FirstScene extends Phaser.Scene {

	constructor() {
		super("FirstScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(642, 365, "sky");
		sky.scaleX = 5;
		sky.scaleY = 2.8;

		// floor0
		const floor0 = this.add.image(38, 709, "floor", 0);
		floor0.scaleX = 2.55;
		floor0.scaleY = 1.5;

		// floor
		const floor = this.add.image(97, 709, "floor", 0);
		floor.scaleX = 2;
		floor.scaleY = 1.5;

		// floor_1
		const floor_1 = this.add.image(215, 709, "floor", 0);
		floor_1.scaleX = 2;
		floor_1.scaleY = 1.5;

		// floor_2
		const floor_2 = this.add.image(156, 709, "floor", 0);
		floor_2.scaleX = 2;
		floor_2.scaleY = 1.5;

		// floor_3
		const floor_3 = this.add.image(274, 709, "floor", 0);
		floor_3.scaleX = 2;
		floor_3.scaleY = 2.2;

		// floor_4
		const floor_4 = this.add.image(511, 709, "floor", 0);
		floor_4.scaleX = 2;
		floor_4.scaleY = 1.5;

		// floor_5
		const floor_5 = this.add.image(451, 709, "floor", 0);
		floor_5.scaleX = 2;
		floor_5.scaleY = 1.5;

		// floor_6
		const floor_6 = this.add.image(393, 709, "floor", 0);
		floor_6.scaleX = 2;
		floor_6.scaleY = 1.5;

		// floor_7
		const floor_7 = this.add.image(334, 709, "floor", 0);
		floor_7.scaleX = 2;
		floor_7.scaleY = 1.75;

		// floor_8
		const floor_8 = this.add.image(571, 709, "floor", 0);
		floor_8.scaleX = 2;
		floor_8.scaleY = 1.5;

		// floor_9
		const floor_9 = this.add.image(631, 709, "floor", 0);
		floor_9.scaleX = 2;
		floor_9.scaleY = 1.5;

		// floor_10
		const floor_10 = this.add.image(691, 709, "floor", 0);
		floor_10.scaleX = 2;
		floor_10.scaleY = 1.5;

		// floor_11
		const floor_11 = this.add.image(751, 709, "floor", 0);
		floor_11.scaleX = 2;
		floor_11.scaleY = 1.5;

		// floor_12
		const floor_12 = this.add.image(810, 709, "floor", 0);
		floor_12.scaleX = 2;
		floor_12.scaleY = 1.5;

		// floor_13
		const floor_13 = this.add.image(870, 709, "floor", 0);
		floor_13.scaleX = 2;
		floor_13.scaleY = 1.5;

		// floor_14
		const floor_14 = this.add.image(930, 709, "floor", 0);
		floor_14.scaleX = 2;
		floor_14.scaleY = 1.5;

		// floor_15
		const floor_15 = this.add.image(990, 709, "floor", 0);
		floor_15.scaleX = 2;
		floor_15.scaleY = 1.5;

		// floor_16
		const floor_16 = this.add.image(1050, 709, "floor", 0);
		floor_16.scaleX = 2;
		floor_16.scaleY = 1.5;

		// floor_17
		const floor_17 = this.add.image(1110, 709, "floor", 0);
		floor_17.scaleX = 2;
		floor_17.scaleY = 1.5;

		// floor_18
		const floor_18 = this.add.image(1170, 709, "floor", 0);
		floor_18.scaleX = 2;
		floor_18.scaleY = 1.5;

		// floor_19
		const floor_19 = this.add.image(1230, 709, "floor", 0);
		floor_19.scaleX = 2;
		floor_19.scaleY = 1.5;

		// floor_20
		const floor_20 = this.add.image(1290, 709, "floor", 0);
		floor_20.scaleX = 2;
		floor_20.scaleY = 1.5;

		// tree
		const tree = this.add.image(256, 432, "tree");

		// tree_1
		this.add.image(1050, 433, "tree");

		// lists
		const list = [floor0, floor, floor_2, floor_1, floor_20, floor_19, floor_18, floor_17, floor_16, floor_15, floor_14, floor_13, floor_12, floor_11, floor_10, floor_9, floor_8, floor_7, floor_6, floor_5, floor_4, floor_3];

		this.tree = tree;
		this.list = list;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	tree;
	/** @type {Phaser.GameObjects.Image[]} */
	list;

	/* START-USER-CODE */

	// Write your code here


	create() {

		this.editorCreate();

		this.moving = false;
		this.attack = false;
		this.action = false;
		this.skills = []
		this.side = true;


		this.playerSpeed = 500; // Velocidade do jogador em pixels por segundo

		this.anims.create({
			key: "oak_walking",
			frames: this.anims.generateFrameNumbers("oak", { frames: [0, 1, 2, 3] }),
			frameRate: 4,
			repeat: -1
		});

		this.anims.create({
			key: "idle_player",
			frames: this.anims.generateFrameNumbers("idle_player", { frames: [0, 1, 2, 3, 4] }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: "player",
			frames: this.anims.generateFrameNumbers("player", { frames: [0, 1, 2, 3,4] }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key:"playerAttack",
			frames: this.anims.generateFrameNumbers("playerAttack", {frames: [0,1,2,3,4,5,6,7,8]}),
			frameRate: 18,
			repeat: -1
		})

		this.anims.create({
			key:"effectHit",
			frames: this.anims.generateFrameNumbers("effectHit", {frames: [0,1,2,3]}),
			frameRate: 8,
			repeat: -1
		})


		this.player = this.physics.add.sprite(125, 111, "idle_player");
		this.player.setScale(2);
		this.player.play("idle_player");
		this.player.x = 0 + this.player.width;
		this.player.y = this.list[2].y - (this.list[2].height / 2 + this.player.height);
		this.player.setCollideWorldBounds(true);


		this.cody = this.physics.add.sprite(69, 54, "oak");
		this.cody.setScale(2);
		this.cody.play("oak_walking");
		this.cody.x = this.scale.width - this.cody.width / 2;
		this.cody.y = this.list[2].y - (this.list[2].height / 2 + this.cody.height);
		//this.cody.setCollideWorldBounds(false);


		// Armazena o estado das teclas
		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// Tecla do hit
		this.keyCtrl = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);

	}

	update(time, delta) {
		// Atualiza o movimento contínuo de cody
		this.updateCody();

		// Movimenta o player suavemente baseado no estado das teclas
		this.updatePlayer(delta);

		this.physics.add.collider(this.player, this.cody, this.handleCollision,null,this)
	}

	handleCollision(player, object) {

    	
	}

	updatePlayer(delta) {



		if (this.keyA.isDown && this.player.x - this.player.width / 2 > 0) {
			this.player.x -= this.playerSpeed * delta / 1000;
			this.player.flipX = false;
			this.moving = true;
			this.side = false;
		}
		else if (this.keyD.isDown && this.player.x + this.player.width / 2 < this.scale.width) {
			this.player.x += this.playerSpeed * delta / 1000;
			this.player.flipX = true;
			this.moving = true;
			this.side = true;
		}

		if (this.keyCtrl.isDown){
			this.attack = true;			
		}

		if (this.skills.length > 0){
			for (let i = 0; i < this.skills.length; i++){
				if(this.skills[i].side){
					this.skills[i].object.x += this.playerSpeed * delta / 1000;
				}else{
					this.skills[i].object.x -= this.playerSpeed * delta / 1000;
				}
				if( this.skills[i].object.x >= this.scale.width - this.skills[i].object.width / 2 || this.skills[i].object.x <= 0 + this.skills[i].object.width / 2){
					this.skills[i].object.destroy();
				}
				if( this.skills[i].object.x == this.cody.x){
					this.cody.destroy();
				}
				//ajustar
			}
		}

		// Controla a animação dependendo do estado
		if (!this.action){
			if (this.moving && this.player.anims.currentAnim?.key !== "player") {
				this.player.anims.play("player", true);
			} if (!this.keyA.isDown && !this.keyD.isDown && this.player.anims.currentAnim?.key !== "idle_player") {
				this.player.anims.play("idle_player");
				this.moving = false;
			} 
			if (this.attack && this.player.anims.currentAnim?.key !== "playerAttack"){
				this.player.anims.play("playerAttack");
				this.action = true
				this.objectSkill = this.physics.add.sprite(87,77,"effectHit");
				this.objectSkill.setCollideWorldBounds(true);
				this.objectSkill.play("effectHit")
				if(this.side){
					this.objectSkill.y = this.player.y
					this.objectSkill.x = this.player.x  + this.player.width;
				}else{
					this.objectSkill.y = this.player.y
					this.objectSkill.x = this.player.x  - this.player.width;
				}
				this.skills.push({object: this.objectSkill, side: this.side});
				setTimeout(()=>{
					this.action = false;
					this.attack = false;
					this.moving = false;
				},450)
			}
		}
	}

	updateCody() {
		if (this.cody.x <= this.cody.width / 2) {
			this.cody.flipX = true;
			this.tweens.add({
				targets: this.cody,
				x: this.scale.width - this.cody.width / 2,
				duration: 4000,
				ease: "linear"
			});
		} else if (this.cody.x + this.cody.width / 2 >= this.scale.width) {
			this.cody.flipX = false;
			this.tweens.add({
				targets: this.cody,
				x: this.cody.width / 2,
				duration: 4000,
				ease: "linear"
			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
