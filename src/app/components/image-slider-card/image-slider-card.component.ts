import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-image-slider-card',
  templateUrl: './image-slider-card.component.html',
  styleUrls: ['./image-slider-card.component.css']
})
export class ImageSliderCardComponent implements OnInit{
  constructor(private dataService:DataService){}
  @Input() dataList:any;
  seriesList:any;
  seriesValues:any;
  ngOnInit(): void {
    console.log('inside image slider');
    
    this.dataService.getSeriesData().subscribe((res:any) =>{
      this.seriesValues=res['data']
     this.seriesList=Object.keys(res['data'])
     
      for(let item of this.seriesList){
        console.log(item)
      }
      
      });
      
  }

}
