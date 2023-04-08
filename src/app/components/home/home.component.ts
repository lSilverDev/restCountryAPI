import { Component } from '@angular/core';
import { FlagService } from 'src/app/flag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listCountry = [];
  filter: string = '';
  region: string = '';

  constructor(private service: FlagService){}

  ngOnInit(){
    this.service.getDatas().subscribe((list) => {
      this.listCountry = list;
    });
  }

  search(){
    this.service.listCountry(this.filter).subscribe((list) => {
      this.listCountry = list;
    });
  }

  listRegion(){
    this.service.listRegion(this.region).subscribe((list) => {
      this.listCountry = list;
    });
  }
}
