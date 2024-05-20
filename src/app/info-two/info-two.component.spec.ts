import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTwoComponent } from './info-two.component';

describe('InfoTwoComponent', () => {
  let component: InfoTwoComponent;
  let fixture: ComponentFixture<InfoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
