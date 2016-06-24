import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MedjsAngularjs2FirebaseAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MedjsAngularjs2FirebaseAppComponent);

