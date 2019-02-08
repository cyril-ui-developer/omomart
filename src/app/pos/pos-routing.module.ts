import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { Role } from '../auth/role.enum';

const routes: Routes = [
  { path: '', component: PosComponent,
  canActivate: [AuthGuard],
  data: {
    expectedRole: Role.Cashier,
    expectedRole2: Role.Manager,
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
