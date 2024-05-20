import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPhotoComponent } from './info-photo.component';

describe('InfoPhotoComponent', () => {
  let component: InfoPhotoComponent;
  let fixture: ComponentFixture<InfoPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
