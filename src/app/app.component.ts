import { Component } from '@angular/core';
import { UserService } from './general-module/components/servicios/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(userService: UserService) {
   // userService.getUserLogged().toPromise();
  }
}
