import { Scene } from 'phaser';

export default class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {

        this.global();

        this.load.image('background', 'assets/Home/background.png');
        this.load.audio('homeMusic1', 'assets/Home/homeMusic1.mp3');
        this.load.audio('homeMusic2', 'assets/Home/homeMusic2.mp3');
        this.load.audio('changeLabel', 'assets/Home/changeLabel.mp3');
        this.load.spritesheet('pointerIdle', 'assets/Home/pointer/pointerIdle.png', {
            frameWidth: 16,
            frameHeight: 24  
        });
        this.load.spritesheet('pointer', 'assets/Home/pointer/pointer.png',{
            frameWidth: 15,
            frameHeight: 24,
            spacing: 3
        });
        this.load.spritesheet("selectPointer",'assets/Home/pointer/selectPointer.png',{
            frameWidth: 17,
            frameHeight: 37
        })
        this.load.image('backgroundOption','assets/Options/backgroundOption.png');
        this.load.spritesheet('optionsModel','assets/Options/optionsModel.png',{
            frameWidth: 31,
            frameHeight: 73
        })
    }

    create ()
    {
        setTimeout(() => {
            this.scene.start('OptionsMenu');
        },1500)
    }

    register(){

        this.registry.set('volume', this.volume);
        this.registry.set('select_green', this.select_green);
        this.registry.set('select_white',this.select_white);

    }

    global(){

        this.volume = 0.07
        this.select_green = '#31c431';
		this.select_white = '#ffffff';

        this.register();

    }
}
