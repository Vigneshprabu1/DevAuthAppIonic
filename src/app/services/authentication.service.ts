import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';


const TOKEN_KEY = 'my-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	// Init with null to filter out the first value in a guard!
	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	token = '';

	constructor(private http: HttpClient) {
		this.loadToken();
	}

	async loadToken() {
		const token = false;
		if (token) {
			this.isAuthenticated.next(true);
		} else {
			this.isAuthenticated.next(false);
		}
	}

	login(credentials: { email: any; password: any }) {
		return this.isAuthenticated.next(true);
	}

	logout() {
		this.isAuthenticated.next(false);
		// return Storage.remove({ key: TOKEN_KEY });
	}
}