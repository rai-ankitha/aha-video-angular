
import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isBottom: any;
  label = "Subscribe Now"
  constructor() {}

  ngOnInit() {
   
    // this.http.get('http://localhost:4200/assets/json/carousel-data.json')
    //              .subscribe((data:any) => console.log(data));
  }
  functioncall(event:any) {
    console.log('functioncall', event);
  }

}
