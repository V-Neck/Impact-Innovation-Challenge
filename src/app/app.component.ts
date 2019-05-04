import { Component } from '@angular/core';
import { Disease } from './disease';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'inclusive-id';

  constructor(private navService: NavigationService) {
  }
}
