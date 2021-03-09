import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddSnipetComponent } from './add-snipet.component';

describe('AddSnipetComponent', () => {
  let component: AddSnipetComponent;
  let fixture: ComponentFixture<AddSnipetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSnipetComponent ], 
      imports: [ FormsModule, ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty ', () =>{
    expect(component.addSnipetForm.invalid).toBeFalsy();
  });
  
  it('is form valid ', () =>{
    let itemTitle = component.addSnipetForm.controls["title"];
    itemTitle.setValue("title1");
    let itemDescription = component.addSnipetForm.controls["description"];
    itemDescription.setValue("description1");
    let itemContent = component.addSnipetForm.controls["content"];
    itemContent.setValue("content1")
    expect(component.addSnipetForm.valid).toBeTruthy();
  });



});
