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
  currentIndex:number=0;
  slideInterval:number=5000;
  imageAlt="https://eurogeo6.org/wp-content/uploads/2020/09/40-1038x576.jpg";
  
  goToNext(){
    const isLast=this.currentIndex==this.carouselList.length-1;
    const newIndex=isLast?0:this.currentIndex+1;
    this.currentIndex=newIndex;
  }
  goToPrevious(){
    const isFirst=this.currentIndex==0;
    const newIndex=isFirst?this.carouselList.length-1:this.currentIndex-1;
    this.currentIndex=newIndex;
  }
  ngOnInit(): void {
    this.dataService.getCarouselData().subscribe((data:any) =>{
      this.carouselList=data['data'];
      for(let item of data['data']){
        console.log(item['image']);
        
      }
      console.log(data)});
      this.autoSlideImages();
  }
selectImage(index:number){
  this.currentIndex=index
}
autoSlideImages(){
  setInterval(()=>{
    this.goToNext();

  },this.slideInterval)
}
}
