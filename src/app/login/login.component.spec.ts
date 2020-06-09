import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginButton : any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule,ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginButton = fixture.debugElement.query(By.css('.loginButton')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a form with 2 controls',()=>{
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  })
  it('should contain default value for login form', () => {
    expect(component.loginForm.value).toEqual({
      username: null,
      password: null,
    });
  });
  it('should show error when username and paddword are incorrect',()=>{
    let errorMsg = "username or password is not correct.";
    component.loginForm.setValue({username : 'hnigam654',password: 'nigam1234'});
    component.login();
    expect(component.errorMsg).toEqual(errorMsg);
  })
  it('should show form valid when fields are filled with correct username and password',()=>{
    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin1234');
    expect(component.loginForm.valid).toBeTruthy();
  })
  it('should show form invalid when fields are empty',()=>{
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  })
  it('should show username invalid if field is in default state',()=>{
    let email = component.loginForm.controls['username'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
  })
  it('should show password invalid if field is in default state',()=>{
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();

    component.loginForm.controls['password'].setValue('admin12');
    expect(password.errors['minlength']).toBeTruthy();
  })
  it('should show login button disabled at initial state',()=>{
    expect(loginButton.disabled).toBeTruthy();
  })
  it('should should login button enable when username and password field are filled', () => {
    component.loginForm.controls['username'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin1234');
    fixture.detectChanges();
    expect(loginButton.disabled).toBeFalsy();
  });
  it('should navigate to dashbord page if form is valid',()=>{
    component.loginForm.setValue({username : 'admin',password: 'admin1234'});
    spyOn(component.router,'navigate');
    component.login();
    expect(component.router.navigate).toHaveBeenCalled();
  })
});
