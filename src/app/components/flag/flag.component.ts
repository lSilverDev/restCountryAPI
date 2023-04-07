import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent {
  @Input() listCountry: any;

  constructor(private router: Router) {}

  detail(country: any){
    this.router.navigateByUrl("/flagDetail", {
      state: {country: country}
    });
  }
}
