import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PitPage } from './pit.page';

describe('PitPage', () => {
  let component: PitPage;
  let fixture: ComponentFixture<PitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
