import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flag-details',
  templateUrl: './flag-details.component.html',
  styleUrls: ['./flag-details.component.css']
})
export class FlagDetailsComponent {
  country: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.country = nav!.extras!.state!['country'];
  }

  return(){
    this.router.navigateByUrl("/");
  }

  detailsCountry(country: any){
    // this.router.navigateByUrl("/flagDetail", {
    //   state: {country: country}
    // });
  }
}
