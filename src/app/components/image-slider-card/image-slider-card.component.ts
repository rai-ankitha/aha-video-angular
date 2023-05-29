import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: 'app-image-slider-card',
  templateUrl: './image-slider-card.component.html',
  styleUrls: ['./image-slider-card.component.css']
})
export class ImageSliderCardComponent implements OnInit{

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
  }

  testData: any;
  testDataShown: any;
  iTestData: number;
  constructor(){
    this.iTestData = 0;
  }
  @Input() dataKey:any;
  @Input() dataList:any;
  isTextBottom:boolean=false;
  className:string='card-class'
  ngOnInit(): void {
    
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
   
    this.testData=this.dataList;
    console.log('inside image slider');
    this.setShownData();

  }

  setShownData(){
    this.testDataShown = this.testData.slice(this.iTestData*8, (this.iTestData+1)*8);
  }

  previous() {
    if(this.iTestData != 0) {
      this.iTestData = this.iTestData - 1;
      this.setShownData();
    }
  }

  next() {
    if( ((this.iTestData+1) * 8) < this.testData.length){
      this.iTestData = this.iTestData + 1;
      this.setShownData();
    }
  }

}


