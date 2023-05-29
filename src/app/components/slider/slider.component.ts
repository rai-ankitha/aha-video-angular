import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  constructor(private dataService:DataService){}
  seriesList:any;
  seriesValues:any;
 
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  ngOnInit(): void {
    console.log('inside image slider');
    
    this.dataService.getSeriesData().subscribe((res:any) =>{
      this.seriesValues=res['data']
     this.seriesList=Object.keys(res['data'])
     
      
      });

  }
}
