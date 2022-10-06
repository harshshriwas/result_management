import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchresultComponent } from './serchresult.component';

describe('SerchresultComponent', () => {
  let component: SerchresultComponent;
  let fixture: ComponentFixture<SerchresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
