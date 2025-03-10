import { Component } from '@angular/core';
import { DbzService } from '../services/main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent{

  constructor ( public dbzService: DbzService ) {
    dbzService.characters
  }
}
