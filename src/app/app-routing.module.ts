import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';
import { PosModule } from './pos/pos.module';
import { InventoryModule } from './inventory/inventory.module';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' },
  { path: 'manager', loadChildren: () => ManagerModule },
  // { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'user', loadChildren: () => UserModule },
  // { path: 'pos', loadChildren: './pos/pos.module#PosModule' },
  { path: 'pos', loadChildren: () => PosModule },
  // { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' }
  { path: 'inventory', loadChildren: () => InventoryModule },
  { path: '**', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
