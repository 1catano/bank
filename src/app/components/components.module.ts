import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [SidebarComponent, FooterComponent, ProductsContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SidebarComponent, FooterComponent, ProductsContainerComponent, HeaderComponent ]
})
export class ComponentsModule { }
