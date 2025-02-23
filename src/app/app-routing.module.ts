import { authGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { introGuard } from './guards/intro.guard';
import { autoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
		canActivate: [introGuard, autoLoginGuard] // Check if we should show the introduction or forward to inside
	},
	{
		path: 'intro',
		loadChildren: () => import('./pages/intro/intro.module').then((m) => m.IntroPageModule)
	},
	{
		path: 'tabs',
		loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
		canActivate: [authGuard] // Secure all child pages
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
