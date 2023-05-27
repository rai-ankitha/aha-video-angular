import { Component, Input, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-image-slider-card',
  templateUrl: './image-slider-card.component.html',
  styleUrls: ['./image-slider-card.component.css']
})
export class ImageSliderCardComponent implements OnInit{
  constructor(private dataService:DataService){}
  @Input() dataKey:any;
  @Input() dataList:any;
  isTextBottom:boolean=false;
  className:string='card-class'
  width:string='10vw';
  ngOnInit(): void {
    console.log('inside image slider');
    if(this.dataKey=='New Releases'){
         this.className="new-release-class";  
    }
    else if(this.dataKey=='Daily Serial - Mandakini'){
      this.className="dialy-serial-class"; 
    }
    else if(this.dataKey=='Trending Top 10'){
      this.className='trending-class';
    }
    else if(this.dataKey=="Actors (A-Z)"){
      this.className='actors-class';
    }
    else if(this.dataKey=="aha Originals"){
      this.className='aha-originals';
      this.isTextBottom=true;
    }
    else if(this.dataKey=="Genres"){
      this.className='genres';
      this.isTextBottom=true;
    }
    else if(this.dataKey=="News Highlights"){
      this.className='news-class';
 
    }
    else if(this.dataKey=="Getting started with aha"){
      this.className='getting-started';
     
    }
    else{
      this.className="new-release-class";
    }
   
    

  }

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    rtl:true ,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2
     },
      940: {
       items: 3
     },
     1000: {
      items: 4
    }
    },
   nav: true
  }
}


