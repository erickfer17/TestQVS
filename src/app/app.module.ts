import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestComponent } from './components/test/test.component';
import { RestService } from './services/rest.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { PortadaComponent } from './components/portada/portada.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestComponent,
    ResultadoComponent,
    PortadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    RestService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
