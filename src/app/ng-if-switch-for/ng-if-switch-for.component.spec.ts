import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfSwitchForComponent } from './ng-if-switch-for.component';

describe('NgIfSwitchForComponent', () => {
  let component: NgIfSwitchForComponent;
  let fixture: ComponentFixture<NgIfSwitchForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfSwitchForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIfSwitchForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
