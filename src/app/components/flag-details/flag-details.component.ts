import { FlagService } from 'src/app/flag.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flag-details',
  templateUrl: './flag-details.component.html',
  styleUrls: ['./flag-details.component.css']
})
export class FlagDetailsComponent {
  country: any;
  countryDetails: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.country = nav!.extras!.state!['country'];
  }

  return(){
    this.router.navigateByUrl("/");
  }
}
