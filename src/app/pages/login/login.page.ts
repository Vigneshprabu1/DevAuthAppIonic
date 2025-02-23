import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	credentials!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController
	) {}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
			password: ['cityslicka', [Validators.required, Validators.minLength(6)]]
		});
	}

	async login() {
		// const loading = await this.loadingController.create();
		// await loading.present();
    this.authService.isAuthenticated.next(true);
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
	}

	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}
}