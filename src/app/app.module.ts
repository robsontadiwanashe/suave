import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxListModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxBadgeModule, IgxAvatarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    FormsModule,
    IgxListModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgxBadgeModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
