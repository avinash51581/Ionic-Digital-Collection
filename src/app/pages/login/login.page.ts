import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AppConstants } from 'src/app/infrastructure/app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(
    private sidebar: MenuController,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createFormGroup();
  }

  ionViewWillEnter() {
    this.loginForm.reset();
    this.sidebar.enable(false);
  }

  createFormGroup() {
    this.loginForm = this.fb.group(this.createLoginFormGroup());
  }

  createLoginFormGroup() {
    return {
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
  }

  moveToSignup() {
    this.router.navigate([AppConstants.uiRoutes.register]);
   }

  onSubmit() {
    this.router.navigate([AppConstants.uiRoutes.maharashtrianFestivalsList]);
  }


}
