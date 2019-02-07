import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryComponent } from './inventory.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { Role } from '../auth/role.enum';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
      {
        path: 'home', component: InventoryHomeComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Clerk,
        }
      },
      {
        path: 'stockEntry', component: StockEntryComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Clerk,
        }
      },
      {
        path: 'products', component: ProductsComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Clerk,
        }
      },
      {
        path: 'categories', component: CategoriesComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Clerk,
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
