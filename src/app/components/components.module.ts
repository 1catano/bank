import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardBodyComponent } from './product-card-body/product-card-body.component';
import { ProductCardFooterComponent } from './product-card-footer/product-card-footer.component';

const components = [
  SidebarComponent,
  FooterComponent,
  HeaderComponent,
  ProductsCardComponent,
  ProductCardBodyComponent,
  ProductCardFooterComponent,
  ProductListComponent,
  InfoBarComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
