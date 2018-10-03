import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	imagen:string;

	options:CameraOptions;

  posicion:any;

  	constructor(
  		public navCtrl: NavController,
  		private camara:Camera,
      private gps:Geolocation) {

  		this.options={
  			quality: 100,
  			destinationType: this.camara.DestinationType.DATA_URL,
  			encodingType: this.camara.EncodingType.JPEG,
  			mediaType: this.camara.MediaType.PICTURE
  		}

  	}

  	tomarFoto(){
  		this.camara.
  			getPicture(this.options).
  			then((imageData)=>{
  				console.log(imageData);
  				this.imagen='data:image/jpeg;base64,'+imageData;
  			},(error)=>{});
  	}

    obtenerPosicion(){
      this.gps.
        getCurrentPosition().
        then((resp)=>{
          this.posicion=resp;
          console.log(resp);
        },(error)=>{

        });
    }

}
