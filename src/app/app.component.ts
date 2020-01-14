import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router){

  }

  goToDash(){
      this.router.navigate(['/']);
  }

  goToQVS(){
    window.location.href = 'https://quierovivirsano.org/';
  }
}
