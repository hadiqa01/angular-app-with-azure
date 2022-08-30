import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from './result-page/result-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
	{ path: "result", component: ResultPageComponent },
	{ path: "cart-details", component: CartDetailsComponent },
	{ path: "home", component: HomePageComponent },
	{ path: "user/details", component: UserPageComponent },
	{ path: "user/purchases", component: UserPageComponent },
	{ path: "user/cart", component: UserPageComponent },
	{ path: "user/admin/store-purchases", component: UserPageComponent },
	{ path: "**", redirectTo: "home" }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }