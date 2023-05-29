import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: 'app-image-slider-card',
  templateUrl: './image-slider-card.component.html',
  styleUrls: ['./image-slider-card.component.css']
})
export class ImageSliderCardComponent implements OnInit{
  increment=0;
 
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
 
 
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 750 ), behavior: 'smooth' });
    this.increment=this.increment+1;
  }

  public scrollLeft(): void {
   
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 750), behavior: 'smooth' });
    this.increment=this.increment-1;
  }


  constructor(){
    
  }
  @Input() dataKey:any;
  @Input() dataList:any;
  isTextBottom:boolean=false;
  className:string='card-class';
  topValue=120;
  ngOnInit(): void {
    this.increment=0;
    if(this.dataKey=='New Releases'){
         this.className="new-release-class"; 
         this.topValue=150;
    }
    else if(this.dataKey=='Daily Serial - Mandakini'){
      this.className="dialy-serial-class"; 
    }
    else if(this.dataKey=='Trending Top 10'){
      this.className='trending-class';
      this.topValue=200;
    }
    else if(this.dataKey=="Actors (A-Z)"){
      this.className='actors-class';
      this.topValue=100;
    }
    else if(this.dataKey=="aha Originals"){
      this.className='aha-originals';
      this.isTextBottom=true;
      this.topValue=200;
    }
    else if(this.dataKey=="Genres"){
      this.className='genres';
      this.isTextBottom=true;
      this.topValue=100;
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

 

}


