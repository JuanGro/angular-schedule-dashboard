import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// For links and redirect to other pages
import { RouterTestingModule } from '@angular/router/testing';
// Get all the modules needed
import { SharedModule } from '../../../shared/shared.module';
// App settings
import { AppSettings } from './../../app-settings';
// Current component
import { UpdatePersonalInformationComponent } from './update-personal-information.component';

describe('UpdatePersonalInformationComponent', () => {
  let component: UpdatePersonalInformationComponent;
  let fixture: ComponentFixture<UpdatePersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ UpdatePersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonalInformationComponent);
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
      expect(component.title_page).toContain('Actualiza tu información personal');
    });

    it('should display the current date', () => {
      // Initialize component
      component.ngOnInit();
      // Change detection
      fixture.detectChanges();
      // Check that the app settings are well defined
      expect(component.today).toBeDefined();
    });

    it('should initialize correctly the user form', () => {
      // Initialize component
      component.ngOnInit();
      // Change detection
      fixture.detectChanges();
      // Check that the user is built but it does not contain its attributes
      expect(component.user).toBeDefined();

      expect(component.user.birthday).toBeUndefined();
      expect(component.user.confirm_password).toBeUndefined();
      expect(component.user.password).toBeUndefined();
      expect(component.user.email).toBeUndefined();
      expect(component.user.entry_date).toBeUndefined();
      expect(component.user.gender).toBeUndefined();
      expect(component.user.id_college).toBeUndefined();
      expect(component.user.last_name).toBeUndefined();
      expect(component.user.local).toBeUndefined();
      expect(component.user.name).toBeUndefined();
      expect(component.user.nationality).toBeUndefined();
      expect(component.user.password).toBeUndefined();
      expect(component.user.phone).toBeUndefined();
    });

    it('should get the correct institutional domain', () => {
      // Initialize component
      component.ngOnInit();
      // Change detection
      fixture.detectChanges();
      // Check that the app settings are well defined
      expect(component.institutional_domain).toContain('@itesm.mx');
    });

    it('should get the email correctly appending the institutional domain', () => {
      // Initialize component
      component.ngOnInit();
      // Change detection
      fixture.detectChanges();
      // Simulation of a user
      component.user.id_college = 'A01209988';
      // Call the method for this
      component.user.email = component.appendInstitutionalDomain(component.user.id_college);
      // Check that the app settings are well defined
      expect(component.user.email).toContain('@itesm.mx');
    });
  });
});
