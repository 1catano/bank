import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

/* ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* import reducers */
import { productsReducer } from './store/products.reducer';

/* import effects */
import { ProductsEffects } from './store/products.effects';

const effects = [ProductsEffects];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productsReducer }),
    EffectsModule.forRoot(effects),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
