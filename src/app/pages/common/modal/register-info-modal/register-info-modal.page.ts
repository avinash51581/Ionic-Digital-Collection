import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'register-info-modal.page.html',
  styleUrls: ['register-info-modal.page.scss']
})
export class RegisterInfoModalPage {
  
  constructor(private modalCtrl: ModalController) { }

  closeSignupModal() {
     this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
