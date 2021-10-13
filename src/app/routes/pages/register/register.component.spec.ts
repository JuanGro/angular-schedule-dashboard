import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Rx';

// Get all the modules needed
import { SharedModule } from '../../../shared/shared.module';

// Current component
import { RegisterComponent } from './register.component';

// Configuration
import { Configuration } from './../../configuration/configuration/configuration';
import { Alerts } from './../../configuration/alerts/alerts';

// Services
import { HttpService } from './../../services/http/http.service';

describe('Component: Register', () => {
    let importedConfiguration: Configuration;
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule, RouterTestingModule],
        declarations: [RegisterComponent],
        providers: [HttpService],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      // Import the configuration of the app
      importedConfiguration = new Configuration();
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('Component correctly built and initialized', () => {
      it('should check that the component is correctly created', () => {
        expect(component).toBeTruthy();
      });

      it('should display the correct page title', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Check that the app settings are well defined
        expect(component.titlePage).toContain('Registro');
      });

      it('should display the current date', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Check that the app settings are well defined
        expect(component.today).toBeDefined();
      });

      // it('should initialize correctly the student form', () => {
      //   // Initialize component
      //   component.ngOnInit();
      //   // Change detection
      //   fixture.detectChanges();
      //   // Check that the student is built but it does not contain its attributes
      //   expect(component.student).toBeDefined();

      //   expect(component.student.birthday).toBeUndefined();
      //   expect(component.student.password_confirmation).toBeUndefined();
      //   expect(component.student.password).toBeUndefined();
      //   expect(component.student.email).toBeUndefined();
      //   expect(component.student.entry_date).toBeUndefined();
      //   expect(component.student.id_college).toBeUndefined();
      //   expect(component.student.last_name).toBeUndefined();
      //   expect(component.student.name).toBeUndefined();
      //   expect(component.student.nationality).toBeUndefined();
      //   expect(component.student.password).toBeUndefined();
      //   expect(component.student.phone).toBeUndefined();

      //   // Default values
      //   expect(component.student.gender).toBeDefined();
      //   expect(component.student.local).toBeDefined();
      // });

      it('should get the correct institutional domain', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Check that the app settings are well defined
        expect(component.configuration.institutionalDomain).toBeDefined(importedConfiguration.institutionalDomain);
      });

      it('should get the email correctly appending the institutional domain', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Simulation of a student
        component.student.id_college = 'A01209988';
        // Call the method for this
        component.student.email = component.configuration.appendInstitutionalDomain(component.student.id_college);
        // Check that the app settings are well defined
        expect(component.student.email).toContain(component.configuration.institutionalDomain);
      });

      it('should define the default values for dropdown', () => {
        // Initialize component
        component.ngOnInit();
        // Change detection
        fixture.detectChanges();
        // Call the method
        component.defineDefaultValuesInForm();
        // Check that the values have been setted
        expect(component.student.gender).toContain('Masculino');
        expect(component.student.local).toContain('Local');
      });

      // it('should reset the form', () => {
      //   // Initialize component
      //   component.ngOnInit();
      //   // Change detection
      //   fixture.detectChanges();
      //   // Check that the user has been initialized correctly
      //   expect(component.student).toBeDefined();

      //   expect(component.student.birthday).toBeUndefined();
      //   expect(component.student.password_confirmation).toBeUndefined();
      //   expect(component.student.password).toBeUndefined();
      //   expect(component.student.email).toBeUndefined();
      //   expect(component.student.entry_date).toBeUndefined();
      //   expect(component.student.id_college).toBeUndefined();
      //   expect(component.student.last_name).toBeUndefined();
      //   expect(component.student.name).toBeUndefined();
      //   expect(component.student.nationality).toBeUndefined();
      //   expect(component.student.password).toBeUndefined();
      //   expect(component.student.phone).toBeUndefined();

      //   // Default values
      //   expect(component.student.gender).toBeDefined();
      //   expect(component.student.local).toBeDefined();
      // });
    });
});
