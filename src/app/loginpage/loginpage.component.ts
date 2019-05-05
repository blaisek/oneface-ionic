import { Component} from '@angular/core';
import { NavController} from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.sass'],
})
export class LoginpageComponent {

  public data = {
    Email: ''
  };

  constructor( public navCtrl: NavController, private toastr: ToastrService, private loginService: LoginService) { }

  async login() {
    if (!this.data.Email) {
      this.toastr.error('Please enter Email!');
      return;
    } else {

        // if Auth is a success
        // Go to dashboard
        const image = await this.openCam();

       const result = await this.loginService.postToAPI({image, email: this.data.Email}).toPromise().catch(e => e);
       console.log('result', result);
      //  console.log('image', image);
      //  console.log('email', this.data.Email);
       if (result.code === 200) {
        this.navCtrl.navigateRoot('dashboard');
       }
    }

  }

async  openCam() {

    const { Camera } = Plugins;

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    return image.base64Data;
  }


}
