import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Get all the modules needed
import { SharedModule } from '../../../shared/shared.module';

// Current component
import { LoginComponent } from './login.component';

// Configuration
import { Configuration } from './../../configuration/configuration/configuration';
import { Alerts } from './../../configuration/alerts/alerts';

// Services
import { HttpService } from './../../services/http/http.service';
import { LocalStorageService } from './../../services/auth/local-storage.service';

describe('Component: Login', () => {
    let importedConfiguration: Configuration;
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule, RouterTestingModule],
        declarations: [ LoginComponent ],
        providers: [ HttpService, LocalStorageService ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      // Import the configuration of the app
      importedConfiguration = new Configuration();
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('Component initialization', () => {
      it('should check that the component is correctly created', () => {
        expect(component).toBeTruthy();
      });

      it('should initialize correctly the user form', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Check that the app settings are well defined
        expect(component.user).toBeDefined();
        expect(component.user.password).toBeUndefined();
        expect(component.user.email).toBeUndefined();
      });

      it('should get correctly the configuration', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Check that the app settings are well defined
        expect(component.configuration.institutionalDomain).toContain(importedConfiguration.institutionalDomain);
        expect(component.configuration.name).toContain(importedConfiguration.name);
      });

      it('should get the correct institutional domain', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Check that the app settings are well defined
        expect(component.configuration.institutionalDomain).toContain(importedConfiguration.institutionalDomain);
      });

      it('should append the institutional domain to the email', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Simulation of a user
        component.user.email = 'A01209988';
        // Call the method for this
        component.user.email = component.configuration.appendInstitutionalDomain(component.user.email);
        // Check that the app settings are well defined
        expect(component.user.email).toContain(importedConfiguration.institutionalDomain);
      });

      it('should reset correctly the user form', () => {
        // Initialize component
        component.ngOnInit();
        // Build a user to test it
        component.user.email = 'juan@hotmail.com';
        component.user.password = 'contrasena';
        // Change detection
        fixture.detectChanges();
        // Reset the user form
        component.resetForm();
        // Check that the app settings are well defined
        expect(component.user).toBeDefined();
        expect(component.user.password).toBeUndefined();
        expect(component.user.email).toBeUndefined();
      });
    });
});
