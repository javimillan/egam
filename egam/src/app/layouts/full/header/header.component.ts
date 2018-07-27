import { Component } from '@angular/core';
import { User } from '../../../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
currentUser: User;
  constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
