import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageLeafletGPSPage } from './page-leaflet-gps.page';

describe('PageLeafletGPSPage', () => {
  let component: PageLeafletGPSPage;
  let fixture: ComponentFixture<PageLeafletGPSPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLeafletGPSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageLeafletGPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
