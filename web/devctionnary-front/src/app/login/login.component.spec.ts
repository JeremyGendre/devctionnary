import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ], 
      imports: [ FormsModule, ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  it('is form valid ', () =>{
    let itemLogin = component.loginForm.controls["username"];
    itemLogin.setValue("jvj0");
    let itemPassword = component.loginForm.controls["password"];
    itemPassword.setValue("salut");
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  
});
