import { Component } from '@angular/core';
import { LoginService } from './components/loginservice/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'RESULT-MANAGEMENT';

  constructor(public login:LoginService) {}

  public logout()
  {
   localStorage.clear();
    this.login.logout();
  }
}
