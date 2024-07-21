import { Component, ViewChild } from '@angular/core';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {

	constructor(private router: Router) {}

	

	// next() {
	// 	this.slides.slideNext();
	// }

	async start() {
		
		this.router.navigateByUrl('/login', { replaceUrl: true });
	}
}
