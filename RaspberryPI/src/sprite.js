import "./style.css";
import Phaser, { Scene } from "phaser";
import sonic from "./utils/sonicface.png";



gameScene.preload = function(){
    this.load.image("sonic", sonicLoad)
}

gameScene.create = function(){
    this.add.image(0,400,"sonicLoad").setOrigin(0,0)
}

