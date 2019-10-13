import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  CompanyName : "Amazon Prime Deals";
  HeaderLink1 : "Daily Deals";
  HeaderLink2 : "Coupons";
  HeaderLink3 : "Give-Aways";
  HeaderLink4 : "Business Deals";
  welcome : "Welcome to";
  pageheading : "Amazon Prime Day Deals";
  pagedescription1 : `Did you know Amazon is full of surprises?`;
  pagedescription2 : `We'll show you the hidden, unknown, and undisclosed deals...`;
  pagedescription3 : `So you can get the best out of your Amazon Shopping Experience`;
  prodheading1 : "Shop";
  prodheading2 : "Amazon";
  prodheading3 : "Hidden Deals";
  prodheading4 : "Try These Amazon Services";
prodheading5 : "Amazon's 'Top Ranked' Daily Deals";

}
