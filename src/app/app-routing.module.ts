import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAppComponent } from './admin/shared/layout/admin-app/admin-app.component';
import { LoginComponent } from './admin/components/auth/login/login.component';
import { AuthComponent } from './admin/shared/layout/auth/auth.component';
import { AdminMainComponent } from './admin/shared/layout/admin-main/admin-main.component';
import { ProductAdminComponent } from './admin/components/product/product-admin/product-admin.component';
import { AdminGuard } from './guard/admin.guard';
import { ProductCreateComponent } from './admin/components/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminAppComponent, children: [
      {
        path: 'auth', component: AuthComponent, children: [
          { path: 'login', component: LoginComponent }
        ]
      },
      {
        path: '', component: AdminMainComponent, canActivate: [AdminGuard], children: [
          { path: 'product', component: ProductAdminComponent },
          { path: 'product/add', component: ProductCreateComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
