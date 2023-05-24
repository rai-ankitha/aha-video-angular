import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  constructor(private dataService:DataService){}
  carouselList:any;
  selectedIndex:number=0;
  imageAlt="https://eurogeo6.org/wp-content/uploads/2020/09/40-1038x576.jpg";
  ngOnInit(): void {
    this.dataService.getCarouselData().subscribe((data:any) =>{
      this.carouselList=data['data'];
      for(let item of data['data']){
        console.log(item['image']);
        
      }
      console.log(data)});
  }

}
