import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModifyProfileComponent } from './modify-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModifyProfileComponent', () => {
  let component: ModifyProfileComponent;
  let fixture: ComponentFixture<ModifyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProfileComponent ],
      imports: [ FormsModule, ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule, MatSnackBarModule, MatDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

  it('is form valid ', () =>{
    const itemLogin = component.profileForm.controls["username"];
    itemLogin.setValue("jvj0");
    const itemEmail = component.profileForm.controls["email"];
    itemEmail.setValue("jvj0@gmail.com");
    const itemFirstName = component.profileForm.controls["firstName"];
    itemFirstName.setValue("firstName1");
    const itemLastName = component.profileForm.controls["lastName"];
    itemLastName.setValue("lastName");
    const itemBiography = component.profileForm.controls["biography"];
    itemBiography.setValue("biography 22");
    const itemPassword = component.profileForm.controls["password"];
    itemPassword.setValue("salut");
    expect(component.profileForm.valid).toBeTruthy();

  });

  it('form invalid when empty', () => {
    expect(component.profileForm.valid).toBeFalsy();
  });

});
