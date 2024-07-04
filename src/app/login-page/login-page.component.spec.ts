import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let fb: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginPageComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have an invalid form when empty `, () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it(`should check email field validity`, () => {
    let email = component.loginForm.controls['email']; //initial value of email is ""
    expect(email.valid).toBeFalsy(); //since initial value is empty, the validity will return false
    expect(email.errors?.['required']).toBeTruthy(); //since email is empty, there should be required error. the 'required' key in the errors object should be true

    email.setValue('test');
    expect(email.errors?.['email']).toBeTruthy(); //since the email is in invalid format, the 'email' key in the errors object should be true; should check with Validators.email(')

    email.setValue('test@mail.com');
    expect(email.errors).toBeNull(); //valid email format should clear all validation error
  });

  it(`should check password validity`, () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.errors?.['required']).toBeTruthy();

    password.setValue('testpassword');
    expect(password.errors?.['pattern']).toBeTruthy(); //should check with Validators.pattern('....')

    password.setValue('Test-Password');
    expect(password.errors?.['pattern']).toBeTruthy();

    password.setValue('testPassword123');
    expect(password.errors?.['pattern']).toBeTruthy();

    password.setValue('Test-Password123?');
    expect(password.errors).toBeNull();
  });

  it(`should set isSubmitted to true when form is valid and is submitted`, () => {
    component.loginForm.controls['email'].setValue('test@mail.com');
    component.loginForm.controls['password'].setValue('Test-Pasword123?');
    component.onSubmit();
    expect(component.isSubmitted).toBeTrue();
  }, 1000);

  it(`should set isError to true when form is submitted but is invalid`, () => {
    component.onSubmit();
    expect(component.isError).toBeTrue();
    expect(component.isSubmitted).toBeFalse(); //since initial value of form is empty, so the form is invalid and isSubmitted = false
  });
});
