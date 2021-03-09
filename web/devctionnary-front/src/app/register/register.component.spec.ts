import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ], 
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, MatSnackBarModule, MatDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   it('form invalid when empty', ()=> {
     expect(component.registerForm.invalid).toBeTruthy();
   })

   
   it('is form valid ', () =>{
    let itemLogin = component.registerForm.controls["username"];
    itemLogin.setValue("user1");
    let itemPassword = component.registerForm.controls["password"];
    itemPassword.setValue("salut");
    let firstName = component.registerForm.controls["firstName"];
    firstName.setValue("User");
    let lastName = component.registerForm.controls["lastName"];
    lastName.setValue("One");
    let email = component.registerForm.controls["email"];
    email.setValue("user1@gmail.com");
    expect(component.registerForm.valid).toBeTruthy();
  });


});
