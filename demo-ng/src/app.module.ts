import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { SentryModule } from 'nativescript-sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SentryModule.forRoot({
      dsn: 'https://10b5f0389dfe422cb6127e67c4af05e9@sentry.io/1320301'
    })
  ],
  declarations: [AppComponent, HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
