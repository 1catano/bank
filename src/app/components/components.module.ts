import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

const components = [
  SidebarComponent,
  FooterComponent,
  HeaderComponent,
  ProductsCardComponent,
  ProductListComponent,
  InfoBarComponent
];

@NgModule({
  declarations: [...components, ProductListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
