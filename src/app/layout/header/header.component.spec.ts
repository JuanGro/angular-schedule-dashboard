/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Get all the modules needed
import { SharedModule } from '../../../app/shared/shared.module';
import { LayoutModule } from '../layout.module';

import { HeaderComponent } from './header.component';

import { Router } from '@angular/router';

import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { LocalStorageService } from './../../../app/routes/services/auth/local-storage.service';
import { LogoutService } from './../../routes/services/logout/logout.service';
import { RedirectionService } from './../../routes/services/redirection/redirection.service';

describe('Component: Header', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule],
            declarations: [ HeaderComponent ],
            providers: [MenuService, SettingsService, LocalStorageService, LogoutService, RedirectionService],
        }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });
});
