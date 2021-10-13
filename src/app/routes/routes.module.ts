import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Services
import { AuthGuardUserNotLoggedService } from './services/auth/auth-guard-user-not-logged.service';
import { AuthGuardUserLoggedService } from './services/auth/auth-guard-user-logged.service';
import { LocalStorageService } from './services/auth/local-storage.service';
import { DateService } from './services/date/date.service';
import { HttpService } from './services/http/http.service';
import { RedirectionService } from './services/redirection/redirection.service';
import { LogoutService } from './services/logout/logout.service';

import { menu } from './menu';
import { routes } from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule
    ],
    declarations: [],
    providers: [
      AuthGuardUserNotLoggedService,
      AuthGuardUserLoggedService,
      LocalStorageService,
      DateService,
      HttpService,
      RedirectionService,
      LogoutService
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
