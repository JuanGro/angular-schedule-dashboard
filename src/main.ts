import './vendor.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const p = platformBrowserDynamic().bootstrapModule(AppModule);
p.then(() => { const app = (<any>window).appBootstrap && (<any>window).appBootstrap(); });
// .catch(err => console.error(err));
