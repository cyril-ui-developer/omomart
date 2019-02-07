import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  _displayAccountIcons = false;

constructor(public media: MediaObserver, private authService: AuthService) {

}


ngOnInit() {
  this.authService.authStatus.subscribe(authStatus => {
    setTimeout(() => {
      this._displayAccountIcons = authStatus.isAuthenticated;
    }, 0);
  });
}

get displayAccountIcons() {
  return this._displayAccountIcons;
}
}
