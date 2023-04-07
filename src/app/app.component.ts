import { FlagService } from './flag.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'restCountryAPI';
  ligthMode = false;

  changeMode(){
    this.ligthMode = !this.ligthMode;
  }
}
