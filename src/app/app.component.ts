import { FlagService } from './flag.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'restCountryAPI';

  listCountry = [];

  constructor(private service: FlagService){}

  ngOnInit(){
    this.service.getDatas().subscribe((list) => {
      this.listCountry = list;
    });
  }

  showInfo(){
    console.log(this.listCountry);
  }
}
