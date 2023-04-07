import { Component } from '@angular/core';
import { FlagService } from 'src/app/flag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
