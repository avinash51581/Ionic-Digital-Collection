import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AppConstants } from 'src/app/infrastructure/app.constant';
import { RegisterInfoModalPage } from '../common/modal/register-info-modal/register-info-modal.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  signupForm: FormGroup;
  
  constructor( 
    private sidebar: MenuController,
    private fb: FormBuilder,
    private router: Router,
    private modalController: ModalController) { }

ngOnInit() {
  this.createFormGroup();
}

ionViewWillEnter() {
  this.signupForm.reset();
  this.sidebar.enable(false);
}

 createFormGroup() {
  this.signupForm = this.fb.group(this.createSignupFormGroup());
}

createSignupFormGroup() {
  return {
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}')]], 
    password : ['', [Validators.required, Validators.pattern('^.{6,}$')]]
  } 
}

moveToLogin() {
  this.router.navigate([AppConstants.uiRoutes.login]);
}

async openSignupModal(){
   const modal = await this.modalController.create({
    component: RegisterInfoModalPage
  });
  return await modal.present();
}

onSubmit() {
  this.router.navigate([AppConstants.uiRoutes.login]);
}

}
