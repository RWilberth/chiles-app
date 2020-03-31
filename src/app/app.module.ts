import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './admin/shared/layout/menu/menu.component';
import { AdminAppComponent } from './admin/shared/layout/admin-app/admin-app.component';
import { ProductAdminComponent } from './admin/components/product/product-admin/product-admin.component';
import { ProductListComponent } from './admin/components/product/product-list/product-list.component';
import { ProductCreateComponent } from './admin/components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './admin/components/product/product-update/product-update.component';
import { ProductSearchComponent } from './admin/components/product/product-search/product-search.component';
import { UserAdminComponent } from './admin/components/user/user-admin/user-admin.component';
import { UserSearchComponent } from './admin/components/user/user-search/user-search.component';
import { UserListComponent } from './admin/components/user/user-list/user-list.component';
import { UserCreateComponent } from './admin/components/user/user-create/user-create.component';
import { UserUpdateComponent } from './admin/components/user/user-update/user-update.component';
import { AuthComponent } from './admin/shared/layout/auth/auth.component';
import { LoginComponent } from './admin/components/auth/login/login.component';
import { AdminMainComponent } from './admin/shared/layout/admin-main/admin-main.component';
import { ImgInputComponent } from './components/shared/img-input/img-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminMainComponent,
    LoginComponent,
    AuthComponent,
    AdminAppComponent,
    ProductAdminComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductSearchComponent,
    UserAdminComponent,
    UserSearchComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    ImgInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
