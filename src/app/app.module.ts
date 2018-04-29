import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './services/convertToSpaces.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductComponent,
    StarComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      { path: 'products/:id', component: ProductComponent },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'welcome', component: WelcomepageComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
